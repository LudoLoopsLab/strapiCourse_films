export default [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  // 'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'http://localhost:1337'],
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
