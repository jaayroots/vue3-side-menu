<template>
  <div class="container-fluid" style="display: flex; justify-content: center">
    <div class="row col-12">
      <div class="col-lg-4">
        <div class="row col-12" style="padding-bottom: 0.5rem">
          <div class="col-10"><h4>All Ideas</h4></div>
          <div class="col-2"><i class="bi bi-search"></i></div>
        </div>
        <div
          class="card"
          style="margin-bottom: 0.5rem"
          v-for="note in noteList.data"
          :key="note.id"
        >
          <div class="card-body">
            <h5 class="card-title">{{ note.title }}</h5>
            <p class="card-text">
              {{ note.detail }}
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">{{ note.update }}</small>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Title</span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="title"
          />
        </div>
        <div class="input-group mb-2">
          <textarea
            class="form-control"
            aria-label="With textarea"
            placeholder="Detail ..."
            rows="15"
          ></textarea>
        </div>
        <div class="input-group mb-2">
          <button
            type="button"
            class="btn btn-success btn-xl btn-block"
            style="width: 100%"
          >
            Create Note +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import NoteFormV2 from "../components/NoteFormV2.vue";
import useMyNote from "../hooks/useMyNote";
export default {
  components: {
    NoteFormV2,
  },
  setup() {
    const { noteList, getNote } = useMyNote.useGetNote({});

    onMounted(() => {
      getNote();
    });
    return {
      noteList,
      getNote,
    };
  },
};
</script>

<style>
</style>