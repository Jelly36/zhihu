<template>
    <div class="validate-input-container pb-3">
        <input type="text"
            class="form-control"
            :class="{'is-invalid': inputRef.error}"
            :value="inputRef.val"
            @blur="validateInput"
               @input="updateValue"
        >
        <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue'
const emailReg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
interface RuleProp {
    type: 'required' | 'email';
    message: string
}
interface DataProp{
    val: string,
    error: boolean,
    message: string
}
export type RulesProp = RuleProp[];

const ruleType = {
    type: Array as PropType<RulesProp>,
    default: () => [
        {
            type: "email",
            message: ""
        }
    ]
} as any;

export default defineComponent({
    props: {
        rules: ruleType,
        modelValue: {
            type: String
        }
    },
    setup(props,context){
        const inputRef:DataProp = reactive({
            val: props.modelValue as string,
            error: false,
            message: ''
        });
        const updateValue = (e: KeyboardEvent) => {
            const targetValue = (e.target as HTMLInputElement).value
            inputRef.val = targetValue
            context.emit('update:modelValue',targetValue)
        }
        const validateInput = () => {
            if(props.rules) {
                const allPassed = props.rules.some(rule => {
                    let passed = true
                    inputRef.message = rule.message
                    switch(rule.type){
                        case 'required': passed = inputRef.val.trim() !== '' ;break;
                        case 'email': passed = (emailReg.test(inputRef.val))  ;break;
                        default: break
                    }
                    return passed
                })
                inputRef.error = !allPassed
            }
        }
        return {
            inputRef,
            validateInput,
            updateValue
        }
    }
})
</script>

<style>

</style>
