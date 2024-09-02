<template>
  <div class="main">
    <TatyMenu />
    <div class="wrapper ">
      <TatyStyle class="" />
      <TatyAllPrice  />
    </div>
  </div>
</template>

<script>
import TatyStyle from "./TatyStyle.vue";
import TatyMenu from "./TatyMenu.vue";
import TatyAllPrice from "./TatyAllPrice.vue";

export default {
  name: "App",
  components: {
    TatyMenu,
    TatyStyle,
    TatyAllPrice,
  },
};
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-image: url("@/assets/img/man.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 50px 42px 0 42px;
}
.title {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 70px;
}
.title span {
  font-size: 24px;
  color: #5fd8df;
  font-weight: 700;
}
.bor {
  border: 1px solid blue;
}
</style>
