<template>
  <div class="container-fluid" style="display: flex; justify-content: center;">
    <div class="row col-12">
      <div class="col-lg-8">
        <NoteForm @noteForm="GetNoteTitle" />
      </div>
      <div class="col-lg-4">
        <Header @createNote="CreateNote" />
        <NoteList :noteList="this.noteList" :note="this.note" />
      </div>
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
      noteList: [],
      note: {
        id: 'new',
        titleNote: '',
        detailNote: '',
        update: '20 Jan 2022 : 04:55',
        noteCreateStatus: false
      }
    };
  },
  created() {
    this.noteList = [
      {
        id: 1,
        titleNote: 'a short piece of writing',
        detailNote: "He left a note to say he would be home late.There's a note on the door saying whenhome late.There's a note on the door saying whenhome late.There's a note on the door saying when the shop will open again.",
        update: '20 Jan 2022 : 04:55',
      }
    ]
  },
  methods: {
    CreateNote(status) {
      this.note.noteCreateStatus = status
    },
    GetNoteTitle(titleNote, detailNote) {
      this.note.noteCreateStatus = titleNote || detailNote ? true : false
      this.note.titleNote = titleNote
      this.note.detailNote = detailNote
    }
  },
};
</script>

<style>
</style>