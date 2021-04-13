import {createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
    state: {
        user: {
            data: null,
            email: '',
            password: '',
            authorization:false
        },
        iTakSoidet: {
            loadingFlag:false
        }
    },
    mutations: {
        SET_USER(state,data) {
            state.user.data = data
        },
        SET_EMAIL(state, value) {
            state.user.email = value
        },
        SET_authorization(state,value){
            if (!value) state.iTakSoidet.loadingFlag = false
            state.user.authorization = value
        },
        SET_loadingFlag(state,value){
            state.iTakSoidet.loadingFlag = value
        }
    },
    getters: {
        getEmail(state) {
            return state.user.email
        }
    },
    actions: {},
    plugins: [createPersistedState()]

})
