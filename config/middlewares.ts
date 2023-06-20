export default [
  'strapi::errors',
  'strapi::security',

  {
    name: 'strapi::cors',
    config: {
      origin: ['*'],
      headers: [
        'Content-Type',
        'Authorization',
        'Access-Control-Allow-Origin',
      ],
      keepHeaderOnError: true,
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',

]
