<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<script>

const defaultLayout = 'default'
export default {
  name: 'App',
  computed:{
    layout(){
      return (this.$route.meta.layout || defaultLayout ) + '-layout'
    }
  }
}
</script>

<style lang="scss">
*,*::before, *::after{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
a{
  color: inherit;
  text-decoration:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{
  min-height: 400px;
}
.sticky{
  position: fixed;
  top: 0;
  width: 100%;
}
.sticky + .main{
  margin-top: 100px;
}
</style>
