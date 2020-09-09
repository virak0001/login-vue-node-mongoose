<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand ml-5" href="" >LetsGo</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <p class="mr-auto"></p>
      <ul class="navbar-nav" style="margin-right:100px">
        <li class="nav-item">
          <a class="nav-link" href="#">
            Explore
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Your event
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Manage</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Event</a>
            <a class="dropdown-item" href="#">Category</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Profile</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item"  href="/profile">Profile</a>
            <a class="dropdown-item" @click.prevent="logoutUser">Logout</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapActions }  from 'vuex';
export default {
  actions:{
    ...mapActions(['logout'])
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    }
  }
}
</script>