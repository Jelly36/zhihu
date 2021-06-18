<template>
    <div class="home-page contanier-md">
         <column-list :list="list"></column-list>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Home'
})
</script>
