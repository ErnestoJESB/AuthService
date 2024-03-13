<template>
    <section>
        <ul>
            <li v-for="(post, index) in users" :key="index">
                <RouterLink :to="{ name: 'postEmail', params: { id: post.email } }">{{ index + 1 }} | {{ post.name }}
                </RouterLink>
            </li>
        </ul>
    </section>
    <section>
        <input v-model="name" type="text" name="name" placeholder="Nombre">
        <input v-model="email" type="email" name="email" placeholder="Correo">
        <input v-model="password" type="password" name="password" placeholder="Contraseña">
        <button @click="handleSubmit">Enviar</button>
    </section>
</template>
<script setup lang="ts">
import PostService from '@/services/PostService'
import type IUser from '@/interfaces/IUser'
import type { Ref } from 'vue'
import { ref, onMounted } from 'vue'

const name: Ref<string> = ref('')
const email: Ref<string> = ref('')
const password: Ref<string> = ref('')
const data: Ref<IUser[]> = ref([]);

const handleSubmit = () => {
    const formData: IUser = {
        name: name.value,
        email: email.value,
        password: password.value
    };

    data.value.push(formData);
    service.postData(data.value);
    console.log(data.value);
}

const service = new PostService()
const users: Ref<IUser[]> = service.getPosts()

onMounted(async () => {
    await service.fetchAll()
})

</script>
<style scoped></style>