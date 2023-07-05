<template>
    <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <div class="logo">
                <router-link class="navbar-brand" to="/">JD.P</router-link>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
      </button>
              <div class="nav-sty collapse navbar-collapse" id="navbarSupportedContent">
                <div class="nav-link w-100">
                <ul class="nav justify-content-end ms-auto">
                    <li class="nav-item">
                      <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/">Resume</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/">Education</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/">Projects</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/">Testmonials</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/contact">Contact</router-link>
                    </li>
                    
                  </ul>
              </div>
              </div>
            </div>
          </nav>
    
    
    
    
    
    <!-- <nav class="topnav">
        <router-link class="active link" to="/">Home</router-link>
        <router-link class="link" to="/products">Products</router-link>
        <router-link class="link" to="/about">About</router-link>
        <router-link class="link" to="/admin">Admin</router-link>
    </nav> -->
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navbar {
    background-color: #a480f2;
    overflow: hidden;
}

.nav-link {
    color: #333;
    padding: 0px 18px 5px;
    text-decoration: none;
    font-size: 15px;
}

.nav-item:hover {
    background-color: #220135;
    font-size: 20px;
    border-radius: 18px;
}

.nav-link:hover{
  color: #dec9e9;
}

</style>