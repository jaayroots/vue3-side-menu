<template>
  <div class="container-fluid" style="display: flex; justify-content: center">
    <div class="row col-12">
      <div class="col-lg-8">
        <NoteForm :editNote="this.updateNote" @noteForm="GetNoteTitle" />
      </div>
      <div class="col-lg-4">
        <Header @createNote="CreateNote" />
        <NoteList
          :noteList="this.noteList"
          :note="this.note"
          @selectedNote="selectedNote"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Note from "../components/Note.vue";
import NoteForm from "../components/NoteForm.vue";
import NoteList from "../components/NoteList.vue";
import moment from "moment";
import { HTTP } from "../axios";
export default {
  components: {
    Note,
    Header,
    NoteForm,
    NoteList,
  },
  data: function () {
    return {
      noteList: [],
      note: {
        title: "",
        detail: "",
        noteCreateStatus: false,
      },
      updateNote: {},
    };
  },
  created() {
    this.getListNote();
  },
  methods: {
    async getListNote() {
      await HTTP.get("/notelist")
        .then((res) => {
          this.noteList = [...new Set(res.data)];
        })
        .catch((e) => {
          console.log(e);
        });
    },
    CreateNote(status) {
      this.note.noteCreateStatus = status;
    },
    GetNoteTitle(title, detail) {
      this.note.noteCreateStatus = title || detail ? true : false;
      this.note.title = title;
      this.note.detail = detail;
      this.note.update = moment().format("YYYY-MM-DD hh:mm:ss");
    },
    selectedNote(note) {
      this.updateNote = note;
      this.updateNote.noteCreateStatus = false;
    },
  },
};
</script>

<style>
</style>