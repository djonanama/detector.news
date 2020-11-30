<template>
  <div id="home">
    <mdb-row class="justify-content-center mr-0 ml-0 ">
      <mdb-col
        col="12"
        sm="12"
        md="12"
        lg="12"
        xl="6"
        class="mt-auto mb-auto"
        v-for="(item, index) in getMainPosts.data"
        :key="index"
      >
        <ItemFact v-bind:wire="item" v-bind:islink="true" />
      </mdb-col>
    </mdb-row>

    <mdb-row class="justify-content-center mr-0 ml-0">
      <mdb-col col="0">
        <mdb-btn color="elegant" v-on:click="fetchMainPosts" v-show="getIsAdd"
          >Больше статей</mdb-btn
        ></mdb-col
      >
    </mdb-row>
  </div>
</template>

<script>
import ItemFact from "./../components/base/ItemFact";
import Percent from "./../components/base/Percent";
import {
  mdbMasonry,
  mdbMasonryItem,
  mdbCardGroup,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardUp,
  mdbView,
  mdbMask,
  mdbIcon,
  mdbChip,
  mdbRow,
  mdbCol,
  mdbBtn
} from "mdbvue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    mdbMasonry,
    mdbMasonryItem,
    mdbCardGroup,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardUp,
    mdbView,
    mdbMask,
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbChip,
    mdbBtn,
    ItemFact,
    Percent
    // About: () => import('@/components/home/About'),
    // Articles: () => import('@/components/home/Articles'),
    // Banner: () => import('@/components/home/Banner'),
    // Social: () => import('@/components/home/Social'),
    // Subscribe: () => import('@/components/home/Subscribe'),
  },
  computed: {
    ...mapGetters(["getMainPosts", "getIsAdd"])
  },
  methods: {
    ...mapActions(["fetchMainPosts"])
  },
  async mounted() {
    this.fetchMainPosts();
  }
};
</script>
