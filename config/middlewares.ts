export default [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  // 'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'http://localhost:1337', 'https://strapi-film-front-99aqf31hy-neuroloops.vercel.app', 'https://strapifilm.loops.ovh'],
      headers: [
        '*'
      ],
      // keepHeaderOnError: true,
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',

]
