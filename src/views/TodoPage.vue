<script setup>
</script>

<template>
  <div class="page">
    <h1>오늘의 할 일</h1>
    <div class="container">
      <div class="todo-input">
        <input placeholder="할 일을 입력하세요..." />
        <button>+</button>
      </div>
      <div class="todo-item">
        <div class="left">
          <input type="checkbox"/>
          <div>
            <p>Vue 3 학습하기</p>
            <p>2025-04-25</p>
          </div>
        </div>
        <div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
        <div class="left">
          <input type="checkbox"/>
          <div>
            <p>프로젝트 구조 설계</p>
            <p>2025-04-26</p>
          </div>
        </div>
        <div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
    </div>
</template>

<style scoped>
.page {
  background: #FFF8E7;
  padding: 40px 20px;
}

h1 {
  text-align: center;
  padding-bottom: 40px;
}

.container {
  width: 600px;
  margin: 0 auto;
  background: #FFF8E7;
  padding: 30px;
  border-radius: 10px;
  border: 5px solid #C89B5A;
}

.todo-input {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.todo-input input {
  flex: 1;
  padding: 15px;
}

.todo-input button {
  background: #FFF8E7;
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  border: 5px solid #C89B5A;
  padding: 15px 20px;
  cursor: pointer;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 5px solid #C89B5A;
  margin-bottom: 15px;
  font-weight: bold;
}

.left {
  display: flex;
  gap: 10px;
}

.todo-item button {
  background: #FFF8E7;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #C89B5A;
  padding: 10px 15px;
  cursor: pointer;
}

::placeholder {
  color: #aaaaaa;
  font-size: 20px;
  font-weight: bold;
}
</style>