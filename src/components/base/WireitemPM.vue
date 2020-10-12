<template>
  <mdb-container v-if="wirePM.length > 0">
    <mdb-row class="text-center">
      <mdb-col
        class="mb-md-0 mb-5"
        v-for="(item, index) in wirePM"
        :key="index"
      >
        <router-link
          :to="{
            name: item.type_s.value == 'person' ? 'human' : 'media',
            params: {
              id: item.page_id,
              type: item.type_s.value == 'person' ? 'human' : 'media'
            }
          }"
        >
          <mdb-testimonial>
            <mdb-avatar class="mx-auto">
              <img
                :src="item.fimg_url"
                class="rounded-circle z-depth-1 img-fluid"
              />
            </mdb-avatar>
            <h4 class="font-weight-bold dark-grey-text mt-4">
              {{ item.title }}
            </h4>
          </mdb-testimonial>
        </router-link>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbCardUp,
  mdbAvatar,
  mdbIcon,
  mdbTestimonial
} from "mdbvue";

export default {
  name: "WireitemPM",
  props: {
    wirePM: Array,
    islink: Number
  },
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCardUp,
    mdbAvatar,
    mdbIcon,
    mdbTestimonial
  }
};
</script>
