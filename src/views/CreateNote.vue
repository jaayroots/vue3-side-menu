<template>
  <div class="container-fluid header col-lg-auto">
    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-lg"
      placeholder="Title" v-model="titleNote" />
    <div class="row" style="margin-top: 0.5rem">
      <div class="col-lg-6">
        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false" style="width: 100%;">
            Option: {{ value }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" role="menu">
            <li v-for="option in options" :key="option">
              <a class="dropdown-item" @click="value = option" href="javascript:void(0)">{{ option }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-lg-6">
        <button type="button" class="btn btn-light" style="width: 100%;">Faverite Status</button>
      </div>
    </div>
    <textarea style="margin-top: 0.5rem;" class="form-control" id="exampleFormControlTextarea1" rows="8"
      placeholder="Note me ..." v-model="detailNote"></textarea>
    <div class="row">
      <div class="col-lg-6" style="margin-bottom: 0.5rem;">
        <button type="button" class="btn btn-secondary" style="margin-top: 0.5rem; width: 100%;">Clear</button>
      </div>
      <div class="col-lg-6">
        <button type="button" class="btn btn-success" style="margin-top: 0.5rem; width: 100%;"
          @click="saveNote()">Save</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data: function () {
    return {
      title: '',
      detailNote: '',
      options: ['A', 'B', 'C'],
      value: 'A'
    };
  },
  methods: {

  },
};
</script>

<style>
</style>