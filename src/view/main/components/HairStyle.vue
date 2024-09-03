<script>
import PriceCard from "@/components/PriceCard.vue";

export default {
  name: "StylePrice",
  components: {
    PriceCard,
  },
  data() {
    return {
      activeIndex: null, // Index of the active PriceCard
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    },
  },
};
</script>
<template>
  <div class="hairStylePice">
    <div class="wrapper">
      <PriceCard
        :isActive="activeIndex === i"
        price="22.062.023"
        styleText="Прическа #1"
        description="Новый стиль"
        @activate="setActive(i)"
        v-for="i of 30"
        :key="i"
      />
    </div>
  </div>
</template>

<style scoped>
.hairStylePice {
  width: 410px;
  max-height: calc(100vh - 300px);
  overflow-y: auto;
  transition: all 0.5s;
}

.hairStylePice::-webkit-scrollbar {
  width: 5px;
}

.hairStylePice::-webkit-scrollbar-track {
  width: 5px;
  background: rgba(255, 255, 255, 0.07);
}

.hairStylePice::-webkit-scrollbar-thumb {
  background: white;
}

.hairStylePice::-webkit-scrollbar-thumb:hover {
  background: white;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: auto;
}
</style>
