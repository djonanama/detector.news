<template>
  <mdb-navbar
    class="special-color-dark fixed flex p-2 m-auto top-0 animated"
    position="top"
    togglerIcon="search"
    dark
    hamburger
    scrolling
    expand="xl"
  >
    <router-link :to="{ name: 'home' }">
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

    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <form class="row">
          <mdb-input
            v-model="search"
            type="text"
            class="text-white col-sm-9 mr-3"
            placeholder="Поиск"
            aria-label="Search"
            label
            navInput
            waves
            waves-fixed
          />
          <router-link
            class="col-sm-2 ml-3 mr-3"
            :to="{ name: 'search', params: { find: search } }"
          >
            <mdb-btn outline="info">Найти</mdb-btn>
          </router-link>
        </form>
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
  top: 15%;
  order: unset;
}
</style>

<script>
import RecursionMenuItems from "../base/RecursionMenuItems";
import { mapGetters, mapActions } from "vuex";
import {
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
      search: " "
    };
  },
  computed: {
    ...mapGetters(["getMegaMenuItem"])
  },
  components: {
    RecursionMenuItems,
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
    ...mapActions(["runLoadDataMegaMenu"])
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
