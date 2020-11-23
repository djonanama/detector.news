<template>
  <li class="tree">
    <router-link :to="{ name: 'posts', params: { id: node.id.toString() , type: type } }">
      <!-- to="{name: 'post', params: {id:child.id, type:type}}" -->
      {{ node.name }}
    </router-link>
    <ul
      class="list-unstyled tree"
      v-if="node.children && node.children.length > 0"
    >
      <NodeTree
        v-for="child in node.children"
        :key="child.id"
        v-bind:node="child"
        v-bind:type="type"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: "NodeTree",
  props: {
    node: Object,
    type: String
  }
};
</script>

<style lang="stylus">
ul.tree li.tree{
  padding-left: 1.25rem;
}
</style>
