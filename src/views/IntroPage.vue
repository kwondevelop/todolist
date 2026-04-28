<script setup>
import LoginPage from "./LoginPage.vue";
</script>

<template>
  <div class="container">
    <div class="intro">
      <div class="logo-img"></div>
      <div class="intro-title">
        <div class="title">
          <h1>TODO LIST</h1>
        </div>
        <div class="sub-title">
          <h3>오늘의 하루를 기록하세요.</h3>
        </div>
      </div>
    </div>

    <div class="logtin-form">
      <LoginPage />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.logo-img {
  width: 200px;
  height: 200px;
  margin: auto;
  background-image: url("/img/logo.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.intro-title {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.title {
  font-size: 30px;
  color: #4b2e1c;
}

.sub-title {
  font-size: 30px;
}
</style>
