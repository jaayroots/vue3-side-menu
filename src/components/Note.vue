<template>
  <div class="card note-detail">
    <NoteDefault :noteList="this.noteList" @reloadNoteList="reloadNoteList" />
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
  props: {
    noteList: Object,
  },
  setup() {
    return {};
  },
  created() {},
  methods: {
    reloadNoteList() {
      this.$emit("reloadNoteList");
    },
  },
  watch: {},
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