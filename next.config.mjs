import withExportImages from 'next-export-optimize-images'

/** @type {import('next').NextConfig} */
const nextConfig = withExportImages({
  output: 'export',
  images: {
    // tu peux garder les valeurs par défaut ou affiner
    deviceSizes: [375, 576, 768, 992, 1200, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
})

export default nextConfig
