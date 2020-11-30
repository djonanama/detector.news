<template>
  <div v-if="wirePM.length > 0">
    <mdb-row class="justify-content-center mr-0 ml-0">
      <mdb-col
        sm="1"
        md="4"
        lg="3"
        class="text-center mt-4"
        v-for="(item, index) in wirePM"
        :key="index"
      >
        <router-link
          :to="{
            name: 'posts',
            params: {
              id: item.page_id.toString(),
              type: item.type_s.value
            }
          }"
        >
          <mdb-card class="hoverable pt-4" ecommerce>
            <mdb-card-avatar color="white" class="mx-auto"
              ><img
                style="width: 150px"
                :src="item.fimg_url"
                class="rounded-circle"
            /></mdb-card-avatar>
            <mdb-card-body>
              <mdb-card-title>{{ item.title }}</mdb-card-title>
            </mdb-card-body>
          </mdb-card>
        </router-link>
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
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

export default {
  name: "AvatarPage",
  props: {
    wirePM: Array,
    islink: Number
  },
  components: {
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
  }
};
</script>
