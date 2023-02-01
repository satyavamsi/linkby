<template>
  <div id="items">
    <h1>{{ items.name }}</h1>
    <div class="item">
      <h3>Items with Score 20</h3>
      <ul>
        <li
          :class="itemsWithScore20.length === 1 ? 'class-one' : ''"
          v-for="item of itemsWithScore20"
          :key="item.id"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="item">
      <h3>Items with Score 30</h3>
      <ul>
        <li
          :class="itemsWithScore30.length === 1 ? 'class-one' : ''"
          v-for="item of itemsWithScore30"
          :key="item.id"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="item">
      <h3>Items with Score 50</h3>
      <ul>
        <li
          :class="itemsWithScore50.length === 1 ? 'class-one' : ''"
          v-for="item of itemsWithScore50"
          :key="item.id"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],

  computed: {
    itemsWithScore20() {
      return this.items.items.filter((item) => item.score === 20).reverse();
    },
    itemsWithScore30() {
      return this.items.items.filter((item) => item.score === 30).reverse();
    },
    itemsWithScore50() {
      return this.items.items.filter((item) => item.score === 50).reverse();
    },
  },
};
</script>
