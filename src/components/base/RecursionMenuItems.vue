<template>
  <ul class="list-unstyled">
    <NodeTree v-bind:node="treeData" v-bind:type="type" />
  </ul>
</template>

<script>
import NodeTree from "./NodeTree";

export default {
  name: "RecursionMenuItems",
  props: {
    treeData: Object,
    type: String
  },
  components: {
    NodeTree
  }
};
</script>
