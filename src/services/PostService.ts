import type IUser from '@/interfaces/IUser'
import { ref } from 'vue'
import type { Ref } from 'vue'
const url = 'https://2d55-201-134-180-250.ngrok-free.app/'
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
      const json = await fetch(url + 'user?email=' + id, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'ngrok-skip-browser-warning': '0'
        }
      })
      const response = await json.json()
      this.user.value = await response
      console.log(this.user.value)
    } catch (error) {
      console.log(error)
    }
  }

  async postData(data: any) {
    fetch(url + 'register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'ngrok-skip-browser-warning': '0'
      }
    })
      .then((res) => {
        alert(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  async login(data: any): Promise<void> {
    try {
      const login = new Request(url + '/login', {
        method: 'POST',
        headers: {
          'ngrok-skip-browser-warning': '0',
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
      })
      const response: any = await fetch(login)
      const json = await response.json()
      localStorage.setItem("Neto",json.token)
      if(json.token){
        alert('Iniciaste sesión correctamente')
      }
      console.log(json.token)
    } catch (error) {
      alert('No iniciaste sesión' + error)
    }
  }

  async fetchAll(): Promise<void> {
    try {
      const json = await fetch(url + 'Users', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'ngrok-skip-browser-warning': '0'
        }
      })
      const response = await json.json()
      this.users.value = await response
    } catch (error) {
      console.log(error)
    }
  }
}
