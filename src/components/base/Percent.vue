<template>
  <mdb-container>
    <mdb-row class="justify-content-center mr-0 ml-0">
      <mdb-col v-for="(item, index) in truth" :key="index" sm="1" md="3" lg="2">
        <div class="d-flex justify-content-center">
          <mdb-simple-chart
            :value="item.percentage"
            :color="color[item.truth_id]"
          >
            {{ item.percentage }}%
          </mdb-simple-chart>
        </div>
        <div class="d-flex justify-content-center mt-3">
          <router-link
            :to="{
              name: 'posts_truth',
              params: { id: id, type: type, tid: item.truth_id.toString() }
            }"
          >
            <span
              class="badge"
              :style="
                'background-color:' + color[item.truth_id] + ' !important'
              "
            >
              {{ item.label }}</span
            >
          </router-link>
        </div>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbSimpleChart,
  mdbBadge,
  mdbIcon
} from "mdbvue";
import moment from "moment";
export default {
  name: "Percent",
  props: {
    truth: Array,
    type: String,
    id: String
  },
  data: function() {
    return {
      color: {
        1: "#43a047",
        2: "#c0ca33",
        3: "#fdd835",
        4: "#ffa726",
        5: "#f44336"
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
    mdbSimpleChart,
    mdbBadge,
    mdbIcon
  }
};
</script>
