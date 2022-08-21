<script lang="ts">
import { propsToAttrMap } from '@vue/shared';
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
    data(){
        return{
            title: this.noteTitle,
            editContent: this.content
        }
    },
    methods:{
        deleteNote(){
            if(this.idNum){
                this.$emit("deleteMe", this.idNum);
            }
        },
        saveNote(){
            if(this.idNum){
                this.$emit("saveMe", {id:this.idNum, title:this.title, content:this.editContent});
            }
        }
    }
})

</script>

<template>
<div class="note">
    <div class = "header-bar">
        <span class="title">
            <input class="title-input" v-model="title"/>
        </span>
        <span class="buttons">
            <span class="save" @click="saveNote()">
                &#128190;
            </span>
            <span class="delete" @click="deleteNote()">
                &#128465;
            </span>
        </span>
    </div>
    <textarea class="content" v-model="editContent"></textarea>
</div>
</template>