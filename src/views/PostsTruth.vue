<template>
  <div id="home">
    <mdb-row class="row mr-0 ml-0">
      <mdb-col
        col="12"
        sm="12"
        md="12"
        lg="12"
        xl="6"
        class="mt-auto mb-auto"
        v-for="(item, index) in getPosts.data"
        :key="index"
      >
        <ItemFact v-bind:wire="item" v-bind:islink="true" />
      </mdb-col>
    </mdb-row>
 
    <mdb-row class="justify-content-center mr-0 ml-0">
      <mdb-col col="0">
        <mdb-btn
          color="elegant"
          v-on:click="
            fetchPostsTruth({
              id: id,
              type: type,
              tid: tid
            })
          "
          v-show="getIsAddPosts"
          >Больше статей</mdb-btn
        ></mdb-col
      >
    </mdb-row>
  </div>
</template>

<script>
import ItemFact from "./../components/base/ItemFact";
import Percent from "./../components/base/Percent";
import { mdbChip, mdbRow, mdbCol, mdbBtn } from "mdbvue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PostsTruth",
  props: {
    id: String,
    type: String,
    tid: String
  },
  components: {
    mdbRow,
    mdbCol,
    mdbChip,
    mdbBtn,
    ItemFact,
    Percent
  },
  computed: {
    ...mapGetters(["getPosts", "getIsAddPosts"])
  },
  methods: {
    ...mapActions(["fetchPostsTruth", "fetchType"])
  },
  async mounted() {
    this.fetchType(this.type);
    this.fetchPostsTruth({
      id: this.id,
      type: this.type,
      tid: this.tid
    });
  },
  watch: {
    id: function(newVal, oldVal) {
      this.fetchType(this.type);
      this.fetchPostsTruth({
        id: newVal,
        type: this.type,
        tid: this.tid
      });
    },
    type: function(newVal, oldVal) {
      this.fetchType(newVal);
      this.fetchPostsTruth({
        id: this.id,
        type: newVal,
        tid: this.tid
      });
    },
    tid: function(newVal, oldVal) {
      this.fetchType(newVal);
      this.fetchPostsTruth({
        id: this.id,
        type: this.type,
        tid: newVal
      });
    }
  }
};
</script>

<style lang="stylus" scoped>

.chip-lg .chipBig * {
	height: 104px !important;
	line-height: 104px !important;
	border-radius: 26px;
}
</style>
