<template>
   <div>
    
     <home></home>
   </div>

</template>

<script>
// 彈窗
// import { MessageBox } from 'mint-ui';

// import Hello from './components/Hello'
//导出子组件
  import home from './components/home/home.vue'
export default {
  data(){
       return {}
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
  }
}
</script>


