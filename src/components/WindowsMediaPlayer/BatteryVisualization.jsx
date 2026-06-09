import { useEffect, useRef } from "react";
import { VizCanvas } from "./styles";

function createParticle(width, height, bass) {
  const angle = Math.random() * Math.PI * 2;
  const speed = 0.4 + Math.random() * 1.6 + bass * 0.04;
  return {
    x: width * (0.35 + Math.random() * 0.3),
    y: height * (0.55 + Math.random() * 0.2),
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed - 0.5,
    life: 0.4 + Math.random() * 0.6,
    maxLife: 0.4 + Math.random() * 0.6,
    size: 1 + Math.random() * 2.5 + bass * 0.08,
    hue: 35 + Math.random() * 25,
  };
}

function BatteryVisualization({ audioRef, isPlaying }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const analyserRef = useRef(null);
  const audioCtxRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const audio = audioRef?.current;
    const canvas = canvasRef.current;
    if (!audio || !canvas) return undefined;

    const ctx = canvas.getContext("2d");
    let connected = false;

    const setupAudio = async () => {
      if (audioCtxRef.current) return;
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.82;

      const source = audioCtx.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);

      audioCtxRef.current = audioCtx;
      analyserRef.current = analyser;
      connected = true;
    };

    setupAudio().catch(() => {});

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const data = new Uint8Array(128);

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      let bass = 0;
      if (analyserRef.current && isPlaying) {
        analyserRef.current.getByteFrequencyData(data);
        bass =
          (data[2] + data[4] + data[6] + data[8]) / 4 / 255;
      }

      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, "#0a1028");
      bg.addColorStop(0.45, "#101a3d");
      bg.addColorStop(1, "#060a18");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      if (isPlaying && particlesRef.current.length < 220) {
        const burst = 2 + Math.floor(bass * 10);
        for (let i = 0; i < burst; i += 1) {
          particlesRef.current.push(createParticle(w, h, bass));
        }
      }

      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx * (1 + bass * 2);
        p.y += p.vy * (1 + bass * 1.5);
        p.vy += 0.01;
        p.life -= 0.012;

        const alpha = Math.max(0, p.life / p.maxLife);
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 3
        );
        gradient.addColorStop(0, `hsla(${p.hue}, 90%, 72%, ${alpha})`);
        gradient.addColorStop(0.4, `hsla(${p.hue}, 85%, 55%, ${alpha * 0.7})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 80%, 40%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 + bass * 2), 0, Math.PI * 2);
        ctx.fill();

        return (
          p.life > 0 &&
          p.x > -20 &&
          p.x < w + 20 &&
          p.y > -20 &&
          p.y < h + 20
        );
      });

      if (isPlaying) {
        const glow = ctx.createRadialGradient(
          w * 0.5,
          h * 0.62,
          0,
          w * 0.5,
          h * 0.62,
          w * 0.35
        );
        glow.addColorStop(0, `rgba(218, 165, 60, ${0.12 + bass * 0.25})`);
        glow.addColorStop(1, "rgba(218, 165, 60, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, w, h);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
      if (connected && audioCtxRef.current?.state !== "closed") {
        audioCtxRef.current.suspend();
      }
    };
  }, [audioRef, isPlaying]);

  useEffect(() => {
    if (isPlaying && audioCtxRef.current?.state === "suspended") {
      audioCtxRef.current.resume();
    }
  }, [isPlaying]);

  return <VizCanvas ref={canvasRef} />;
}

export default BatteryVisualization;
