<script>
import { hairColors } from "@/assets/var.js";
export default {
  data() {
    return {
      activeIndex: null,
      hairColors,
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
  <div class="extraColor">
    <h3 class="font-readex">Дополнительный цвет</h3>
    <div class="wrapper">
      <div class="scrol-y">
        <div
          class="colorWrapper"
          v-for="(color, i) of hairColors"
          :key="i"
          :class="{ active: i === activeIndex }"
          @click="setActive(i)"
        >
          <div class="color" :style="{ backgroundColor: color }"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.extraColor {
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  max-height: 138px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.05);
  padding: 12px 10px;
}
h3 {
  font-weight: 600;
  color: #fff;
  font-size: 14px;
  margin-bottom: 10px;
}
.wrapper {
  max-height: 110px;
  overflow-y: auto;
  transition: all 0.5s;
}

.wrapper::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.wrapper::-webkit-scrollbar-track {
  width: 5px;
  background: rgba(255, 255, 255, 0.07);
}

/* Handle */
.wrapper::-webkit-scrollbar-thumb {
  background: white;
}

/* Handle on hover */
.wrapper::-webkit-scrollbar-thumb:hover {
  background: white;
}
.scrol-y {
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.colorWrapper {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.active {
  border-color: #5fd8df;
}
.color {
  width: 22px;
  height: 22px;
  background: #9f7f59;
  border-radius: 4px;
}
</style>
