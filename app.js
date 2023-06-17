if (typeof (PhusionPassenger) !== 'undefined') {
  PhusionPassenger.configure({ autoInstall: false })
}

const strapi = require('@strapi/strapi')
const distDir = './dist'
if (process.env.NODE_ENV == "development") {
  strapi({ "autoReload": { "enabled": true }, distDir }).start()
}
else {
  strapi({ distDir }).start()
}
// test