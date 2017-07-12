<template>
   <div>
     <router-view></router-view>
     <!--底部选项卡-->
     <mt-tabbar v-model="selected">
         <mt-tab-item id="tab1" class='icon-home'>
           <router-link  class="box" to="./home">
            首页
           </router-link>
         </mt-tab-item>
         <mt-tab-item id="tab2" class='icon-list2'>
           <router-link  class="box" to="./list">
           列表
           </router-link>
         </mt-tab-item>
          <mt-tab-item id="tab3"  class='icon-shopping_cart'>
            <router-link  class="box" to="./cart">
            购物车
            </router-link>
          </mt-tab-item>
        <mt-tab-item id="tab4" class='icon-bin'>
          <router-link class="box"   to="./setting">
          设置
          </router-link>
        </mt-tab-item>
     </mt-tabbar>

   </div>

</template>
<style scoped>
.box{
  width: 25%;
}
.mint-tabbar > .mint-tab-item.is-selected a{
  color: #26a2ff;
}
</style>

<script>
// 彈窗
// import { MessageBox } from 'mint-ui';

// import Hello from './components/Hello';


export default {
  data(){
       return {
          selected: 'tab1'
       }
  },
  methods:{

  },
  watch: {
    selected: function (val, oldVal) {
      // 这里就可以通过 val 的值变更来确定
//      console.log(val)
    }
  }
}
</script>


