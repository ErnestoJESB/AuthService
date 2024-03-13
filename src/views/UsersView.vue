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
const group: Ref<string> = ref('IDYGS82')

const handleSubmit = () => {
    const formData: IUser = {
        name: name.value,
        email: email.value,
        password: password.value,
        address: group.value
    };
    service.postData(formData);
}

const service = new PostService()
const users: Ref<IUser[]> = service.getPosts()

onMounted(async () => {
    await service.fetchAll()
})

</script>
<style scoped>
.card {
    width: 350px;
    height: 350px;
    background: #E8EAEA;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.title,
.more {
    padding: 10px 15px;
}

.user {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
}

.user__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
}

.user__container {
    display: flex;
    flex-direction: column;
}

.title {
    font-weight: 900;
    font-size: 1.3em;
}

.name {
    font-weight: 800;
}

.username {
    font-size: .9em;
    color: #64696e;
}

.image {
    width: 60px;
    height: 60px;
    background: rgb(22, 19, 70);
    background: linear-gradient(295deg, rgba(22, 19, 70, 1) 41%, rgba(89, 177, 237, 1) 100%);
    border-radius: 50%;
    margin-right: 15px;
}

.follow {
    border: none;
    border-radius: 25px;
    background-color: #0f1113;
    color: white;
    padding: 8px 15px;
    font-weight: 700;
}

.more {
    display: block;
    text-decoration: none;
    color: rgb(29, 155, 240);
    font-weight: 800;
}

.user:hover {
    background-color: #b3b6b6;
}

.more:hover {
    background-color: #b3b6b6;
    border-radius: 0px 0px 15px 15px;
}

.follow:hover {
    background-color: #2c3136;
}
</style>