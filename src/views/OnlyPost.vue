<template>
  <div
    class="site-main"
    style="padding-top:-85px"
    v-if="Object.keys(getOnlyPost).length > 0"
  >
    <mdb-container>
      <mdb-view v-if="getOnlyPost.fimg_url.length > 0">
        <img :src="getOnlyPost.fimg_url" class="img-fluid" />
        <h1>
          <mdb-mask
            flex-center
            overlay="black-light text-center"
            :text="getOnlyPost.title"
          />
        </h1>
      </mdb-view>
      <h1 class="text-center" v-else>{{ getOnlyPost.title }}</h1>

      <mdb-row class="row mr-0 ml-0">
        <ItemFact v-bind:wire="getOnlyPost" v-bind:islink="false" />
      </mdb-row>
      <mdb-row>
        <mdb-col>
          <div style="float: left">
            <router-link
              v-if="Object.keys(getOnlyPost.author_val).length > 0"
              :to="{
                name: 'posts',
                params: {
                  id: getOnlyPost.author_val.author_id.toString(),
                  type: 'author'
                }
              }"
            >
              <mdb-chip
                :src="getOnlyPost.author_val.mpp_avatar[150]"
                alt="Author"
                size="lg"
                waves
              >
                {{ getOnlyPost.author_val.first_name }}
                {{ getOnlyPost.author_val.last_name }}</mdb-chip
              >
            </router-link>
          </div>
          <div style="float: right">
            <mdb-chip color="white lighten-4" size="lg" waves="false">
              Дата публикации:
              {{ moment(getOnlyPost.date).format("DD.MM.YYYY") }}
            </mdb-chip>
          </div>
        </mdb-col>
      </mdb-row>
      <section class="section-preview">
        <router-link
          v-for="(item, index) in getOnlyPost.tag_val"
          :key="index"
          :to="{
            name: 'posts',
            params: { id: item.tag_id.toString(), type: 'tag' }
          }"
        >
          <span class="badge badge-light ml-2">#{{ item.name }}</span>
        </router-link>
      </section>

      <hr />
      <article
        class="post type-post status-publish format-standard has-post-thumbnail hentry category-new tag-media"
        v-html="getOnlyPost.content"
      ></article>
    </mdb-container>
  </div>
</template>

<script>
import ItemFact from "./../components/base/ItemFact";
import moment from "moment";
import {
  mdbBadge,
  mdbChip,
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
  name: "OnlyPost",
  props: {
    id: String
  },
  components: {
    ItemFact,
    mdbBadge,
    mdbChip,
    mdbSpinner,
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
    ...mapGetters(["getOnlyPost"])
  },
  methods: {
    ...mapActions(["fetchOnlyPost"]),
    moment
  },
  async mounted() {
    this.fetchOnlyPost(this.id);
  },
  watch: {
    id: function(newVal, oldVal) {
      this.fetchOnlyPost(newVal);
    }
  }
};
</script>

<style>
img {
  height: auto;
  max-width: 100%;
  position: relative;
}
</style>
