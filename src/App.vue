<template>
    <global-header :user="currentUser"></global-header>
    <loader  v-if="isLoading" text="拼命加载中"></loader>
   <div class="container-xxl my-3">
       <router-view></router-view>
   </div>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
        <small>
            <ul class="list-inline mb-0">
                <li class="list-inline-item">© 2012知乎专栏</li>
                <li class="list-inline-item">课程</li>
                <li class="list-inline-item">文档</li>
                <li class="list-inline-item">联系</li>
                <li class="list-inline-item">更多</li>
            </ul>
        </small>
    </footer>
</template>

<script lang="ts">
import { defineComponent, computed, watch} from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from 'vuex'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateForm from './components/ValidateForm.vue'
import Loader from './components/Loader.vue'
import createMessage from './components/createMessage'
const userInfo: UserProps = {
    isLogin: true,
    name: 'Daisy',
}
export default defineComponent({
    name: 'App',
    setup () {
        const store = useStore()
        const currentUser = computed(()=> {
            return store.state.user
        })
        const isLoading = computed(() => {
            return store.state.loading
        })
        const error = computed(() => store.state.error)

        watch(() => error.value.status,() => {
            const { status, message } = error.value
            if(status && message) {
                createMessage('用户名或者密码错误','error')
            }
        })
        return {
            currentUser,
            isLoading,
            error
        }
    },
    components: {
        GlobalHeader,
        ValidateForm,
        Loader
    },
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
