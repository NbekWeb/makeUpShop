<script>
import AllPrice from "./AllPrice.vue";
import ExtraColor from "./ExtraColor.vue";
import MainColor from "./MainColor.vue";

export default {
  components: {
    MainColor,
    ExtraColor,
    AllPrice,
  },
};
</script>

<template>
  <div class="scrolSelectColor">
    <div class="selectColor">
      <div class="title">
        <h3 class="font-ibm">ВЫБОР <span>ЦВЕТА</span></h3>
        <p class="font-readex">
          Выбере цвет который вам нравится и используйте его на своих прическах
        </p>
      </div>
      <div class="wrapper">
        <MainColor />
        <ExtraColor />
      </div>

      <AllPrice />
    </div>
  </div>
</template>

<style scoped>
.scrolSelectColor {
  max-height: calc(100vh - 300px);
  width: 420px;
  overflow-y: auto;
  transition: all 0.5s;
  overflow-x: hidden;
}
.selectColor {
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  height: 100%;
}

.scrolSelectColor::-webkit-scrollbar {
  width: 5px;
}

.scrolSelectColor::-webkit-scrollbar-track {
  width: 5px;
  background: rgba(255, 255, 255, 0.07);
}

.scrolSelectColor::-webkit-scrollbar-thumb {
  background: white;
}

.scrolSelectColor::-webkit-scrollbar-thumb:hover {
  background: white;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.title h3 {
  text-align: end;
  font-weight: 700;
  font-size: 24px;
  color: #fff;
  margin: 0;
}
.title h3 span {
  color: #5fd8df;
}
.title p {
  max-width: 195px;
  text-align: center;
  font-weight: 300;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.44);
  margin: 10px 0;
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
