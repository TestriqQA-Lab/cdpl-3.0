import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  outputFileTracingRoot: path.join(__dirname, '../../../../'),
  serverExternalPackages: ['@prisma/client'], // Remove this line if not using Prisma or similar
};

export default nextConfig;