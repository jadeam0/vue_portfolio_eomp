<template>
  <NavBarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavBarComp from './components/navBar.vue'
import FooterComp from './components/footer.vue'

export default {
  components: {
    NavBarComp,
    FooterComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dec9e9;

  height: 714px;
  width: 100%;
  background: linear-gradient(45deg, #1f1c1d,#353334, #4c494a, #626061, #626061, #4c494a, #353334, #1f1c1d, 
  #1f1c1d,#353334, #4c494a, #626061, #626061, #4c494a, #353334, #1f1c1d,  #1f1c1d,#353334, #4c494a, #626061, #626061, #4c494a, #353334, #1f1c1d);
  background-size: 300% 300%;
  background-repeat: no-repeat;
  overflow-x: hidden;

  animation-name: color;
  animation-duration: 12s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes color {
  0%{
      background-position: 0 50%;
  }
  50%{
      background-position: 100% 50%;
  }
  100%{
      background-position: 0 50%;
  }
}

::-webkit-scrollbar{
  display: none;
}

</style>
