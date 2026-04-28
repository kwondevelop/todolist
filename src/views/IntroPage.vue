<script setup>
</script>

<template>

  <div class="container">
    <div class="profileImage"> 
      <img src="./프로필냥.png" alt="Profile Image">  
    </div>
      <p>아이디 : todo</p>
      <p>이메일 : todo@aaa.com</p>
      <p>이름   : 투두</p>
      <p>생일   : 2000-01-01</p>
  </div>

</template>

<style>

body {
  margin: 0;
  padding: 0;
  background-color: #FFF8E7;
}

#app {
  width: 100vw;
  min-height: 100vh;
  background-color: #FFF8E7;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.container {
  width: 600px;
  height: 300px;
  background-color: #C89B5A;
  padding: 40px;
  border: 5px solid #8B5E3C;
  position: relative;
}

.profileImage {
  width: 250px;
  height: 335px;
  background-color: #FFFFFF;
  position: absolute;
  top: 20px;
  left: 20px;
  border: 5px solid #8B5E3C;
}

.profileImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p {
  padding-left: 300px;
  font-size: 14px;
  color: #333;
}

</style>