<script setup lang="ts">

const props = defineProps({
    idNum : Number,
    noteTitle: String,
    content: String
});


</script>

<template>
<div class="note">
    <div class = "header-bar">
        <span class="title">
        {{props.noteTitle}}
        </span>
        <span class="delete">
            &#128465;
        </span>
    </div>
    <p class="content">
        {{props.content}}
    </p>
</div>
</template>