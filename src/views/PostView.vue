<template>
    <div>
        <h2><label>Nombre: </label>{{ post.name }}</h2>
        <h2><label>Email: </label>{{ post.email }}</h2>
        <h2><label>Numero: </label>{{ post.id }}</h2>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import PostService from '@/services/PostService'
import { onMounted, onBeforeMount } from 'vue'

const service = new PostService()
const post = service.getPost()

onMounted(async () => {
    const router = useRoute()
    const postEmail = router.params.email as string
    await service.fetchPost(postEmail)
})

</script>

<style scoped lang="scss">
h1 {
    color: $primary;
}
</style>