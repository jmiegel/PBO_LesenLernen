<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!--<HelloWorld />-->
    <BlogPost />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import BlogPost from "../components/Blogpost.vue";

export default {
  name: "Home",
  components: {
    //HelloWorld,
    BlogPost
  }
};
</script>
