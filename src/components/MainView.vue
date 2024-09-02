<template>
  <div class="main">
    <MenuItem />
    <div class="wrapper">
      <HairStyle class="" />
      <SelectColor class="" />
    </div>
    <div class="title">
      <span class="font-montserrat">SYAMO</span>
    </div>
  </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";
import HairStyle from "./HairStyle.vue";
import SelectColor from "./SelectColor.vue";

export default {
  name: "App",
  components: {
    MenuItem,
    HairStyle,
    SelectColor,
  },
};
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-image: url("@/assets/img/fon.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
