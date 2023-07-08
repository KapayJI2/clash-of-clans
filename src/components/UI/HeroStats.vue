<template>
  <div class="card-stats">
    <div v-for="(stat, index) in info" :key="index" class="one-third">
      <div class="stat">{{ stat.title }}</div>
      <div class="stat-value">{{ stat.value }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
