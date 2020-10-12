<template>
  <mdb-container>
    <mdb-card testimonial v-if="getHumanPosts.length > 0">
      <mdb-avatar class="mt-5 mx-auto white">
        <img
          :src="getHumanPosts[0].page.fimg_url"
          class="rounded-circle img-fluid"
        />
      </mdb-avatar>
      <mdb-card-body>
        <h4 class="font-weight-bold mb-4">{{ getHumanPosts[0].page.title }}</h4>
        <hr />
        <p
          class="dark-grey-text mt-4"
          v-html="getHumanPosts[0].page.content"
        ></p>
      </mdb-card-body>
    </mdb-card>

    <div>
      <Wireitem
        v-for="(item, index) in getHumanPosts"
        :key="index"
        v-bind:wire="item"
      />
    </div>
  </mdb-container>
</template>

<script>
import Wireitem from "./../../components/base/Wireitem";
import {
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
  name: "media",
  props: ["id", "type"],
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
    ...mapGetters(["getHumanPosts"])
  },
  methods: {
    ...mapActions(["fetchHumanPosts"])
  },
  async mounted() {
    this.fetchHumanPosts(this.id);
  },
  watch: {
    id: function(newVal, oldVal) {
      this.fetchRegionPosts(newVal);
    }
  }
};
</script>
