<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <!-- <column-list :list="list"></column-list> -->
    <form class="was-validated">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input :rules="emailRules"></validate-input>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import validateInput, { RulesProp } from "./components/ValidateInput.vue"
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
const userInfo: UserProps = {
  isLogin: true,
  name: "Daisy",
};
const emailReg =
  /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    description: "这里是test1的专栏，有一段非常有意思的简介，可以更新一下喔",
    avatar:
      "https://user-center.cdn.bcebos.com/head/raw/uc.101.1b1d2eda.zn5K9zt_t5fghr6kh8ZHuw?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=16",
  },
  {
    id: 2,
    title: "test2的专栏",
    description: "这里是test2的专栏，有一段非常有意思的简介，可以更新一下喔",
    avatar:
      "https://user-center.cdn.bcebos.com/head/raw/uc.101.1b1d2eda.zn5K9zt_t5fghr6kh8ZHuw?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=16",
  },
  {
    id: 3,
    title: "test3的专栏",
    description: "这里是test3的专栏，有一段非常有意思的简介，可以更新一下喔",
    // avatar: 'https://user-center.cdn.bcebos.com/head/raw/uc.101.1b1d2eda.zn5K9zt_t5fghr6kh8ZHuw?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=16'
  },
];
export default defineComponent({
  name: "App",
  setup() {
    let emailRules: RulesProp = [
      { type: 'required', message: '电子邮件格式不能为空'},
      { type: 'email', message: '请输入正确的电子邮箱格式'}
    ]
    const emailRef = reactive({
      val: "",
      error: false,
      message: "",
    });
    const validateEmail = () => {
      if (emailRef.val.trim() === "") {
        emailRef.error = true;
        emailRef.message = "can not be empty";
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true;
        emailRef.message = "should be vaild message";
      }
    };
    return {
      list: testData,
      currentUser: userInfo,
      emailRef,
      validateEmail,
      emailRules
    };
  },
  components: { ColumnList, GlobalHeader,validateInput },
});
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
