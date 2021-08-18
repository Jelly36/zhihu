<template>
    <div class="validate-input-container pb-3">
        <input
            v-if="tag !== 'textarea'"
            class="form-control"
            autocomplete
            :class="{'is-invalid': inputRef.error}"
            :value="inputRef.val"
            @blur="validateInput"
               @input="updateValue"
            v-bind="$attrs"
        >
        <textarea
            v-else
            class="form-control"
            :class="{'is-invalid': inputRef.error}"
            :value="inputRef.val"
            @blur="validateInput"
            @input="updateValue"
            v-bind="$attrs"
        >
        </textarea>
        <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, onMounted } from 'vue'
import { emitter } from './ValidateForm.vue'
const emailReg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
interface RuleProp {
    type: 'required' | 'email' | 'custom';
    message: string
    validator?: () => boolean
}
interface DataProp{
    val: string,
    error: boolean,
    message: string
}
export type RulesProp = RuleProp[];
export type TagType = 'input' | 'textarea'

interface Props {
    rules: RulesProp,
    modelValue: string,
    tag: TagType
}

export default defineComponent({
    props: {
        rules: {
            type: Array as PropType<RulesProp>,
            default: () => [
                {
                    type: "email",
                    message: ""
                }
            ]
        },

        modelValue: {
            type: String
        },
        tag: {
            type: String as PropType<TagType>,
            default: 'input'
        }
    },
    inheritAttrs:false,
    setup(props:Props,context){
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
        // 校验每个input的格式是否正确
        const validateInput = () => {
            if(props.rules) {
                const allPassed = props.rules.every(rule => {
                    let passed = true
                    inputRef.message = rule.message
                    switch(rule.type){
                        case 'required': passed = inputRef.val.trim() !== '' ;break;
                        case 'email': passed = (emailReg.test(inputRef.val))  ;break;
                        case 'custom': passed = rule.validator ? rule.validator() : true; break
                        default: break
                    }

                    return passed
                })

                inputRef.error = !allPassed
                return allPassed
            }
            return true
        }
        onMounted(()=> {
            emitter.emit('form-item-created',validateInput)
        })
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
