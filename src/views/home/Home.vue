<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">商城</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import {getHomeMulData} from "network/home";


  export default {
      name: "Home",
      components: {
          NavBar,
          HomeSwiper
      },
      data() {
          return{
              banners: []
          }
      },
      //组件home生命周期创建完后调用created
      created() {
          this.getHomeMulData()
      },
      methods: {
          getHomeMulData(){
              getHomeMulData().then(res =>{
                  this.banners = res.data.banner.list
              })
          }
      }


  }
</script>


<style scoped>
  .home-nav {
    background-color: var(--color-tint);
  }

</style>
