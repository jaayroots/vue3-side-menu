<template>
  <div class="card-body">
    <div class="loading-text" style="width: 30%; height: 1rem"></div>
    <div>
      <div
        class="loading-text"
        style="width: 5%; height: 1rem; margin-right: 0.2rem"
      ></div>
      <div class="loading-text" style="width: 50%; height: 1rem"></div>
    </div>
    <div>
      <div class="loading-text" style="width: 100%; height: 1rem"></div>
    </div>
    <div>
      <div class="loading-text" style="width: 80%; height: 1rem"></div>
    </div>
    <div>
      <div class="loading-text" style="width: 60%; height: 1rem"></div>
    </div>
    <div>
      <div class="loading-text" style="width: 30%; height: 1rem"></div>
    </div>
    <div>
      <div class="loading-text" style="width: 80%; height: 1rem"></div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      loading: false,
    };
  },
};
</script>

<style>
.loading-text {
  height: 1rem;
  width: 100%;
  border-radius: 25px;
  display: inline-block;
  overflow: hidden;
  text-align: center;
  font-family: sans-serif;
  font-size: 40px;
  line-height: 3;
  -webkit-animation: glow linear 2s infinite;
  animation: glow linear 2s infinite;
}
@-webkit-keyframes glow {
  0% {
    background-color: white;
  }
  50% {
    background-color: rgb(139, 139, 139);
  }
  100% {
    background-color: white;
  }
}
@keyframes glow {
  0% {
    background-color: white;
  }
  50% {
    background-color: rgb(139, 139, 139);
  }
  100% {
    background-color: white;
  }
}
</style>