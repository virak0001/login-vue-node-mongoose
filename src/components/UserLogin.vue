<template>
  <v-form v-model="valid">
    <v-container>
      <v-col>
        <h1 class="text-center">{{formTitle}}</h1>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Email"
              v-model="users.email"
              :rules="[required('email'), emailFormat()]"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              label="Password"
              outlined
              type="text"
              v-model="users.password"
              :rules="[required('Password'),minLength('Password',5), maxLength('Password', 25)]"
              dense
            ></v-text-field>
          </v-col>
          <v-col cols-12>
            <v-alert type="error"  dismissible v-if="error">{{error}}</v-alert>
          </v-col>
        </v-row>
        <div class="my-2">
          <v-btn color="blue" @click="saveUser" :disabled="!valid">{{buttonText}}</v-btn>
        </div>
      </v-col>
    </v-container>
  </v-form>
</template>
<script>
import validations from "@/utils/validations";
import { mapGetters } from "vuex";
export default {
  name: "UserLogin",
  props: ["users", "buttonText", "formTitle"],
  methods: {
    saveUser() {
      this.$emit("save:user");
    }
  },
  data() {
    return {
      valid: false,
      ...validations,
      alert: true
    };
  },
  computed: mapGetters(["error"])
};
</script>