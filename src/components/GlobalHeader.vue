<template>
  <div>
      <nav class="navbar navbar-dark bg-primary justify-content-between mb-4">
          <div class="container-fluid">
              <router-link to="/" class="navbar-brand">知乎专栏</router-link>
              <ul v-if="!user.isLogin" class="list-inline mb-0">
                  <li class="list-inline-item">
                      <router-link to="/login" class="btn btn-outline-light">登录</router-link>
                  </li>
                  <li class="list-inline-item">
                      <router-link to="/login" class="btn btn-outline-light">注册</router-link>
                  </li>
              </ul>
              <ul v-else class="list-inline mb-0">
                  <drop-down  :title="`你好 ${user.name}`">
                      <drop-down-itm><a class="dropdown-item" href="#">新建文章</a></drop-down-itm>
                      <drop-down-itm  disabled><a class="dropdown-item" href="#">编辑资料</a></drop-down-itm>
                      <drop-down-itm><a class="dropdown-item" href="#">退出登录</a></drop-down-itm>
                  </drop-down>
              </ul>
          </div>
      </nav>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import DropDown from "./DropDown.vue";
import DropDownItm from "./DropDownItem.vue";

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  setup() {},
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
  components: {
    DropDown,
    DropDownItm,
  },
});
</script>
