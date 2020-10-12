<template>
  <mdb-container class="mt-3 mb-3">
    <mdb-card>
      <div class="row">
        <div class="col-md-3 mt-auto mb-auto">
          <mdb-card-body class="ml-0 mr-0 text-center">
            <mdb-avatar
              class="white my-0 py-0"
              style="display: block;margin-left: auto;margin-right: auto;"
            >
              <img :src="wire.page.fimg_url" class="rounded-circle img-fluid" />
            </mdb-avatar>
            <h5 class="pt-2">{{ wire.page.title }}</h5>
          </mdb-card-body>
        </div>

        <div class="col-md-9 mt-4 mb-auto">
          <div class="row">
            <div class="col-sm-8">
              <mdb-card-body class="p-0" v-if="islink === 0">
                <p class="dark-grey-text blockquote bq-primary">
                  <mdb-icon icon="quote-left" class="pr-2"></mdb-icon>
                  {{ wire.message }}
                </p>
              </mdb-card-body>

              <mdb-card-body class="p-0" v-else>
                <router-link
                  :to="{ name: 'staticpost', params: { id: wire.post_id } }"
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

            <div class="col-sm-4 mt-auto mb-auto">
              <div
                v-if="wire.truth == 1"
                class="text-center ml-0 mr-0 pl-0 pr-0"
                style="color:#43a047"
              >
                <i class="rounded-circle far fa-check-circle fa-6x"></i>
                <p class="pt-2 fa-lg"><strong>Правда</strong></p>
              </div>
              <div
                v-if="wire.truth == 2"
                class="text-center ml-0 mr-0 pl-0 pr-0"
                style="color:#c0ca33"
              >
                <i class="rounded-circle far fa-check-circle fa-6x"></i>
                <p class="pt-2 fa-lg"><strong>Почти правда</strong></p>
              </div>
              <div
                v-if="wire.truth == 3"
                class="text-center ml-0 mr-0 pl-0 pr-0"
                style="color:#fdd835"
              >
                <i class="rounded-circle far fa-question-circle fa-6x"></i>
                <p class="pt-2 fa-lg"><strong>Наполовину правда</strong></p>
              </div>
              <div
                v-if="wire.truth == 4"
                class="text-center ml-0 mr-0 pl-0 pr-0"
                style="color:#ffa726"
              >
                <i class="rounded-circle far fa-times-circle fa-6x"></i>
                <p class="pt-2 fa-lg"><strong>Почти ложь</strong></p>
              </div>
              <div
                v-if="wire.truth == 5"
                class="text-center ml-0 mr-0 pl-0 pr-0"
                style="color:#f44336"
              >
                <i class="rounded-circle far fa-times-circle fa-6x"></i>
                <p class="pt-2 fa-lg"><strong>Ложь</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  mdbIcon
} from "mdbvue";
import moment from "moment";
export default {
  name: "Wireitem",
  props: {
    wire: Object,
    islink: Number
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
    mdbIcon
  }
};
</script>
