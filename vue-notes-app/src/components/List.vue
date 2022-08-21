<script lang="ts">
import { defineComponent } from "vue";
import Note from "./Note.vue";
import { NoteDAO }   from "../storage/storageUtils";

export default defineComponent({
    components:{
        Note
    },
    data(){
        return{
            notes: NoteDAO.getNotes()
        }
        
    },
    methods : {
        createNote(){
            const idNum = NoteDAO.createNote("","");
            this.notes.push({id: idNum, title: "", content: ""});
        },
        deleteById(idNum: Number){
            NoteDAO.deleteNoteById(idNum);
            this.notes = this.notes.filter((n)=>n.id != idNum);
        }
    }
});

</script>

<template>
<div id="new-button" @click="createNote()">
    +
</div>
<section id="notes-list">
    <Note v-for="note in notes" :idNum="note.id" :noteTitle="note.title" :content="note.content" @deleteMe="deleteById" />
</section>
</template>