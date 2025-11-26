import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@prisma/client'], // Remove this line if not using Prisma or similar
  outputFileTracingRoot: path.join(__dirname, '../../../'),
};

export default nextConfig;