<template>
  <div
    class="row col-8 nav nav-pills nav-stacked"
    style="height: 90vh; overflow-y: scroll"
  >
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
    <div class="col-lg-4"><Note :loadingNote="this.loading" /></div>
  </div>
</template>

<script>
import Note from "../components/Note.vue";
export default {
  components: {
    Note,
  },
  props: {
    loadingNote: Boolean,
  },
  data: function () {
    return {
      loading: true,
    };
  },
  created() {
  },
  watch: {
    loadingNote() {
      this.loading = this.loadingNote;
    },
  },
};
</script>


<style>
</style>