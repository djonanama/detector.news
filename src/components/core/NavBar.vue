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
      <mdb-navbar-nav right>
        <div class="row align-items-center">
          <div class="col-10 col-lg-11 pl-5">
            <div class="md-form">
              <input
                type="text"
                class="form-control mb-0 mt-0"
                id="inlineFormInputMD"
                v-model="search"
              />
              <label class="sr-only" for="inlineFormInputMD">Name</label>
            </div>
          </div>
          <div class="col-2 col-lg-1">
            <router-link
              class="mt-2"
              :to="{ name: 'search', params: { find: search + ' ' } }"
            >
              <button class="btn btn-primary mb-0" @click="trigger">
                Найти
              </button>
            </router-link>
          </div>
        </div>
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
input {
  border-bottom: 1px solid #33b5e5 !important;color: #ced4da !important;
  color: #ced4da !important;
}
</style>
