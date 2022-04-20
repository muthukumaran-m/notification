const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'/notification',
  outputDir:'docs',
  pwa:{
    workboxPluginMode: "InjectManifest",
    workboxOptions:{
        swSrc:"./src/sw.js",
    }
}
})
