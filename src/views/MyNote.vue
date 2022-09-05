<template>
  <div class="container-fluid" style="display: flex; justify-content: center">
    <div class="row col-12">
      <div class="col-lg-8">
        <NoteForm
          :editNote="this.updateNote"
          @noteForm="GetNoteTitle"
          @reloadNoteList="getListNote"
        />
      </div>
      <div class="col-lg-4">
        <!-- <Header @createNote="CreateNote" /> -->
        <NoteList
          :noteList="this.noteList"
          :note="this.note"
          @selectedNote="selectedNote"
          @reloadNoteList="getListNote"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Note from "../components/Note.vue";
import NoteForm from "../components/NoteForm.vue";
import NoteList from "../components/NoteList.vue";
import moment from "moment";
import { HTTP } from "../axios";
import axios from "axios";

export default {
  components: {
    Note,
    Header,
    NoteForm,
    NoteList,
  },
  data: function () {
    return {
      noteList: [],
      note: {
        title: "",
        detail: "",
        noteCreateStatus: false,
      },
      updateNote: {},
    };
  },
  created() {
    this.getListNote();
    // this.getApi();
  },
  methods: {
    async getListNote() {
      await HTTP.get("/notelist")
        .then((res) => {
          this.noteList = [...new Set(res.data)];
        })
        .catch((e) => {
          console.log(e);
        });
    },
    CreateNote(status) {
      this.note.noteCreateStatus = status;
    },
    GetNoteTitle(title, detail) {
      this.note.noteCreateStatus = title || detail ? true : false;
      this.note.title = title;
      this.note.detail = detail;
      this.note.update = moment().format("YYYY-MM-DD hh:mm:ss");
    },
    selectedNote(note) {
      this.updateNote = note;
      this.updateNote.noteCreateStatus = false;
    },
    // async getApi() {
    //   let tmpArr = [
    //     // "T000027",
    //     // "T000241"
    //   ];

    //   let count = 1;
    //   tmpArr.forEach((i) => {
    //     let offset = 0;
    //     let limits = 500;
    //     let tmpOffset = "";
    //     let datastatus = "ไม่มีข้อมูล";
    //     let dealer_code = "";
    //     dealer_code = i;
    //     (async function () {
    //       while (offset <= limits) {
    //         const response = await axios
    //           .get(
    //             `http://icandoproduction.com/wsmart_crm_TH/api_wsmart_Exportpackagecustomer.php?dealer_code=${dealer_code}&offset=${offset}&limit=10`
    //           )
    //           .then((resp) => {
    //             if (resp.data != null) {
    //               if (typeof resp.data == "string") {
    //                 tmpOffset += offset + ", ";
    //               } else {
    //                 datastatus = resp.data ? "ผ่าน" : "-";
    //               }
    //               offset += 10;
    //             } else {
    //               offset = limits + 1;
    //             }
    //           });
    //       }
    //       console.log(
    //         dealer_code,
    //         "==",
    //         !tmpOffset.length
    //           ? datastatus
    //           : tmpOffset.substring(0, tmpOffset.length - 2)
    //       );
    //       // console.log(count + "/" + tmpArr.length);
    //       count++;
    //     })();
    //   });
    // },
  },
};
</script>

<style>
</style>