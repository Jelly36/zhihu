import { createStore, Commit } from 'vuex'
import axios from 'axios'

// 接口定义
interface UserProps {
    isLogin: boolean;
    name?: string;
    id?: number;
    columnId?: number
}

interface ImageProps {
    _id?: string,
    url?: string,
    createdAt?: string
}

export interface ColumnProps {
    _id: string;
    title: string;
    avatar?: ImageProps;
    description: string;
}

export interface PostProps {
    _id: number;
    title: string;
    excerpt?: string;
    content?: string;
    image?: ImageProps;
    createdAt: string;
    column: string
}

export interface GlobalErrorProps{
    status: boolean;
    message?: string
}
export interface GlobalDataProps {
    error: GlobalErrorProps,
    loading: boolean,
    columns: ColumnProps[],
    posts: PostProps[],
    user: UserProps
}

const getCommit = async (url: string, muatationName: string, commit: Commit) => {
    const { data } = await axios.get(url)
    commit(muatationName, data)
}
const postCommit = async (url: string, muatationName: string, commit: Commit, payLoad: any) => {
    const { data } = await axios.post(url,payLoad)
    commit(muatationName, data)
    return data
}
const store = createStore<GlobalDataProps>({
    state: {
        error: {
            status: false
        },
        loading: false,
        columns: [],
        posts: [],
        user: {
            isLogin: false,
            columnId: 8
        }
    },
    mutations: {
        login (state) {
            state.user = {
                ...state.user,
                name: 'Daisy'
            }
        },
        createPost (state, newPost) {
            state.posts.push(newPost)
        },
        fetchColumns (state, rawData) {
            state.columns = rawData.data.list
        },
        fetchColumnDetail (state, rawData) {
            state.columns = [rawData.data]
        },
        fetchPosts (state, rawData) {
            state.posts = rawData.data.list
        },
        setLoading (state, status) {
            state.loading = status
        },
        setError(state,e: GlobalErrorProps) {
            state.error = e
        }
    },
    getters: {
        getColumnId: (state) => (id: string) => {
            return state.columns[id]
        },
        getPostsById: (state) => (cid: string) => {
            return state.posts.filter(post => post.column === cid)
        }
    },
    actions: {
        fetchColumns ({ commit }) {
            getCommit('/columns', 'fetchColumns', commit)
        },
        fetchColumnDetail ({ commit }, cid) {
            getCommit(`/columns/${cid}`, 'fetchColumnDetail', commit)

        },
        fetchPosts ({ commit }, cid) {
            getCommit(`/columns/${cid}/posts`, 'fetchPosts', commit)

        },
        login({commit}, payload) {
            return postCommit('/user/login', 'login',commit, payload)
        }
    }
})
export default store
