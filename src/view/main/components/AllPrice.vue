<template>
  <div class="allPrice">
    <div class="wrapper">
      <div class="price font-readex">
        <p>Цена</p>
        <span> 600 000$ </span>
      </div>
      <div class="qr">
        <div class="font-readex">
          <span class="date">Дата:</span>
          <span>12.03.2023 15:50</span>
        </div>
        <div class="">
          <img src="@/assets/img/qr.png" />
          <img src="@/assets/img/qr-num.png" />
        </div>
      </div>
    </div>
    <div class="btnGroup">
      <div class="cashBtn font-readex">Оплата наличными</div>
      <div class="cardBtn font-readex">Оплата картой</div>
    </div>
    <div class="buyBtn">Перейти к покупке</div>
  </div>
</template>

<style scoped>
.allPrice {
  width: 100%;
  margin-top: 40px;
  height: 140px;
}
.wrapper {
  padding: 20px 15px;
  margin-bottom: 10px;
  max-height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("@/assets/img/qr-bg.png");
}
.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price p,
span {
  font-weight: 600;
  font-size: 18px;
}
.price p {
  color: #fff;
}
.price span {
  color: #7dff7a;
}
.qr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.qr div {
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: rgba(255, 255, 255, 0.72);
}
.qr div span {
  font-size: 12px;
  font-weight: 500;
}
.qr .date {
  font-size: 14px;
}
img {
  margin-top: 4px;
}

.btnGroup {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.btnGroup div,
.buyBtn {
  width: calc(50% - 5px);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  transition: all 0.3s;
  height: 57px;
}
.buyBtn {
  margin-top: 12px;
  width: 100% !important;
  background: #5fd8df;
  border: 1px solid #5fd8df;
}
.buyBtn:hover {
  color: #5fd8df;
  background: rgba(255, 255, 255, 0.1);
}
.cashBtn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.cashBtn:hover {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.cardBtn {
  background: #5bc558;
  border: 1px solid #5bc558;
}
.cardBtn:hover {
  color: #5bc558;
  background: rgba(255, 255, 255, 0.1);
}
</style>
