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
          v-for="note in notelist"
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
      <div class="col-lg-8" style="background: white">
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label"
            >Password</label
          >
          <div class="col-sm-10">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HTTP } from "../axios";
import { ref, onMounted } from "vue";
export default {
  setup() {
    const notelist = ref([]);
    const getData = async () => {
      const response = await HTTP.get("/notelist");
      notelist.value = response.data;
    };
    onMounted(() => {
      getData();
    });
    return { notelist };
  },
};
</script>

<style>
</style>