import { createLogger, createStore } from 'vuex'
// import { auth } from './modules/auth'
// import { register } from './modules/register'
// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

const debug = 'sandbox'

export default createStore({
  modules: {
    // auth,
    // register
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
