<template>
  <div class="card-body">
    <h6 class="card-date-time">22 Aug 2022</h6>
    <div>
      <span class="dot"></span>
      <b style="padding-left: 0.5rem">Header</b>
    </div>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content. Some quick example text to build on the card title and
      make up
    </p>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style>
.dot {
  height: 0.9rem;
  width: 0.9rem;
  background-color: rgb(230, 230, 230);
  border-radius: 50%;
  display: inline-block;
}
.date-time-loading {
  border-radius: 25px;
  display: inline-block;
}
.card-date-time {
  color: var(--grey);
}
</style>