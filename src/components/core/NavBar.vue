<template>
  <mdb-navbar
    class="special-color-dark fixed flex p-2 m-auto top-0 animated"
    position="top"
    togglerIcon="search"
    dark
    hamburger
    expand="xl"
  >
    <router-link :to="{ name: 'home' }" style="z-index:-100">
      <mdb-navbar-brand
        class="text-white text-uppercase pt-0 pb-0"
        style="font-weight:600"
      >
        Детектор
      </mdb-navbar-brand>
    </router-link>
    <!-- Navbar brand -->
    <mdb-navbar-nav>
      <mdb-dropdown tag="li" mega-menu class="nav-item">
        <mdb-dropdown-toggle
          slot="toggle"
          class="text-uppercase"
          tag="a"
          transparent
          nav-link
          waves-fixed
          style="font-weight:600"
        >
          Меню
        </mdb-dropdown-toggle>
        <mdb-dropdown-menu
          class="mega-menu v-2 z-depth-1 special-color py-5 px-3"
        >
          <div class="row">
            <div
              class="col-md-6 col-xl sub-menu mb-xl-4 mb-4"
              v-for="(subitem, el) in getMegaMenuItem"
              :key="el"
            >
              <h6 class="sub-title text-uppercase font-weight-bold white-text">
                {{ el }}
              </h6>
              <RecursionMenuItems
                v-for="item in subitem.data"
                :treeData="item"
                :key="item.id"
                :type="subitem.type"
              />
            </div>
          </div>
        </mdb-dropdown-menu>
      </mdb-dropdown>
    </mdb-navbar-nav>
    
    <!-- navbar-collapse show-navbar  style overflow: initial; 
       navbar-collapse hide-navbar collapse overflow: initial; -->
    <mdb-navbar-toggler>
      <mdb-navbar-nav right class="mt-3">
        <mdb-input
          class="mt-0 mb-3 inputwhite"
          placeholder="Что вы ищете?"
          ariaDescribedBy="button-addon2"
          v-model="search"
          @keyup="goSearch()"
        >
          <mdb-btn
            color="primary"
            size="md"
            group
            slot="append"
            id="button-addon2"
            @click="goSearch()"
            >Найти</mdb-btn
          >
        </mdb-input>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
  <!--/.Navbar-->
</template>

<style lang="stylus">
.navbar-brand {
  position: absolute;
  width: 99.4%;
  text-align: center;
  margin-left: 0%;
  top: 8px;
  order: unset;
}
</style>

<script>
import RecursionMenuItems from "../base/RecursionMenuItems";
import { mapGetters, mapActions } from "vuex";
import {
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardUp,
  mdbView,
  mdbMask,
  mdbBtn,
  mdbFormInline,
  mdbContainer,
  mdbRow,
  mdbIcon,
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbInput,
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbDropdownItem
} from "mdbvue";
export default {
  name: "CoreNavBar",
  data() {
    return {
      search: "",
      visiblesearch: {}
    };
  },
  computed: {
    ...mapGetters(["getMegaMenuItem"])
  },
  components: {
    RecursionMenuItems,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardUp,
    mdbView,
    mdbMask,
    mdbBtn,
    mdbFormInline,
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbInput,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem
  },
  methods: {
    ...mapActions(["runLoadDataMegaMenu"]),
    trigger() {
      var el = this.$el.querySelector(".navbar-toggler");
      el.click();
    },
    goSearch() {
      this.$router.push({
        name: "search",
        params: { find: this.search + " " }
      });
    }
  },
  async mounted() {
    this.runLoadDataMegaMenu();
  }
};
</script>

<style lang="stylus" scoped>
.mega-menu {
    z-index:1089 !important;
    max-height: 100vh !important;
    overflow-x: hidden !important;
}
</style>
<style>
.inputwhite > input {
  /* border-bottom: 1px solid #33b5e5 !important;color: #ced4da !important; */
  color: #ced4da !important;
}
section.preview {
  border: 1px solid #e0e0e0;
  padding: 15px;
}
</style>
