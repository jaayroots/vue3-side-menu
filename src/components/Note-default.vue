<template>
  <div class="card-body">
    <div class="col-12">
      <div class="row">
        <div class="col-10">
          <h6 class="card-date-time">{{ this.noteList.update }}</h6>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger" @click="deleteNote()">
            <i class="bi bi-archive-fill"></i>
          </button>
        </div>
      </div>
    </div>
    <div>
      <span class="dot"></span>
      <b style="padding-left: 0.5rem">{{ this.noteList.title }}</b>
    </div>
    <p class="card-text text-show-detail">{{ this.noteList.detail }}</p>
  </div>
</template>

<script>
import { HTTP } from "../axios";

export default {
  props: {
    noteList: Object,
  },
  setup() {},
  methods: {
    async deleteNote() {
      await HTTP.delete("/notelist", { data: this.noteList })
        .then((res) => {
          this.$emit("reloadNoteList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
.dot {
  height: 0.9rem;
  width: 0.9rem;
  background-color: rgb(230, 230, 230);
  border-radius: 50%;
  display: inline-block;
}

.date-time-loading {
  border-radius: 25px;
  display: inline-block;
}

.card-date-time {
  color: var(--grey);
}

.text-show-detail {
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}

.card-custom {
  height: 40vh;
}
</style>