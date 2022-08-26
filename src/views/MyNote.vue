<template>
  <Header />
  <div class="container-fluid">
    <div class="row col-12">
      <div class="col-lg-3"><Note /></div>
      <div class="col-lg-3"><Note /></div>
      <div class="col-lg-3"><Note /></div>
      <div class="col-lg-3"><Note /></div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Note from "../components/Note.vue";
export default {
  components: {
    Note,
    Header,
  },
};
</script>

<style>
</style>