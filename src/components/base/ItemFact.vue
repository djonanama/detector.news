<template>
  <mdb-container class="mt-3 mb-3">
    <mdb-card :class="islink ? 'hoverable mr-2' : 'mr-2'">
      <mdb-view hover>
        <div class="row">
          <div class="col-md-3 mt-auto mb-auto">
            <mdb-card-body class="ml-0 mr-0 text-center">
              <mdb-avatar
                class="white my-0 py-0 mb-2"
                style="display: block;margin-left: auto;margin-right: auto;"
              >
                <img
                  :src="wire.agent_val.fimg_url"
                  class="rounded-circle img-fluid"
                />
              </mdb-avatar>
              <strong>{{ wire.agent_val.title }}</strong>
              <!-- <h5 class="pt-2">{{ wire.agent_val.title }}</h5> -->
            </mdb-card-body>
          </div>

          <div class="col-md-8 mt-4 mb-auto">
            <div class="row">
              <div class="col-sm-8 col-md-9 col-lg-9 mr-0">
                <mdb-card-body class="p-0" v-if="islink == false">
                  <p class="dark-grey-text blockquote bq-primary">
                    <mdb-icon icon="quote-left" class="pr-2"></mdb-icon>
                    {{ wire.message }}
                  </p>
                </mdb-card-body>

                <mdb-card-body class="p-0" v-else>
                  <router-link
                    :to="{
                      name: 'onlypost',
                      params: { id: wire.post_id.toString() }
                    }"
                  >
                    <p class="dark-grey-text blockquote bq-primary">
                      <mdb-icon icon="quote-left" class="pr-2"></mdb-icon>
                      {{ wire.message }}
                    </p>
                  </router-link>
                </mdb-card-body>

                <p class="pl-3 grey-text">
                  Дата заявления:
                  {{ moment(wire.date_of_statement).format("DD.MM.YYYY") }}
                </p>
              </div>

              <div class="col-sm-4 col-md-3 col-lg-3 mt-auto mb-auto ml-auto mr-auto pr-0 pl-0">
                <div
                  class="text-center ml-0 mr-0 pl-0 pr-0"
                  :style="color[wire.truth_val.truth_id]"
                >
                  <i :class="iconf[wire.truth_val.truth_id]"></i>
                  <p class="pt-2 fa-lg">
                    <strong>{{ wire.truth_val.label }} </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </mdb-view>
    </mdb-card>
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
  mdbView,
  mdbBtn,
  mdbIcon
} from "mdbvue";
import moment from "moment";
export default {
  name: "Wireitem",
  props: ["wire", "islink"],
  // props: {
  //   wire: Object,
  //   islink: Boolean
  // },
  data: function() {
    return {
      color: {
        1: "color:#43a047",
        2: "color:#c0ca33",
        3: "color:#fdd835",
        4: "color:#ffa726",
        5: "color:#f44336"
      },
      iconf: {
        1: "rounded-circle far fa-check-circle fa-6x",
        2: "rounded-circle far fa-check-circle fa-6x",
        3: "rounded-circle far fa-question-circle fa-6x",
        4: "rounded-circle far fa-times-circle fa-6x",
        5: "rounded-circle far fa-times-circle fa-6x"
      }
    };
  },
  methods: {
    moment
  },
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCardUp,
    mdbAvatar,
    mdbView,
    mdbBtn,
    mdbIcon
  }
};
</script>
