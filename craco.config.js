const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@helpers': path.resolve(__dirname, 'src/helpers/'),
      '@layouts': path.resolve(__dirname, 'src/layouts/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
    },
  },
}
