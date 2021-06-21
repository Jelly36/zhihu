<template>
    <div class="login">
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
<!--            <template #submit>-->
<!--                <button class="btn btn-primary">提交</button>-->
<!--            </template>-->
        </validate-form>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import validateInput, { RulesProp } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
export default defineComponent({
    name:'Login',
    setup () {
        const inputRef = ref<any>()
        const router = useRouter()
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
            if(result){
                router.push({name:'column', params:{id:1}})
            }
        }
        return {
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
        validateInput,ValidateForm
    }
})
</script>
