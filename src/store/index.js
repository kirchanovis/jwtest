import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.headers.common['X-CSRFToken'] = 'A10cx2I9EuFGdgI7ROfZCACOCQM1q5zA'
axios.defaults.headers.common['Host'] = 'my-lib.ru'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['Cookie'] = 'csrftoken=A10cx2I9EuFGdgI7ROfZCACOCQM1q5zA; _ym_uid=1535820460577486777; _ym_d=1535820460; _ym_isad=1'

const END_POINT = `http://my-lib.ru/api/userbooks/`

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        books: {}
    },
    getters: {
        books(state) {
            return state.books
        },
        results(state) {
          return state.users.map( (user) => {
              let userNew = []
              userNew.name = user.name
              userNew.lastName = user.lastName
              userNew.middleName = user.middleName
              userNew.position = user.position
              userNew.deportament = user.deportament
              userNew.birthday = user.birthday
              userNew.password = user.password
              userNew.phone = user.phone
              userNew.email = user.email
              return userNew
          })
        },
    },
    mutations: {
        SET(state,{type, items}) {
            state[type] = items
        }
    },
    actions: {
        getBooks({commit}, settings) {
            let urlParameters = Object.entries(settings).map(e => e.join('=')).join('&')
            console.log(urlParameters);
            axios.get(`${END_POINT}?user=1&${urlParameters}`)
              .then( response => {
                const books = response.data;
                commit('SET', {type : 'books', items: books})
              }).catch(error => {
                  error
              })
        }
    }
})

export default store