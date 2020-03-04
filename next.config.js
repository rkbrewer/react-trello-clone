const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  }
});
