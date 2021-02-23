module.exports = {
  webpack: config => {
    config.output.library = "subapp"
    config.output.libraryTarget = "umd"
    // config.output.publicPath = "http://10.10.116.45:3000/"
    return config
  },
  devServer: configFunction => {
    return function (proxy, allowdHost) {
      const config = configFunction(proxy, allowdHost)
      config.headers = {
        'Access-Control-Allow-Origin': '*'
      }
      return config
    }
  }
}