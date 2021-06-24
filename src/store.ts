import { createStore } from 'vuex'
import { testDatas, testPosts,ColumnProps,PostProps} from '@/testData'
// 接口定义
interface UserProps{
  isLogin: boolean;
  name?:string;
  id?: number
}
export interface GlobalDataProps{
  columns: ColumnProps[],
  posts: PostProps[],
  user: UserProps
}

const store = createStore<GlobalDataProps>({
  state: {
    columns: testDatas,
    posts: testPosts,
    user: {isLogin: false}
  },
  mutations: {
    login(state){
      state.user = {...state.user, name: 'Daisy', isLogin: true}
    }
  },
  getters:{
    biggerColumnsLen(state) {
      return state.columns.filter(c => c.id>2).length
    }
  }
})
export default store
