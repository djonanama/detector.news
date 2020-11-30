<template>
  <div id="home row" v-if="Object.keys(getSearch).length > 0">
    <h2 class="col">
      Результат поиcка: <i class="blue-text">"{{ find.trim() }}"</i>
    </h2>

    <mdb-row class="text-center col">
      <mdb-col sm="2" />
      <mdb-col sm="4">
        <mdb-btn flat size="lg" darkWaves style="width:280px" disabled>
          <h2>{{ getSearch.page[0].count }}</h2>
          <mdb-card-title><ins>Люди и Медиа</ins></mdb-card-title>
        </mdb-btn>
      </mdb-col>
      <mdb-col sm="4">
        <mdb-btn flat size="lg" darkWaves style="width:280px" disabled>
          <h2>{{ getSearch.post[1].count }}</h2>
          <mdb-card-title><ins>Статьи</ins></mdb-card-title>
        </mdb-btn>
      </mdb-col>
      <mdb-col sm="2" />
    </mdb-row>
    <hr />
    <h2 class="col">
      Люди и Медиа
    </h2>
    <AvatarPage v-bind:wirePM="getSearch.page[1].data" />
    <hr />
    <h2 class="col">
      Статьи
    </h2>
    <mdb-row class="row mr-0 ml-0 col">
      <mdb-col
        col="12"
        sm="12"
        md="12"
        lg="12"
        xl="6"
        class="mt-auto mb-auto"
        v-for="(item, index) in getSearch.post[1].data"
        :key="index"
      >
        <ItemFact v-bind:wire="item" v-bind:islink="true" />
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
import ItemFact from "./../components/base/ItemFact";
import AvatarPage from "./../components/base/AvatarPage";
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
    AvatarPage,
    ItemFact,
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
    this.fetchSearch(this.find.trim());
  },
  watch: {
    find: function(newVal, oldVal) {
      this.fetchSearch(newVal.trim());
    }
  }
};
</script>
