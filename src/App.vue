<template>
   <div id='app'>
    <!---->
     <home></home>
     <!--底部选项卡-->
     <mt-tabbar v-model="selected">
       <mt-tab-item id="tab1">
         <img slot="icon" src="./assets/logo.png">
         tab1
       </mt-tab-item>
       <mt-tab-item id="tab2">
         <img slot="icon" src="./assets/logo.png">
         tab2
       </mt-tab-item>
       <mt-tab-item id="tab3">
         <img slot="icon" src="./assets/logo.png">
         tab3
       </mt-tab-item>
       <mt-tab-item id="tab4">
         <img slot="icon" src="./assets/logo.png">
         tab4
       </mt-tab-item>
     </mt-tabbar>

   </div>

</template>

<script>
// 彈窗
// import { MessageBox } from 'mint-ui';

// import Hello from './components/Hello'
//导出子组件
  import home from './components/home/home.vue';


export default {
  data(){
       return {
          selected: 'tab1'
       }
  },
  methods:{
    // add:function () {
    //   alert(1);
    //   MessageBox({
    //    title: '提示',
    //    message: '确定执行此操作?',
    //    showCancelButton: true
    //  });
    // }

  },
  components:{
    home:home
  },
  watch: {
    selected: function (val, oldVal) {
      // 这里就可以通过 val 的值变更来确定
      console.log(val)
    }
  }
}
</script>


