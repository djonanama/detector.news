<template>
  <div class="flexible-content">
    <CoreNavBar />
    <!-- style="padding-top:85px" -->
    <main style="padding-top:85px">
      <CoreMainContent />
      <CoreFooter />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    title: "DETECTOR",
    titleTemplate: "%s | DETECTOR",
    htmlAttrs: { lang: "ru" },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  },
  components: {
    CoreNavBar: () => import("@/components/core/NavBar"),
    CoreMainContent: () => import("@/components/core/MainContent"),
    CoreFooter: () => import("@/components/core/Footer")
  }
};

//max-height: 100vh !important;
</script>

<style lang="stylus">
html {
  height: 100%;
}

body {
  position: relative;
  margin: 0;
  min-height: 100%;
}

header {
   background: blue;
}

main {
  padding-bottom: 30px;
}

.castom-fix-footer {
  position: absolute;
  bottom: -50px;
  width: 100%;
  height: 100px;
}
</style>
