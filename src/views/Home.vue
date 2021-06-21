<template>
    <div class="home-page">
         <section class="py-5 text-center container">
             <div class="row py-lg-5">
                 <div class="col-lg-6 col-md-8 mx-auto">
                     <img src="../assets/callout.svg" alt="callout" class="w-50">
                     <h2 class="font-weight-light">随心写作，自由表达</h2>
                     <p>
                         <a href="" class="btn btn-primary my-2">开始写文章</a>
                     </p>
                 </div>
             </div>
         </section>
        <h4 class="font-weight-bold text-center">发现精彩</h4>
        <column-list :list="list"></column-list>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'

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
    name: 'Home',
    setup(){
        return {
            list: testData,
        }
    },
    components: {
        ColumnList
    }

})
</script>
