'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  config.elasticsearch = {
    client: {
      node: 'https://127.0.0.1:9200',
      auth: {
        username: '',
        password: ''
      },
      maxRetries: 5,
      requestTimeout: 60000
    },
    app: true,
    agent: false
  }

  return {
    ...config
  }
}
