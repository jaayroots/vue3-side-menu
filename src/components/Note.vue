<template>
  <div class="card note-detail" v-if="this.loading">
    <NoteDefault />
  </div>
  <div class="card note-detail" v-else>
    <NoteLoading />
  </div>
</template>

<script>
import NoteDefault from "./Note-default.vue";
import NoteLoading from "./Note-loading.vue";
export default {
  components: {
    NoteDefault,
    NoteLoading,
  },
  setup() {
    return {
      loading: true,
    };
  },
};
</script>

<style>
.note-detail {
  width: 100%;
  margin-top: 2%;
  margin-bottom: 2%;
  background: "#f1f5f9";
}
</style>