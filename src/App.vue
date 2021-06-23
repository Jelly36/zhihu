<template>
    <div class="container">
        <global-header :user="currentUser"></global-header>
<!--        <validate-form @form-submit="onFormSubmit">-->
<!--            <div class="mb-3">-->
<!--                <label class="form-label">邮箱地址</label>-->
<!--                <validate-input :rules="emailRules" v-model="emailVal" type="text" ref="inputRef"-->
<!--                                placeholder="请输入邮箱地址"></validate-input>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <label class="form-label">密码</label>-->
<!--                <validate-input :rules="passwordRules" v-model="passwordVal" type="password"-->
<!--                                placeholder="请输入密码"></validate-input>-->
<!--            </div>-->
<!--            <template #submit>-->
<!--                <button class="btn btn-danger">提交</button>-->
<!--            </template>-->
<!--        </validate-form>-->

        <router-view></router-view>
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
    </div>
</template>

<script lang="ts">
import { defineComponent, computed} from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from 'vuex'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateForm from './components/ValidateForm.vue'

const userInfo: UserProps = {
    isLogin: false,
    name: 'Daisy',
}
export default defineComponent({
    name: 'App',
    setup () {
        const store = useStore()
        const currentUser = computed(()=> {
            return store.state.user
        })
        return {
            currentUser
        }
    },
    components: {
        GlobalHeader,
        ValidateForm
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
    margin-top: 60px;
}
</style>
