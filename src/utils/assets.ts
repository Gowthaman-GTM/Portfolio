/**
 * Utility function to get correct URL for static public assets,
 * taking into account Vite's base path for GitHub Pages deployment.
 */
export const getAssetUrl = (path: string): string => {
  if (!path) return '';
  // If it's already an external URL or data URI, return as-is
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env.BASE_URL || './';
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${normalizedBase}${cleanPath}`;
};
