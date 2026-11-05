// next/image with `unoptimized` does not add basePath to static src strings, so
// on GitHub Pages (/Shai) a bare "/images/x.jpg" 404s. Prefix it here.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${basePath}${path}`;
