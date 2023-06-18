if (typeof (PhusionPassenger) !== 'undefined') {
  PhusionPassenger.configure({ autoInstall: false })
}

const strapi = require('@strapi/strapi')
const distDir = './dist'

async function startStrapi() {

  if (process.env.NODE_ENV == "development") {
    // Start the Strapi server in development mode
    await strapi({ autoReload: { enabled: true }, distDir }).start()
  } else {
    await strapi({ distDir }).start()
  }
}

startStrapi()
