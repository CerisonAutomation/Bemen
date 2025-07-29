import fs from 'fs';
import path from 'path';

const requiredEnv = ['NEXT_PUBLIC_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_ANON_KEY'];
let missing = [];
requiredEnv.forEach((env) => {
  if (!process.env[env]) missing.push(env);
});

if (missing.length) {
  console.error('❌ Missing env variables:', missing.join(', '));
  process.exit(1);
}

const vercelJson = path.join(process.cwd(), 'vercel.json');
if (!fs.existsSync(vercelJson)) {
  fs.writeFileSync(vercelJson, JSON.stringify({
    buildCommand: "npm run build",
    outputDirectory: ".next",
    cleanUrls: true,
    trailingSlash: false
  }, null, 2));
}

const nextConfig = path.join(process.cwd(), 'next.config.js');
if (!fs.existsSync(nextConfig)) {
  fs.writeFileSync(nextConfig, `
    module.exports = {
      reactStrictMode: true,
      images: { domains: ['localhost', 'yourdomain.com'] },
      eslint: { ignoreDuringBuilds: true }
    }
  `);
}

console.log('✅ Autofix complete!');
