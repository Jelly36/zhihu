<template>
    <div class="signup">
        <validate-form @form-submit="onFormSubmit">
            <div class="mb-3">
                <label class="form-label">邮箱地址</label>
                <validate-input :rules="emailRules" v-model="formdata.email" type="text" ref="inputRef"
                                placeholder="请输入邮箱地址"></validate-input>
            </div>
            <div class="mb-3">
                <label class="form-label">昵称</label>
                <validate-input :rules="nameRules" v-model="formdata.nickname" type="text" ref="inputRef"
                                placeholder="请输入昵称"></validate-input>
            </div>
            <div class="mb-3">
                <label class="form-label">密码</label>
                <validate-input :rules="passwordRules" v-model="formdata.password" type="password"
                                placeholder="请输入密码"></validate-input>
            </div>
            <div class="mb-3">
                <label class="form-label">重复密码</label>
                <validate-input :rules="repeatPasswordRules" v-model="formdata.repeatPassword" type="password"
                                placeholder="请再次输入密码"></validate-input>
            </div>
        </validate-form>
    </div>
</template>
<script>
import { defineComponent,reactive } from 'vue'
import { useStore } from 'vuex'
import validateInput, { RulesProp } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm'
import { useRouter } from 'vue-router'
import createMessage from '@/components/createMessage'


    export default defineComponent({
        name: 'signup',
        components: {
            validateInput, ValidateForm
        },
        setup() {
            const store = useStore()
            const formData = reactive({
                email: '',
                nickName: '',
                password: '',
                repeatPassword: ''
            })
            const router = useRouter()
            const emailRules: RulesProp = [
                {
                    type: 'required',
                    message: '电子邮件格式不能为空'
                },
                {
                    type: 'email',
                    message: '请输入正确的电子邮箱格式'
                }
            ]
            const nameRules: RulesProp = [
                {
                    type: 'required',
                    message: '昵称不能为空'
                }
            ]
            const passwordRules: RulesProp = [
                {
                    type: 'required',
                    message: '密码不能为空'
                }
            ]
            const repeatPasswordRules: RulesProp = [
                {
                    type: 'required',
                    message: '重复密码不能为空'
                },
                {
                    type: 'custom',
                    validator: () => {
                        return formData.password === formData.repeatPassword
                    },
                    message: '密码不相同'
                }
            ]
            const onFormSubmit = async (result: boolean ) => {
                if (result) {
                    const payload = {
                        email: formData.email,
                        name: formData.nickName,
                        password: formData.password,
                        repeatPassword: formData.repeatPassword
                    }
                    store.dispatch('signup', payload).then(data => {
                        createMessage('注册成', 'success')
                        router.push('/login')

                    }).catch(e => {
                        console.log(e)
                    })
                }
            }
            return {
                emailRules,
                nameRules,
                passwordRules,
                repeatPasswordRules,
                onFormSubmit
            }
        }
    })
</script>
