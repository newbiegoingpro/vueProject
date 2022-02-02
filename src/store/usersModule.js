import axios from "axios";

export default {
    state: {
        users: [],
        user: {}
    },
    mutations: {
        setUsers(state, payload) { 
            state.users = payload; //мутирую стейт при получении данных от апи
        },
    },
    getters: {
        getAllUsers(state) {
            return state.users;
        },

    },
    actions: {
        fetchUsers(context) {
            axios
                .get("https://jsonplaceholder.typicode.com/users") //запрос к апи за пользователями
                .then(res => context.commit("setUsers", res.data)) //payload = res.data
                .catch(err => console.log(err))
        },
    
    }
}