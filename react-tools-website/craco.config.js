// craco.config.js

module.exports = {
    webpack: {
      configure: {
        module: {
          rules: [
            {
              test: /\.svg$/,
              use: ['@svgr/webpack'],
            },
          ],
        },
      },
    },
  };
  