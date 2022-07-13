# egg-plugin-elasticsearch

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![CC BY-NC-ND 4.0](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)

[toc]

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
无