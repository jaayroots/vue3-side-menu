<template>
  <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-lg" placeholder="Title"
    v-model="this.titleNote" @keyup="passback()" />
  <textarea style="margin-top: 0.5rem;" class="form-control" id="exampleFormControlTextarea1" rows="15"
    placeholder="Note me ..." v-model="this.detailNote" @keyup="passback()"></textarea>
</template>

<script>
export default {
  data: function () {
    return {
    };
  },
  methods: {
    passback() {
      console.log(this.detailNote);
      this.$emit('noteForm', this.titleNote, this.detailNote)
    }
  },
};
</script>

<style>
</style>