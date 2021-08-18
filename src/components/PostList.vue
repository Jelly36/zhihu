<template>
    <div class="post-list">
        <article v-for="post in list" :key="post._id" class="card mb-3 shadow-sm">
            <div class="card-body">
                <h4 class="text-start">{{post.title}}</h4>
                <div class="row my-3 align-items-center">
                    <div class="col-3" v-if="post.image">
                        <img :src="post.image && post.image.url" :alt="post.title" class="rounded-sm w-50">
                    </div>
                    <p :class="{'col-9':post.image}" class="text-start">{{post.excerpt}}</p>
                </div>
                <p class="text-muted text-start">{{post.createdAt}}</p>
            </div>
        </article>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { PostProps } from '../store'

export default defineComponent({
    props: {
        list: {
            required: true,
            type: Array as PropType<PostProps[]>
        }
    }
})
</script>
