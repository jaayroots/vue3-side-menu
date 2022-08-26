<template>
  <Header />
  <div class="container-fluid">
    <button class="btn btn-info" @click="change()">Test Loading Note</button>
    <div class="row col-12">
      <NoteForm />
      <NoteList :loadingNote="this.loading" />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Note from "../components/Note.vue";
import NoteForm from "../components/NoteForm.vue";
import NoteList from "../components/NoteList.vue";
export default {
  components: {
    Note,
    Header,
    NoteForm,
    NoteList,
  },
  data: function () {
    return {
      loading: true,
    };
  },
  created() {},
  methods: {
    change() {
      this.loading = !this.loading;
    },
  },
};
</script>

<style>
</style>