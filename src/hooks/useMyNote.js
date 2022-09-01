
import { ref, reactive } from "vue";
import { HTTP } from "../axios";

function useGetNote(initial) {
    // reactive composition api
    const noteList = reactive({ counter: initial });
    async function getNote() {
        const response = await HTTP.get("/notelist");
        noteList.data = response.data
    }

    return { noteList, getNote };
}

export default { useGetNote };