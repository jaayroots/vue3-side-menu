<template>
  <!-- <Header /> -->
  <div class="container-fluid" style="display: flex; justify-content: center;">
    <div class="row col-12">
      <div class="col-lg-4">
        <NoteForm />
      </div>
      <div class="col-lg-8">
        <NoteList :noteList="this.noteList" />
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
      noteList: []
    };
  },
  created() {
    this.noteList = [
      {
        id: 1,
        titleNote: 'a short piece of writing',
        detailNote: "He left a note to say he would be home late.There's a note on the door saying when the shop will open again.",
        update: '20 Jan 2022 : 04:55',
      }, {
        id: 2,
        titleNote: 'Job brief',
        detailNote: "We are looking for a Content Writer to join our editorial team and enrich our websites with new blog posts, guides and marketing copy.",
        update: '20 Jan 2022 : 04:55',
      }, {
        id: 3,
        titleNote: 'Content Writer duties and responsibilities',
        detailNote: 'Content Writers are responsible for style and format consistency across all projects and communicating with other team members to create the best content possible. Other duties and responsibilities include:',
        update: '20 Jan 2022 : 04:55',
      }, {
        id: 4,
        titleNote: 'What does a Content Writer do?',
        detailNote: 'Content Writers work for marketing agencies and in-house advertising departments to product engaging written pieces for digital and print media. Content Writers can write on a range of subjects, which their clients can then use to advertise their services or educate consumers on relevant topics to their brand. They master different style guides and are able to produce creative writing, informational articles, fictional stories, personal blog posts and other entertaining or educational content. Their role is to attract potential customers to a brand by producing compelling writing that a business’ target market may be interested in reading about.',
        update: '20 Jan 2022 : 04:55',
      },
    ]
  },
  methods: {
  },
};
</script>

<style>
</style>