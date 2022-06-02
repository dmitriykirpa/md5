module.exports = {
  integrations: {
    md5: {
      location: '@vue-storefront/md5-api/server',
      configuration: {
        api: {
          url: process.env.API_URL
        }
      }
    }
  }
};
