<template>
  <div class="container-fluid header col-lg-auto">
    <div class="row col-12">
      <div class="col-lg-4">
        <button type="button" class="btn btn-success" style="width: 100%;" @click="createNote()">Add Note +</button>
      </div>
      <div class="col-lg-8">
        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
          placeholder="Universal Search" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    };
  },
  methods: {
    createNote() {
      this.$emit('createNote', true)
    }
  },
};
</script>

<style>
.header {
  padding-top: 0.2rem;
  padding-bottom: 0.5rem;
}
</style>