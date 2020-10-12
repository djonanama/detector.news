<template>
  <mdb-container v-if="Object.keys(getSearch).length > 0">
    <mdb-row class="text-center">
      <mdb-col sm="2" />
      <mdb-col sm="4">
        <mdb-btn flat size="lg" darkWaves style="width:280px" disabled>
          <h2>{{ getSearch.pages.count }}</h2>
          <mdb-card-title><ins>Люди и Медиа</ins></mdb-card-title>
        </mdb-btn>
      </mdb-col>
      <mdb-col sm="4">
        <mdb-btn flat size="lg" darkWaves style="width:280px" disabled>
          <h2>{{ getSearch.posts.count }}</h2>
          <mdb-card-title><ins>Статьи</ins></mdb-card-title>
        </mdb-btn>
      </mdb-col>
      <mdb-col sm="2" />
    </mdb-row>
    <WireitemPM v-bind:wirePM="getSearch.pages.data" />

    <Wireitem
      v-for="(item, index) in getSearch.posts.data.post"
      :key="index"
      v-bind:wire="item"
    />
  </mdb-container>
</template>

<script>
import Wireitem from "./../components/base/Wireitem";
import WireitemPM from "./../components/base/WireitemPM";
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
  name: "search",
  props: {
    find: String
  },
  components: {
    WireitemPM,
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
    ...mapGetters(["getSearch"])
  },
  methods: {
    ...mapActions(["fetchSearch"])
  },
  async mounted() {
    this.fetchSearch(this.find);
  },
  watch: {
    find: function(newVal, oldVal) {
      this.fetchSearch(newVal);
    }
  }
};
</script>
