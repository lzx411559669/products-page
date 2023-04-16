<template>
    <div class="title-box my-4">
    <div class=" text-lg">{{title}}</div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    title:string
}>()

</script>

<style lang="scss" scoped>
.title-box {
    border-bottom: 1px solid #999;
}

</style>