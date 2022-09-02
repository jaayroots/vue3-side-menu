
import { ref, reactive } from "vue";
import { HTTP } from "../axios";

function useGetNote(initial) {
    const noteList = reactive({ counter: initial });
    async function getNote() {
        const response = await HTTP.get("/notelist")
            .then((res) => {
                noteList.data = res.data
            })
            .catch((e) => {
                console.log(e);
            });
    }
    return { noteList, getNote };
}

function useCreateNote(title, detail) {
    const fromNoteTitle = ref(title);
    const fromNoteDetail = ref(detail)
    async function createNote() {
        await HTTP.post("/notelist", { title: this.fromNoteTitle, detail: this.fromNoteDetail })
            .then((res) => {
                fromNoteTitle.value = ''
                fromNoteDetail.value = ''
                this.getNote()
            })
            .catch((e) => {
                console.log(e);
            });
    }
    return { fromNoteTitle, fromNoteDetail, createNote };
}

async function useDeleteNote(objNote) {
    const noteId = reactive(objNote);
    await HTTP.delete("/notelist", { data: objNote })
        .then((res) => {
        })
        .catch((e) => {
            console.log(e);
        });
}

async function useUpdateNote(fromNoteId, fromNoteTitle, fromNoteDetail) {
    let tmpEdit = {
        note_id: fromNoteId,
        title: fromNoteTitle,
        detail: fromNoteDetail,
    }
    await HTTP.put("/notelist", tmpEdit)
        .then((res) => {
            fromNoteTitle.value = ''
            fromNoteDetail.value = ''
            this.getNote()
        })
        .catch((e) => {
            console.log(e);
        });
}

export default { useGetNote, useCreateNote, useDeleteNote, useUpdateNote };