# egg-plugin-elasticsearch

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![CC BY-NC-ND 4.0](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**目录**

- [配置](#%E9%85%8D%E7%BD%AE)
  - [单客户端配置](#%E5%8D%95%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE)
  - [多客户端配置](#%E5%A4%9A%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE)
  - [plugin.js配置](#pluginjs%E9%85%8D%E7%BD%AE)
- [使用](#%E4%BD%BF%E7%94%A8)
  - [单客户端示例](#%E5%8D%95%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%A4%BA%E4%BE%8B)
  - [多客户端示例](#%E5%A4%9A%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%A4%BA%E4%BE%8B)
- [其它](#%E5%85%B6%E5%AE%83)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
## 配置

### 单客户端配置

```js
{
  elasticsearch:{
    client:{
      node: 'https://localhost:9200/',
      auth: {
        username: '',
        password: ''
      },
      maxRetries: 5,
      requestTimeout: 60000,
      sniffOnStart: true
    }
  }
}
```
### 多客户端配置
```js
{
  elasticsearch:{
    clients: {
      clientA: {
        node: 'https://localhost:9200/',
        auth: {
          username: '',
          password: ''
        },
        maxRetries: 5,
        requestTimeout: 60000,
        sniffOnStart: true
      },
      clientB: {
        node: 'https://localhost/es/api2/',
        auth: {
          username: '',
          password: ''
        },
        maxRetries: 5,
        requestTimeout: 60000,
        sniffOnStart: true
      }
    }
  }
}
```


### plugin.js配置

```js
{
  elasticsearch: {
    enable: true,
    package: 'egg-plugin-elasticsearch'
  }
}
```

## 使用

### 单客户端示例
```js
public async demo () {
  const { ctx, app } = this
  // 通过app获取。 
  const client = app.elasticsearch
  // 通过ctx获取。 es为简写
  const client = ctx.elasticsearch
  const client = ctx.es
  try {
    const result = await client.info()
    return ctx.setResult(result.body)
  } catch (error) {
    console.log(error)
    return ctx.setError([error])
  }
}
```

### 多客户端示例
```js
public async demo () {
  const { ctx, app } = this
  // 通过app获取。 
  const client = app.elasticsearch.get('clientA')
   const clientB = app.elasticsearch.get('clientB')
  // 通过ctx获取。 es为简写
  const clientA = ctx.elasticsearch.get('clientA')
  const clientB = ctx.es.get('clientB')
  try {
    const result = await clientA.info()
    return ctx.setResult(result.body)
  } catch (error) {
    console.log(error)
    return ctx.setError([error])
  }
}
```

## 其它
使用了elasticsearch官方 SDK7.12.0 做的封装，API使用请自行查阅：

[Elasticsearch JavaScript Client](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html)
