<template>
  <v-app>
    <v-navigation-drawer app>
      
    </v-navigation-drawer>

    <v-app-bar app>
      <tool-bar />
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  name: 'app',
  components: {
    ToolBar
  }
}
</script>