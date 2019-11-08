module.exports = {
  author: 'dev:tf',
  middleware: ['addSuffix'],
  addSuffix: {
    enable: false,
    ignore: '/not-found'
  },
  security: {
    csrf: {
      enable: false
    }
  }
}