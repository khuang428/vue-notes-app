<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        idNum : Number,
        noteTitle: String,
        content: String
    },
    setup(props){
        props.idNum;
        props.noteTitle;
        props.content;
    },
    methods:{
        deleteNote(){
            if(this.idNum){
                this.$emit("deleteMe", this.idNum);
            }
        }
    }
})

</script>

<template>
<div class="note">
    <div class = "header-bar">
        <span class="title">
            <input class="title-input" v-model="noteTitle"/>
        </span>
        <span class="delete" @click="deleteNote()">
            &#128465;
        </span>
    </div>
    <textarea class="content">{{content}}</textarea>
</div>
</template>