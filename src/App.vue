<template>
    <div class="container">
        <global-header :user="currentUser"></global-header>
        <!-- <column-list :list="list"></column-list> -->
        <validate-form @form-submit="onFormSubmit">
            <div class="mb-3">
                <label class="form-label">邮箱地址</label>
                <validate-input :rules="emailRules" v-model="emailVal" type="text" ref="inputRef"
                                placeholder="请输入邮箱地址"></validate-input>
            </div>
            <div class="mb-3">
                <label class="form-label">密码</label>
                <validate-input :rules="passwordRules" v-model="passwordVal" type="password"
                                placeholder="请输入密码"></validate-input>
            </div>
            <template #submit>
                <button class="btn btn-danger">提交</button>
            </template>
        </validate-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import validateInput, { RulesProp } from './components/ValidateInput.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateForm from './components/ValidateForm.vue'

const userInfo: UserProps = {
    isLogin: true,
    name: 'Daisy',
}
const testData: ColumnProps[] = [
    {
        id: 1,
        title: 'test1的专栏',
        description: '这里是test1的专栏，有一段非常有意思的简介，可以更新一下喔',
        avatar:
            'https://user-center.cdn.bcebos.com/head/raw/uc.101.1b1d2eda.zn5K9zt_t5fghr6kh8ZHuw?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=16',
    },
    {
        id: 2,
        title: 'test2的专栏',
        description: '这里是test2的专栏，有一段非常有意思的简介，可以更新一下喔',
        avatar:
            'https://user-center.cdn.bcebos.com/head/raw/uc.101.1b1d2eda.zn5K9zt_t5fghr6kh8ZHuw?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=16',
    },
    {
        id: 3,
        title: 'test3的专栏',
        description: '这里是test3的专栏，有一段非常有意思的简介，可以更新一下喔',
    },
]
export default defineComponent({
    name: 'App',
    setup () {
        const inputRef = ref<any>()
        const emailVal = ref('')
        let emailRules: RulesProp = [
            {
                type: 'required',
                message: '电子邮件格式不能为空'
            },
            {
                type: 'email',
                message: '请输入正确的电子邮箱格式'
            }
        ]
        const passwordVal = ref('')
        const passwordRules: RulesProp = [
            {type: 'required', message:'密码不能为空'}
        ]
        const emailRef = reactive({
            val: '',
            error: false,
            message: '',
        })

        const onFormSubmit = (result: boolean) => {
            console.log('123', result)
            console.log('result',inputRef.value.validateInput())
        }
        return {
            list: testData,
            currentUser: userInfo,
            emailRef,
            emailRules,
            emailVal,
            passwordVal,
            passwordRules,
            onFormSubmit,
            inputRef
        }
    },
    components: {
        ColumnList,
        GlobalHeader,
        validateInput,
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
