/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@use "styles/mixins.scss" as *; @import "styles/functions.scss";`,
  },
}


module.exports = nextConfig
