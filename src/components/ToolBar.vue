<template>
    <v-toolbar flat tile>
      <v-toolbar-title>
        <v-btn flat depressed to='/'>cherese eriepa</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat active-class="active" depressed to='/home'>home</v-btn>
        <v-btn flat active-class="active" depressed to='/about'>about</v-btn>
        <v-btn flat active-class="active" depressed to='/portfolio'>Portfolio</v-btn>
        <v-btn flat active-class="active" depressed to='/blog'>blog</v-btn>
        <v-btn flat active-class="active" depressed to='/contact'>contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>
<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>