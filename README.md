# egg-plugin-elasticsearch

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![CC BY-NC-ND 4.0](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)

[toc]

## 配置

### 单客户端配置

```js
{
  elasticsearch:{
    client:{
      node: 'https://test-pc.yunkc.cn/es/api/',
      auth: {
        username: 'elastic',
        password: 'qazwsx'
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
    clients:[
      {
        id:'xxx', // 唯一 ID,在使用时通过getClient(id) 获取对应客户端. 如果设置为default, 可以直接使用 ctx.es 获取并使用
        node: 'https://test-pc.yunkc.cn/es/api/',
        auth: {
          username: 'elastic',
          password: 'qazwsx'
        },
        maxRetries: 5,
        requestTimeout: 60000,
        sniffOnStart: true
      }
    ]
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
  const client = app.get('clientA')
  // 通过ctx获取。 es为简写
  const client = ctx.get('clientA')
  const client = ctx.get('clientA')
  try {
    const result = await client.info()
    return ctx.setResult(result.body)
  } catch (error) {
    console.log(error)
    return ctx.setError([error])
  }
}
```

## 其它
无