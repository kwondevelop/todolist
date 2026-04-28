<script setup></script>

<template>
  <div class="container">
    <form @submit.prevent="handleLogin">
      <div class="login-form">
        <div class="id-pw-form">
          <div class="id-input lg">
            <label for="id">ID : </label>
            <input
              type="email"
              required="true"
              name="id"
              id="id"
              placeholder="아이디"
            />
          </div>
          <div class="pw-input lg">
            <label for="pw">PW : </label>
            <input
              type="password"
              required="true"
              name="pw"
              id="pw"
              placeholder="비밀번호"
            />
          </div>
        </div>

        <button type="submit" class="login-btn">로그인</button>
        <span>처음이신가요? <a href="./SignupPage.vue">회원가입하기</a></span>
      </div>
    </form>
  </div>
</template>

<style scoped>
.login-form {
  padding: 20px 80px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 20px;
  border: 2px solid #e2cdab;
  justify-content: center;
  align-items: center;
}

.id-pw-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.lg {
  display: flex;
  justify-content: center;
  align-items: center;
}

.lg > label {
  font-size: 25px;
  width: 60px;
  flex: 1;
}

.lg > input {
  padding: 5px;
  border-radius: 10px;
  border: 2px solid #e2cdab;
  background-color: #fef8e685;
}

.lg > input:focus {
  outline: none;
  border: 3px solid #4b2e1c;
}

.login-btn {
  padding: 5px 18px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #4b2e1c;
  color: #fff;
  border: none;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #e2cdab;
  color: #4b2e1c;
  transition: all 0.3s;
}
</style>
