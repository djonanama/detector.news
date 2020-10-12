<template>
  <div class="site-main">
    {{ id }} - {{ type }}
    <article
      class="post type-post status-publish format-standard has-post-thumbnail hentry category-new tag-media three-fourths-centered-r"
    >
      <div v-for="(item, index) in getPosts" :key="index">
        <p v-html="item.title"></p>
        <p v-html="item.content"></p>
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "view",
  props: ["id", "type"],
  computed: {
    ...mapGetters(["getPosts"])
  },
  methods: {
    ...mapActions(["fetchPosts"])
  },
  async mounted() {
    console.log({ id: this.id, type: this.type });
    console.log(this);
    this.fetchPosts();
  }
};
</script>

<style scoped>
@import "./style/style.css";
@import "./style/layout.css";
</style>
