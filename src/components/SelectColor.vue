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
  <div class="scrol-y">
    <div class="selectColor">
      <div>
        <div class="title">
          <h3 class="font-ibm">ВЫБОР <span>ЦВЕТА</span></h3>
          <p class="font-readex">
            Выбере цвет который вам нравится и используйте его на своих
            прическах
          </p>
        </div>
        <div class="wrapper">
          <MainColor />
          <ExtraColor />
        </div>
      </div>
      <AllPrice />
    </div>
  </div>
</template>

<style scoped>
.scrol-y {
  max-height: calc(100vh - 300px);
  width: 420px;
  overflow-y: auto;
  transition: all 0.5s;
  overflow-x: hidden;
  
}
.selectColor {
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  padding-right: 40px;
  height: 100%;
}

.scrol-y::-webkit-scrollbar {
  width: 5px;
}

.scrol-y::-webkit-scrollbar-track {
  width: 5px;
  background: rgba(255, 255, 255, 0.07);
}

.scrol-y::-webkit-scrollbar-thumb {
  background: white;
}

.scrol-y::-webkit-scrollbar-thumb:hover {
  background: white;
}

.title h3 {
  text-align: end;
  font-weight: 700;
  font-size: 24px;
  color: #fff;
}
.title h3 span {
  color: #5fd8df;
}
.title p {
  max-width: 215px;
  text-align: center;
  font-weight: 300;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.44);
  margin: 10px 0 20px 0;
}
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
