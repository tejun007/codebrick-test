<template>
  <v-app id="app">
    <v-toolbar app>
      <v-toolbar-title>
        Codebrick test page
      </v-toolbar-title>
    </v-toolbar>
    <v-container fluid grid-list-md text-xs-center>
      <v-layout row wrap>

        <v-flex class="side-menu" d-flex md2>
          <v-list>
            <v-img class="logo-img"
                   src="https://codebrick-test.s3.ap-northeast-2.amazonaws.com/image/codebrick-logo.png"
                   @click="$router.push('inventory')"
            ></v-img>

            <v-list-tile @click="$router.push(menu.path)"
                         v-bind:key="menu.title"
                         v-for="menu in sideMenus">
              <v-list-tile-title>
                {{ menu.title }}
              </v-list-tile-title>
            </v-list-tile>

          </v-list>
        </v-flex>

        <v-flex class="side-menu-content" d-flex md10>
          <router-view></router-view>
        </v-flex>

      </v-layout>
    </v-container>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
      sideMenus: [
        {title: 'Inventory', path: '/inventory'},
        {title: 'Commission', path: '/commission'},
        {title: 'Manage Market', path: '/manage-market'},
        {title: 'Manage Customer', path: '/manage-customer'},
        {title: 'Report Setting', path: '/report-setting'},
        {title: 'Sign Out', path: '/sign-out'}
      ]
    }
  },

  mounted () {
    this.$router.push('inventory')
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .side-menu {
    width: 100%;
    max-width: 300px;
  }

  .side-menu .logo-img {
    max-width: 200px;
  }

  .side-menu-content {
    width: 100%;
  }

</style>
