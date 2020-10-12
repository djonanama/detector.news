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
          <mdb-card-title class="pt-1">
            <h2 v-if="getRegionPosts.length > 0">
              <strong>{{
                getRegionPosts[0].geo_locate.label.substring(
                  getRegionPosts[0].geo_locate.label.lastIndexOf("/ ") + 2
                )
              }}</strong>
            </h2>
          </mdb-card-title>
        </mdb-card-body>
      </mdb-card>
    </mdb-row>
    <div>
      <Wireitem
        v-for="(item, index) in getRegionPosts"
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
  name: "region",
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
    ...mapGetters(["getRegionPosts"])
  },
  methods: {
    ...mapActions(["fetchRegionPosts"])
  },
  async mounted() {
    this.fetchRegionPosts(this.id);
  },
  watch: {
    id: function(newVal, oldVal) {
      this.fetchRegionPosts(newVal);
    }
  }
};
</script>
