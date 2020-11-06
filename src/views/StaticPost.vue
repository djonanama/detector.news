<template>
  <div class="site-main" v-if="getStaticPost.length > 0">
    <Wireitem
      v-for="(item, index) in getStaticPost"
      :key="index"
      v-bind:wire="item"
      v-bind:islink="0"
    />
    <article
      class="post type-post status-publish format-standard has-post-thumbnail hentry category-new tag-media three-fourths-centered-r"
      v-html="getStaticPost[0].content"
    ></article>
  </div>
</template>

<script>
import Wireitem from "./../components/base/Wireitem";
import {
  mdbSpinner,
  mdbAvatar,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardHeader,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbCardFooter,
  mdbCardUp,
  mdbCardAvatar,
  mdbCardGroup,
  mdbBtn,
  mdbView,
  mdbMask,
  mdbIcon
} from "mdbvue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "staticpost",
  props: ["id"],
  components: {
    Wireitem,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardGroup,
    mdbBtn,
    mdbView,
    mdbMask,
    mdbIcon,
    mdbAvatar
  },
  computed: {
    ...mapGetters(["getStaticPost"])
  },
  methods: {
    ...mapActions(["fetchStaticPost"])
  },
  async mounted() {
    this.fetchStaticPost(this.id);
  },
  watch: {
    id: function(newVal, oldVal) {
      this.getStaticPost(newVal);
    }
  }
};

// /* @import "./style/style.css";
// @import "./style/layout.css"; */
// /* @import "./style/style-image.css"; */
// /* @import "./style/style-img.css"; */
</script>

<style>
img {
  height: auto;
  max-width: 100%;
  position: relative;
}
</style>
