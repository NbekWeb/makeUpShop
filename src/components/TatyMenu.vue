<script>
import BodyIcon from "./icon/bodyIcon.vue";
import HeadIcon from "./icon/headIcon.vue";
import LeftFootIcon from "./icon/leftFootIcon.vue";
import LeftIcon from "./icon/leftIcon.vue";
import RightFootIcon from "./icon/rightFootIcon.vue";
import RightIcon from "./icon/rightIcon.vue";

export default {
  name: "MenuItem",
  components: {
    BodyIcon,
    RightIcon,
    HeadIcon,
    LeftFootIcon,
    LeftIcon,
    RightFootIcon,
  },
  data() {
    return {
      activeItem: 0,
    };
  },
  methods: {
    handleItemClick(index) {
      this.activeItem = index;
    },
  },
};
</script>

<template>
  <div class="nav">
    <div>
      <div class="treeAngle">
        <div>
          <img src="@/assets/img/tree-angle1.svg" class="treeAngle1" />
          <img src="@/assets/img/tree-angle2.svg" class="treeAngle2" />
        </div>
        <div class="font-ibm content">
          <h2>ТАТУ <span>САЛОН</span></h2>
          <div class="">
            <span>ID БИЗНЕСА: <strong>234</strong> </span>
            <span>ВЛАДЕЛЕЦ: <strong> MANESKIN BENSON</strong></span>
          </div>
          <p class="font-readex">
            В данном салоне вы можете нанести или свести свои татуировки
          </p>
        </div>
      </div>
    </div>
    <div class="navbar font-ibm">
      <div
        class="navbarItem"
        :class="{ active: activeItem === 0 }"
        @click="handleItemClick(0)"
      >
        <img src="@/assets/img/hex-rectangle.svg" class="hexRectangle" />
        <div class="hexagon">
          <img src="@/assets/img/hexagon.svg" class="hexagonBg" />
          <img src="@/assets/img/hexagon-border.svg" class="hexagonBor" />
          <div class="icon">
            <HeadIcon />
          </div>
        </div>
        <span> голова </span>
      </div>
      <div
        class="navbarItem"
        :class="{ active: activeItem === 1 }"
        @click="handleItemClick(1)"
      >
        <img src="@/assets/img/hex-rectangle.svg" class="hexRectangle" />
        <div class="hexagon">
          <img src="@/assets/img/hexagon.svg" class="hexagonBg" />
          <img src="@/assets/img/hexagon-border.svg" class="hexagonBor" />
          <div class="icon">
            <BodyIcon />
          </div>
        </div>
        <span> Тело</span>
      </div>
      <div
        class="navbarItem"
        :class="{ active: activeItem === 2 }"
        @click="handleItemClick(2)"
      >
        <img src="@/assets/img/hex-rectangle.svg" class="hexRectangle" />
        <div class="hexagon">
          <img src="@/assets/img/hexagon.svg" class="hexagonBg" />
          <img src="@/assets/img/hexagon-border.svg" class="hexagonBor" />
          <div class="icon">
            <LeftIcon />
          </div>
        </div>
        <span> ЛЕВАЯ РУКА</span>
      </div>
      <div
        class="navbarItem"
        :class="{ active: activeItem === 3 }"
        @click="handleItemClick(3)"
      >
        <img src="@/assets/img/hex-rectangle.svg" class="hexRectangle" />
        <div class="hexagon">
          <img src="@/assets/img/hexagon.svg" class="hexagonBg" />
          <img src="@/assets/img/hexagon-border.svg" class="hexagonBor" />
          <div class="icon">
            <RightIcon />
          </div>
        </div>
        <span> ПРАВАЯ РУКА</span>
      </div>
      <div
        class="navbarItem"
        :class="{ active: activeItem === 4 }"
        @click="handleItemClick(4)"
      >
        <img src="@/assets/img/hex-rectangle.svg" class="hexRectangle" />
        <div class="hexagon">
          <img src="@/assets/img/hexagon.svg" class="hexagonBg" />
          <img src="@/assets/img/hexagon-border.svg" class="hexagonBor" />
          <div class="icon">
            <LeftFootIcon />
          </div>
        </div>
        <span> ЛЕВАЯ НОГА</span>
      </div>
      <div
        class="navbarItem"
        :class="{ active: activeItem === 5 }"
        @click="handleItemClick(5)"
      >
        <img src="@/assets/img/hex-rectangle.svg" class="hexRectangle" />
        <div class="hexagon">
          <img src="@/assets/img/hexagon.svg" class="hexagonBg" />
          <img src="@/assets/img/hexagon-border.svg" class="hexagonBor" />
          <div class="icon">
            <RightFootIcon />
          </div>
        </div>
        <span> ПРАВАЯ НОГА </span>
      </div>
    </div>
    <div class="esc">
      <img src="@/assets/img/esc.svg" />
      <div class="font-montserrat">
        <p>Выйти из меню дома</p>
        <span>Кнопка ESC</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.treeAngle {
  position: relative;
  display: flex;
  margin-left: -30px;
}
.treeAngle1 {
  z-index: 10;
}
.treeAngle2 {
  position: absolute;
  left: 20px;
}
.navbarItem {
  border-top: 2px solid transparent;
  width: 90px;
  transition: border-top-color 0.3s ease, opacity 0.3s ease;
}
.navbarItem span {
  display: flex;
  justify-content: center;
  width: 100%;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
}
.hexRectangle {
  opacity: 0;
  width: 100%;
  transition: opacity 0.3s ease;
}
.hexagon {
  display: flex;
  align-items: center;
  color: #fff;
  width: 100%;
  height: 90px;
  position: relative;
  padding-bottom: 30px;
  margin-top: -20px;
}

.hexagon img {
  width: 100%;
}
.hexagonBg {
  display: none;
  transition: display 0.3s ease;
}
.hexagonBor {
  transition: display 0.3s ease;
}
.icon {
  font-size: 32px;
  position: absolute;
  left: 0;
  top: -15px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  margin-left: 20px;
}
.navbar {
  display: flex;
  gap: 20px;
}
.content div {
  display: flex;
  gap: 20px;
  margin: 10px 0 12px 0;
}
.content div,
.content p {
  color: rgba(255, 255, 255, 0.44);
  font-size: 12px;
  font-weight: 300;
}
.content p {
  max-width: 290px;
}
strong {
  font-weight: 600;
}
h2 {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
}
h2 span {
  color: rgb(95, 216, 223);
  text-shadow: 0px 4px 32px 0px rgba(95, 216, 223, 0.25);
}
.navbarItem.active .hexagonBg {
  display: block;
}

.navbarItem.active .hexagonBor {
  display: none;
}

.navbarItem.active {
  border-top-color: #5fd8df;
}

.navbarItem.active .hexRectangle {
  opacity: 1;
}
.esc {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-right: 30px;
}
.esc p {
  color: #fff;
  font-weight: 700;
}
.esc span {
  color: rgba(255, 255, 255, 0.37);
}
</style>
