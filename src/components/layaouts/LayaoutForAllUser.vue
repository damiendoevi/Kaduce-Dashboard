<template>
  <header-without-auth />
  <div><slot /></div>
  <AllUserFooter />
</template>
<script>
import AllUserFooter from '../../components/footer/FooterForAll.vue'
import HeaderWithoutAuth from '../header/HeaderWithoutAuth.vue'

export default {
  props: {},
  components: {
    AllUserFooter,
    HeaderWithoutAuth
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
