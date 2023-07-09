<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide class="card_wrapper" v-for="item in items" :key="item.id">
      <Card
        :name="`${item.lvl} lvl`"
        :title="item.title"
        :imgUrl="item.img"
        :link="`/resume/clash-of-clans/${item.alias}`"
      >
        <template v-slot:body>{{ item.descr }}</template>
        <template v-slot:footer>
          <HeroStats
            :info="item.info"
            :title="item.title"
            :value="`${item.value}`"
          />
        </template>
      </Card>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>
<script>
import items from "@/seeders/items";
import Card from "@/components/UI/Card";
import HeroStats from "@/components/UI/HeroStats";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
export default {
  components: { Card, HeroStats, Carousel, Slide, Navigation },
  data() {
    return {
      items: items,
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: "center",
      },
      breakpoints: {
        300: {
          itemsToShow: 1,
        },
        700: {
          itemsToShow: 2,
        },
      },
    };
  },
};
</script>
