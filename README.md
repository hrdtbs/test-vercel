

|          | Production | Preview     |
| -------- | ---------- | ----------- |
| NODE_ENV | roduction  | development |

```js
const nextConfig = {
    env:{
        CUSTOM_ENV: process.env.NODE_ENV
    }
}

module.exports = nextConfig
```

### preview

NODE_ENV：production

CUSTOM_ENV：development

### master

NODE_ENV：production

CUSTOM_ENV：development

### deploy

NODE_ENV：production

CUSTOM_ENV：production