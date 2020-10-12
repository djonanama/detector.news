module.exports = {
  devServer: {
    disableHostCheck: true
  },
  pwa: {
    name: "Detector",
    short_name: "detector",
    theme_color: "#4DBA87",
    start_url: ".",
    display: "standalone",
    background_color: "#000000",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "./src/registerServiceWorker.js"
      // ...other Workbox options...
    }
  }
};
