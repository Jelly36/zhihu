<template>
  <div class="row">
    <div v-for="column in list" :key="column._id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.avatar && column.avatar.url" :alt="column.title" class="rounded-circle border border-light w-25 my-3"/>
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-start">{{ column.description }}</p>
          <router-link :to="`/column/${column._id}`" class="btn btn-outline-primary">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import {ColumnProps} from '@/store'

interface Props{
    list: ColumnProps[]
}
export default defineComponent({
        name: "ColumnList",
        props: {
            list: {
                type: Array as PropType<ColumnProps[]>,
                required: true,
            }
        },
        setup(props:Props) {
            const columnList = computed(()=>{
                return props.list.map(item => {
                    if(!item.avatar) {
                        item.avatar = {
                            url: require('@/assets/avatar.jpg')
                        }
                    } else {
                        item.avatar.url = item.avatar.url + '?x-oss-process=image/resize,m_pad,h_100,w_50'
                    }
                    return item
                })
            })
            return {
                columnList
            }
        },
    }
)
</script>

<style scoped>
.card-body img{
    width: 50px;
    height: 100px;
}
</style>
