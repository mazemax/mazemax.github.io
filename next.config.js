const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  return {
    basePath: '',
    ...(!isDev ? { output: 'export' } : {}),
    compress: true,
    poweredByHeader: false,
    images: {
      unoptimized: true
    },
    eslint: {
      ignoreDuringBuilds: true
    }
  }
}