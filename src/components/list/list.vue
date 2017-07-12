<template>
  <div class="site">
    <!-- 1、 搜索框-->
    <mt-search cancel-text="取消" placeholder="搜索">

    </mt-search>
    <!--电影标题-->
    <h2 class="title">{{moiveTitle}}</h2>
    <!--电影列表-->
    <ul>
      <li v-for='item in list' class="l_li l_link">
          <div class="l_left">
           <router-link to='' class='img_link'>
             <img :src="item.images.small" alt="">
           </router-link>
          </div>
          <div class="l_right">
            <router-link to='' >
               <span class="childTitle">{{item.title}}</span>
            </router-link>
            <br>
                 <span v-for="(role,index) in item.casts" class="role">
                 {{role.name}} <i v-if="(item.casts.length-1)==index?false:true">/</i>
               </span>
            <br>
            <!--星星-->
            <ul class="star">
                    <span v-for="(itemClass,index) in itemClasses(item.rating.stars/10)" :class="itemClass" class="star-item" track-by="index"></span><!--性能优化 track-by 数据不改变时不会重新渲染-->
                    <span class="score">{{item.rating.average}}</span>
            </ul>

          </div>
      </li>
    </ul>
  </div>
</template>

<script>
   import common from '../../tools/common';
    export default {
        data() {
             return {
                 list:[],
                 moiveTitle:'',
//                 score: 4,
                average:0
             }
        },
      created(){
//        进入页面调用
        this.getMovieList();
      },
     methods: {
            //获取电影列表
         getMovieList(){
            const  url=common.apihost+'in_theaters';
           console.log(url);
           //2.发送请求
           this.$http.jsonp(url).then(function(res){
                console.log(res.body.subjects);
                 this.moiveTitle=res.body.title;
                 this.list=res.body.subjects
         },function (err) {

           })
         },
//       计算星星数量
       itemClasses(score){
         let result = [];
//      let score = Math.floor(this.score * 2 ) / 2;
         let score1 = Math.floor(score * 2 ) / 2;
         let hasDecimal = score1 % 1 !== 0;
         let integer = Math.floor(score1);
         for(let i=0;i<integer;i++){
           result.push("on");
         }
         if(hasDecimal){
           result.push("half");
         }
         while(result.length < 5){
           result.push("off");
         }
         return result;
       }
 }
    }
</script>

<style>
  .title{
    color: #333333;
    margin: 10px 0px 10px 10px;
    font-size: 20px;
  }
  .site{
    margin-top: 40px;
    margin-bottom: 60px;
  }
.l_li{
  width: 100%;
  height: 80px;
  border-top: 1px dashed #CCCCCC;
  box-sizing: border-box;
}
.l_link{
  display: flex;
  flex-direction: row;
}
  .l_left{
   flex: 1;
    display: flex;
    align-items: center;
  }
.l_right{
  flex: 3;
  padding-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #CCCCCC;

}
.img_link{
  width: 60px;
  height: 60px;
  display: inline-block;
  margin-left: 10px;
}
  .img_link img{
    width: 100%;
    height: 100%;
  }

.mint-searchbar{
  position: fixed;
  left: 0;
  top:0;
  width: 100%;
}
  .childTitle{
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 5px;
    color: #333333;
    display: inline-block;
  }
  /*人员名称*/
  /*超出部分省略*/

  .role{
    font-size: 14px;
    margin-bottom: 10px;
  }

  /*星星*/
  .star{
    font-size: 0;
  }
  .star-item{
    display: inline-block;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    background-size: 100%;
  }
  .star-item.on{
    background-image: url(../../assets/images/list/on.png);
  }
  .star-item.half{
    background-image: url(../../assets/images/list/half.png);
  }
  .star-item.off{
    background-image: url(../../assets/images/list/off.png);
  }
  /*评分*/
  .score{
    color: #EDB248;
    font-size: 16px;
    position: absolute;
    margin-left: 5px;
  }
</style>
