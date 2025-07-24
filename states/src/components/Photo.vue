<script>






export default {
    data() {
        return {

        }
    },
    props: {
        photo_data: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <img v-if="photo_data" :src="photo_data" alt="Dynamic image" class="my-image">
</template>

<style scoped>


</style>
