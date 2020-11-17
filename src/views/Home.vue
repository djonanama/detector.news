<template>
  <div id="home">new version green work! #2
    <!-- <div> -->
    <!-- <mdb-chip src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="Contact Person" waves> John Doe</mdb-chip>
    <mdb-chip src="https://mdbootstrap.com/img/Photos/Avatars/avatar-10.jpg" alt="Contact Person" size="md" waves> Anna Smith</mdb-chip> -->
    <!-- <mdb-chip :src="imageURL" alt="Contact Person" class="chipBig" size="lg lg" waves> Илон Маск</mdb-chip>
<mdb-chip :src="'/uploads/2020/09/160077684321277f5e93e1726ec077f2120959974901f.jpg'" alt="Contact Person" size="lg" waves> Илон Маск</mdb-chip>

  </div>
    home

    The president's own FBI director said that the greatest domestic terrorist threat is white supremacists. -->

    <!-- <articles>
      <banner />
    </articles>

    <about />

    <subscribe />

    <social /> -->
  </div>
</template>

<script>
import { mdbChip } from "mdbvue";
export default {
  name: "Home",
  // data() {
  //   return {
  //     imageURL: require("@/assets/logo.png"),
  //     publicPath: process.env.BASE_URL
  //   };
  // },
  components: {
    mdbChip
    // About: () => import('@/components/home/About'),
    // Articles: () => import('@/components/home/Articles'),
    // Banner: () => import('@/components/home/Banner'),
    // Social: () => import('@/components/home/Social'),
    // Subscribe: () => import('@/components/home/Subscribe'),
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
