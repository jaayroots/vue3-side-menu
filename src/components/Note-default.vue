<template>
  <!-- <div class="card-body card-custom">
    <h6 class="card-date-time">{{ this.noteList.update }}</h6>
    <div>
      <span class="dot"></span>
      <b style="padding-left: 0.5rem">{{ this.noteList.titleNote }}</b>
    </div>
    <p class="card-text text-show">
      {{ this.noteList.detailNote }}
    </p>
  </div> -->
  <div class="card-body" style="max-height: 30rem;">
      <h6 class="card-date-time">{{ this.noteList.update }}</h6>
    <div>
      <span class="dot"></span>
      <b style="padding-left: 0.5rem">{{ this.noteList.titleNote }}</b>
    </div>
    <p class="card-text text-show">{{ this.noteList.detailNote }}</p>
  </div>
</template>

<script>
export default {
  props: {
    noteList: Object,
  },
  setup() { },
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

.text-show {
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
}

.card-custom {
  height: 40vh;
}
</style>