<template>
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