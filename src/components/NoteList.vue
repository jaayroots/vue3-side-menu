<template>
  <div class="container-fluid" style="height: 90vh; overflow-y: scroll">
    <div class="row">
      <div class="col-lg-3" v-for="note in this.noteList" :key="note.id">
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