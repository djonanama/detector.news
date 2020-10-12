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
          <mdb-card-title
            ><h2>
              <strong>{{ getCategory.name }}</strong>
            </h2></mdb-card-title
          >
          <mdb-card-text>{{ getCategory.description }}</mdb-card-text>
        </mdb-card-body>
      </mdb-card>
    </mdb-row>
    <div>
      <Wireitem
        v-for="(item, index) in getThemePosts"
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
  name: "theme",
  props: ["id", "type"],
  data() {
    return {
      theme: "this.getThemePosts"
    };
  },
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
    ...mapGetters(["getThemePosts", "getCategory"])
  },
  methods: {
    ...mapActions(["fetchThemePosts", "fetchCategory"])
  },
  async mounted() {
    this.fetchThemePosts(this.id);
    this.fetchCategory(this.id);
  },
  watch: {
    id: function(newVal, oldVal) {
      this.fetchThemePosts(newVal);
      this.fetchCategory(newVal);
    }
  }
};
</script>
