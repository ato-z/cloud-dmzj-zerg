# ʕ •́؈•̀) `云函数版的动漫之家爬虫`

请先登录 [cloudflare](https://dash.cloudflare.com/) 并创建一个[workers](https://developers.cloudflare.com/workers/tutorials)

并设置 [wrangler.toml](./wrangler.toml) 文件中的， 关于[wrangler.toml](https://developers.cloudflare.com/workers/wrangler/configuration/#using-environment-variables) 说明
```toml
name = "你创建的workers名称"
```

## 📦 build 打包项目
```sh
npm run build
```

## 🚗 💻 dev 运行开发环境
```sh
npm run dev
```

## 🦦 login 登录
发包前需要先进行登录，会自动打开浏览器进行授权登录, 或使用[令牌登录](https://dash.cloudflare.com/profile/api-tokens)
```sh
wrangler login

# 如果是mac端，会因为没有写入权限而登录失败
# sudo wrangler login

# 也可以使用配置api令牌的方式登录
wrangler config
```

## 👩 🚀 发包
```sh
wrangler publish
```