import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PAGE_SEO, SITE, SITE_URL } from "../../config/site";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function SiteSeo() {
  const { pathname } = useLocation();
  const page = PAGE_SEO[pathname] ?? PAGE_SEO["/"];
  const canonical = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

  useEffect(() => {
    document.documentElement.lang = "en";

    document.title = page.title;

    upsertMeta("name", "description", page.description);
    upsertMeta("name", "keywords", SITE.keywords);
    upsertMeta("name", "author", SITE.name);
    upsertMeta("name", "robots", "index, follow, max-image-preview:large");
    upsertMeta("name", "googlebot", "index, follow");

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE.name);
    upsertMeta("property", "og:title", page.title);
    upsertMeta("property", "og:description", page.description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:locale", "en_US");
    upsertMeta("property", "og:locale:alternate", "pt_BR");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", page.title);
    upsertMeta("name", "twitter:description", page.description);

    upsertLink("canonical", canonical);

    upsertJsonLd("seo-person-jsonld", {
      "@context": "https://schema.org",
      "@type": "Person",
      name: SITE.name,
      jobTitle: SITE.jobTitle,
      url: SITE_URL,
      description: SITE.defaultDescription,
      address: {
        "@type": "PostalAddress",
        addressLocality: "São Paulo",
        addressCountry: "BR",
      },
      sameAs: [SITE.linkedin, SITE.github],
      knowsAbout: SITE.skills,
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Al-Balqa Applied University",
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "Senior Software Engineer",
        skills: SITE.skills.join(", "),
        occupationalCategory: "Software Development",
      },
    });

    upsertJsonLd("seo-website-jsonld", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: `${SITE.name} — Portfolio`,
      url: SITE_URL,
      description: SITE.defaultDescription,
      inLanguage: ["en", "pt-BR"],
      author: {
        "@type": "Person",
        name: SITE.name,
        url: SITE_URL,
      },
    });

    upsertJsonLd("seo-profilepage-jsonld", {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      mainEntity: {
        "@type": "Person",
        name: SITE.name,
        jobTitle: SITE.jobTitle,
        url: SITE_URL,
        sameAs: [SITE.linkedin, SITE.github],
      },
    });
  }, [pathname, page.title, page.description, canonical]);

  return null;
}

export default SiteSeo;
