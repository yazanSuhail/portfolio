import { useCallback, useEffect, useState } from "react";
import {
  DEFAULT_ICON_SIZE_ID,
  getIconSizePreset,
} from "../Mocks/desktopIconSizes";
import {
  DEFAULT_WALLPAPER_ID,
  DEFAULT_WALLPAPER_POSITION,
  getWallpaperById,
  getWallpaperUrl,
} from "../Mocks/xpWallpapers";

const STORAGE_KEY = "xp-desktop-settings";
const LEGACY_WALLPAPER_KEY = "xp-desktop-wallpaper";

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed?.wallpaperId) return parsed;
    }
    const legacy = localStorage.getItem(LEGACY_WALLPAPER_KEY);
    if (legacy) {
      const parsed = JSON.parse(legacy);
      if (parsed?.wallpaperId) {
        return { ...parsed, iconSizeId: DEFAULT_ICON_SIZE_ID };
      }
    }
  } catch {
    /* ignore */
  }
  return null;
}

function writeStored(settings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

export function useDesktopSettings() {
  const stored = readStored();
  const [wallpaperId, setWallpaperId] = useState(
    stored?.wallpaperId ?? DEFAULT_WALLPAPER_ID,
  );
  const [position, setPosition] = useState(
    stored?.position ?? DEFAULT_WALLPAPER_POSITION,
  );
  const [iconSizeId, setIconSizeId] = useState(
    stored?.iconSizeId ?? DEFAULT_ICON_SIZE_ID,
  );

  const wallpaper = getWallpaperById(wallpaperId);
  const wallpaperUrl = getWallpaperUrl(wallpaper);
  const iconSize = getIconSizePreset(iconSizeId);

  useEffect(() => {
    writeStored({ wallpaperId, position, iconSizeId });
  }, [wallpaperId, position, iconSizeId]);

  const applyDisplaySettings = useCallback(
    ({ wallpaperId: nextWp, position: nextPos, iconSizeId: nextSize }) => {
      if (nextWp != null) setWallpaperId(nextWp);
      if (nextPos != null) setPosition(nextPos);
      if (nextSize != null) setIconSizeId(nextSize);
    },
    [],
  );

  return {
    wallpaperId,
    position,
    iconSizeId,
    iconSize,
    wallpaper,
    wallpaperUrl,
    applyDisplaySettings,
  };
}
