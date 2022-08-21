<script lang="ts">
import { defineComponent } from "vue";
import Note from "./Note.vue";
import * as storageUtils from "../storage/storageUtils";

export default defineComponent({
    components:{
        Note
    },
    data(){
        return{
            notes: storageUtils.getNotes()
        }
        
    },
    methods : {
        createNote(){
            const idNum = storageUtils.createNote("New Note","");
            this.notes.push({id: idNum, title: "New Note", content: ""});
        },
        deleteById(idNum: Number){
            storageUtils.deleteNoteById(idNum);
            this.notes = this.notes.filter((n)=>n.id != idNum);
        },
        update(note: storageUtils.NoteDAO){
            storageUtils.updateNote(note);
        }
    }
});

</script>

<template>
<div id="new-button" @click="createNote()">
    +
</div>
<section id="notes-list">
    <Note v-for="note in notes" :idNum="note.id" :noteTitle="note.title" :content="note.content" @deleteMe="deleteById" @saveMe="update"/>
</section>
</template>