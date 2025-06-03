// Same as in next.config.js

const isProd = process.env.NODE_ENV === "production";
export const basePath = isProd ? "/tiara-portfolio" : "";
