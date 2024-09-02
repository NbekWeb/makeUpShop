<script>
export default {
  name: "PriceCard",
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    price: {
      type: String,
      required: true,
    },
    styleText: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("activate");
    },
  },
};
</script>

<template>
  <div
    class="priceCard font-readex bor"
    :class="{ active: isActive }"
    @click="handleClick"
  >
    <div class="content">
      <span class="style">{{ styleText }}</span>
      <span>{{ description }}</span>
    </div>
    <div class="btn">$ {{ price }}</div>
  </div>
</template>

<style scoped>
.priceCard {
  width: 400px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 9px;
  cursor: pointer;
}
.priceCard .content {
  padding-left: 20px;
  border-left: 1px solid transparent;
  display: flex;
  flex-direction: column;
}
.priceCard span {
  font-size: 16px;
  color: #fff;
}

.priceCard .style {
  color: rgba(255, 255, 255, 0.55);
  font-size: 14px;
  margin-bottom: 4px;
}
.btn {
  padding: 4px 8px;
  color: #00ff66;
  border: 1px solid #00ff66;
  font-size: 14px;
  border-radius: 30px;
  margin-right: 20px;
}

.active .content {
  border-left: 1px solid #5fd8df;
}
</style>
