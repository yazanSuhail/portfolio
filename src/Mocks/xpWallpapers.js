/** Classic Windows XP wallpapers (800×600 originals from Microsoft) */

export const XP_WALLPAPERS = [
  { id: "bliss", name: "Bliss", file: "bliss.jpg" },
  { id: "azul", name: "Azul", file: "azul.jpg" },
  { id: "ascent", name: "Ascent", file: "ascent.jpg" },
  { id: "autumn", name: "Autumn", file: "autumn.jpg" },
  { id: "follow", name: "Follow", file: "follow.jpg" },
  { id: "friend", name: "Friend", file: "friend.jpg" },
  { id: "moon_flower", name: "Moon Flower", file: "moon_flower.jpg" },
  {
    id: "red_moon_desert",
    name: "Red Moon Desert",
    file: "red_moon_desert.jpg",
  },
  { id: "vortec_space", name: "Vortec Space", file: "vortec_space.jpg" },
  { id: "wind", name: "Wind", file: "wind.jpg" },
  { id: "tulips", name: "Tulips", file: "tulips.jpg" },
  { id: "radiance", name: "Radiance", file: "radiance.jpg" },
  { id: "peace", name: "Peace", file: "peace.jpg" },
  { id: "power", name: "Power", file: "power.jpg" },
  { id: "home", name: "Home", file: "home.jpg" },
  { id: "crystal", name: "Crystal", file: "crystal.jpg" },
];

export const DEFAULT_WALLPAPER_ID = "bliss";

export const WALLPAPER_POSITIONS = [
  { id: "center", label: "Center" },
  { id: "tile", label: "Tile" },
  { id: "stretch", label: "Stretch" },
];

export const DEFAULT_WALLPAPER_POSITION = "stretch";

export function getWallpaperById(id) {
  return XP_WALLPAPERS.find((w) => w.id === id) ?? XP_WALLPAPERS[0];
}

export function getWallpaperUrl(wallpaper) {
  return `/wallpapers/${wallpaper.file}`;
}
