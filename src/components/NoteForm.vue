<template>
  <input
    type="text"
    class="form-control"
    aria-label="Small"
    aria-describedby="inputGroup-sizing-lg"
    placeholder="Title"
    v-model="this.title"
    @keyup="passback()"
  />
  <textarea
    style="margin-top: 0.5rem"
    class="form-control"
    id="exampleFormControlTextarea1"
    rows="15"
    placeholder="Note me ..."
    v-model="this.detail"
    @keyup="passback()"
  ></textarea>
  <div v-if="this.noteCreateStatus" style="padding-top: 0.5rem">
    <button
      type="button"
      class="btn btn-success"
      style="width: 100%"
      @click="createNote()"
    >
      Add Note +
    </button>
  </div>
  <div v-else style="padding-top: 0.5rem">
    <button type="button" class="btn btn-warning" style="width: 100%">
      Auto Save
    </button>
  </div>
</template>

<script>
import { HTTP } from "../axios";

export default {
  data: function () {
    return {
      noteCreateStatus: true,
    };
  },
  props: {
    editNote: Object,
  },
  methods: {
    passback() {
      this.$emit("noteForm", this.title, this.detail);
      if (!this.noteCreateStatus) {
        this.updateNote();
      }
    },
    async createNote() {
      let config = {};
      await HTTP.post(
        "/notelist",
        { title: this.title, detail: this.detail },
        config
      )
        .then((res) => {
          this.$emit("reloadNoteList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async updateNote() {
      this.editNote.title = this.title;
      this.editNote.detail = this.detail;
      await HTTP.put("/notelist", this.editNote)
        .then((res) => {})
        .catch((e) => {
          console.log(e);
        });
    },
  },
  watch: {
    editNote() {
      this.title = this.editNote.title;
      this.detail = this.editNote.detail;
      this.noteCreateStatus = this.editNote.noteCreateStatus;
    },
  },
};
</script>

<style>
</style>