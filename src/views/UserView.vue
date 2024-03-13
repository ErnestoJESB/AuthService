<template>
    <div>
        <h2><label>Nombre: </label>{{ post.name }}</h2>
        <h2><label>Email: </label>{{ post.email }}</h2>
        <h2><label>Numero: </label>{{ post.id }}</h2>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import type IUser from '@/interfaces/IUser'
import type { Ref } from 'vue'
import PostService from '@/services/PostService'
import { onMounted, onBeforeMount } from 'vue'

const service = new PostService()
const post: Ref<IUser> = service.getPost()
console.log(post.value)

onMounted(async () => {
    const router = useRoute()
    const postId = router.params.id as string
    console.log(postId)
    await service.fetchPost(postId)
})

</script>