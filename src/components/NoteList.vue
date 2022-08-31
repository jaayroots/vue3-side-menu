<template>
  <div class="container-fluid" style="height: 90vh; overflow-y: scroll">
    <div class="row">
      <!-- {{this.note}} -->
      <!-- <div class="col-lg-12" v-if="this.note.noteCreateStatus">
        <Note :noteList="this.note" />
      </div> -->
      <div class="col-lg-12" v-for="note in this.noteList" :key="note.id">
        <Note
          :noteList="note"
          @click="selectedNote(note)"
          @reloadNoteList="reloadNoteList"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Note from "../components/Note.vue";
export default {
  components: {
    Note,
  },
  props: {
    noteList: Array,
    note: Object,
  },
  data: function () {
    return {
      loading: true,
    };
  },
  created() {},
  watch: {},
  methods: {
    selectedNote(note) {
      this.$emit("selectedNote", note);
    },
    reloadNoteList() {
      this.$emit("reloadNoteList");
    },
  },
};
</script>


<style>
</style>