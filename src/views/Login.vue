<template>
  <div class="ExploreEventList">
    <UserLogin :users="form" @save:user="saveUser" buttonText="Save User" :formTitle=title />
  </div>
</template>
<script>

import { mapActions } from "vuex";
import UserLogin from "@/components/UserLogin.vue";
export default {
  name: "Login",
  components: {
      UserLogin
  },
  data() {
    return {
    title:"Login",
      form: {},
      errors:{}
    };
  },
  methods:{
    ...mapActions(["login"]),
       saveUser(){
          this.login(this.form)
           .then(res => {
              if (res.data.success) {
                this.$router.push("/profile");
              }
            })
            .catch(error => {
              console.log(error)
              // console.log(error.response.data.msg)
            });
        },
  },
}
</script>