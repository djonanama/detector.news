<template>
  <mdb-container>
    <mdb-row>
      <mdb-card reverse>
        <mdb-view hover cascade>
          <a href="">
            <mdb-card-image
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
              alt="Card image cap"
            ></mdb-card-image>
            <mdb-mask waves overlay="white-slight"></mdb-mask>
          </a>
        </mdb-view>
        <mdb-card-body class="text-center" cascade>
          <mdb-card-title class="pt-1"
            ><h2>
              <strong v-if="id == 1">Правда</strong>
              <strong v-if="id == 2">В основном правда</strong>
              <strong v-if="id == 3">Наполовину правда</strong>
              <strong v-if="id == 4">В основном ложь</strong>
              <strong v-if="id == 5">Ложь</strong>
            </h2></mdb-card-title
          >
        </mdb-card-body>
      </mdb-card>
    </mdb-row>
    <div>
      <Wireitem
        v-for="(item, index) in getTruthPosts"
        :key="index"
        v-bind:wire="item"
      />
    </div>
  </mdb-container>
</template>

<script>
import Wireitem from "./../../components/base/Wireitem";
import {
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
  name: "truth",
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
    mdbIcon
  },
  computed: {
    ...mapGetters(["getTruthPosts"])
  },
  methods: {
    ...mapActions(["fetchTruthPosts"])
  },
  async mounted() {
    this.fetchTruthPosts(this.id);
  },
  watch: {
    id: function(newVal, oldVal) {
      this.fetchTruthPosts(newVal);
    }
  }
};
</script>
