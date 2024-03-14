<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import PostService from '@/services/PostService'
import type IUser from '@/interfaces/IUser'
import type { Ref } from 'vue'
import { ref, onMounted } from 'vue'

const service = new PostService()
const users: Ref<IUser[]> = service.getPosts()


const email: Ref<string> = ref('')
const password: Ref<string> = ref('')

const handleSubmit = () => {
  const formData = {
    email: email.value,
    password: password.value,
  };
  service.login(formData);
}


</script>

<template>
  <section>
    <input v-model="email" type="email" name="email" placeholder="Correo">
    <input v-model="password" type="password" name="password" placeholder="Contraseña">
    <button @click="handleSubmit">Enviar</button>
  </section>
</template>
