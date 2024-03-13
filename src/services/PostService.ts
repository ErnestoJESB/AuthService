import type IUser from '@/interfaces/IUser'
import { ref } from 'vue'
import type { Ref } from 'vue'
const url = 'http://localhost:3000/'
const url2 = 'http://172.16.107.202:3000/'
// const url2 = 'https://jsonplaceholder.typicode.com/'

export default class PostService {
  private users: Ref<IUser[]>
  private user: Ref<IUser>

  constructor() {
    this.users = ref([])
    this.user = ref({}) as Ref<IUser>
  }

  getPosts(): Ref<IUser[]> {
    return this.users
  }
  getPost(): Ref<IUser> {
    return this.user
  }

  async fetchPost(id: string): Promise<void> {
    try {
      console.log(id)
      const json = await fetch(url + 'Users/' + id)
      const response = await json.json()
      this.user.value = await response
    } catch (error) {
      console.log(error)
    }
  }

  /* async postData(data: any) {
    fetch(url + 'crearusuario', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((res) => {
        alert(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }
   */

  async postData(data: any) {
    fetch(url + 'register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((res) => {
        alert(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  async fetchAll(): Promise<void> {
    try {
      const json = await fetch(url + 'Users')
      const response = await json.json()
      this.users.value = await response
    } catch (error) {
      console.log(error)
    }
  }
}
