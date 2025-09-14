import { defineStore } from "pinia";

export const authStore = defineStore('auth',{
    state: () =>({
        user: null,
        loading: false,
        error: null
    }),
    getters: {
        isLogin: (s)=> !!s.user,
    },
    actions:{
        async login(name,pass){
            this.loading = true
            this.error = null
            await new Promise(r => setTimeout(r,400))
            if(pass == '123' && name =='123') this.user = name 
            else this.error = "Invalid"
            this.loading = false 
            return this.isLogin
        }
    }
})