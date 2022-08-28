<template>
  <div class="container-fluid" style="height: 90vh; overflow-y: scroll">
    <div class="row">
      <div class="col-lg-auto" v-if="this.note.noteCreateStatus">
        <Note :noteList="this.note" />
      </div>
      <div class="col-lg-auto" v-for="note in this.noteList" :key="note.id">
        <Note :noteList="note" @click="selectedNote(note)" />
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
    note: Array
  },
  data: function () {
    return {
      loading: true,
    };
  },
  created() {
  },
  watch: {
  },
  methods: {
    selectedNote(noteId) {
      console.log(noteId);
    }
  }
};
</script>


<style>
</style>