// To solve svg not processing issue

export const getAssetUrl = (folder, filename) => {
  if (!filename) return "";
  // Maps dynamically relative to this script context location into the assets sub-tree
  return new URL(`../assets/${folder}/${filename}`, import.meta.url).href;
};
