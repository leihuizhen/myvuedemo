<template>
  <div>
    <!-- 2、联系人-->
    <!--  <mt-index-list >
      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Z" v-on:click="add">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list> -->

    <!--<mt-search cancel-text="取消" placeholder="搜索" class='home_search'></mt-search>-->
    <!-- 轮播图 -->
    <mt-swipe :auto="6000">
      <mt-swipe-item>
        <img src="../../assets/images/home/s1.jpg" height="100%" width="100%"></img>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/images/home/s2.jpg" height="100%" width="100%"></img>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/images/home/s3.jpg" height="100%" width="100%"></img>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宮格 -->
    <ul class="flex-container">
      <li class="flex-item">
        <a href="#">
          <img src="../../assets/images/home/qj@2x.png" height="25" width="25">
        </a>
        <p>請假</p>
      </li>
      <li class="flex-item">
        <a href="#">
          <img src="../../assets/images/home/kc@2x.png" height="25" width="25">
        </a>

        <p>我的課程</p>
      </li>
      <li class="flex-item">
        <a href="#">
          <img src="../../assets/images/home/pj@2x.png" height="25" width="25">
        </a>
        <p>課程評價</p>
      </li>
      <li class="flex-item">
        <a href="#">
          <img src="../../assets/images/home/gt@2x.png" height="25" width="25">
        </a>
        <p>家教溝通</p>
      </li>
    </ul>
    <!-- 線 -->
    <div class="line">

    </div>
    <!-- 學習軌跡與精彩時刻 -->
    <ul class="flex-container">
      <li class="flex-item studyItem">
        <a href="#" style=" border-right: 1px solid #dddddd;">
         <span>
           <p class="styleTitle">學習軌跡</p>
           <p class="styleText">時刻了解孩子動態</p>
         </span>
         <span>
           <img src="../../assets/images/home/sty.png" height="50" width="50" alt="">
         </span>
        </a>
      </li>
      <li class="flex-item studyItem ">
        <a href="#">
         <span>
           <p class="styleTitle">學習軌跡</p>
           <p class="styleText">時刻了解孩子動態</p>
         </span>
         <span>
           <img src="../../assets/images/home/jc.png" height="50" width="50" alt="">
         </span>
        </a>
      </li>
    </ul>
    <div class="line">

    </div>
  </div>
</template>

<script>
    export default {
        data() {
             return {}
        },
        methods: {}
    }
</script>
<style>
  a{
    text-decoration: none;
    color: #C9C9C9
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center;*/
    color: #2c3e50;
    /* margin-top: 60px;*/
  }
  .mint-search{
    height: 100%
  }
  .mint-cell{
    text-align: left;
  }
  .mint-indexsection-index{
    text-align: left;
  }
  .mint-indexlist-nav{
    border-left: 0;
  }
  .mint-searchbar{
    height: 40px;
    padding:5px 10px;

  }
  .mint-searchbar-inner{
    padding:0px;

  }

  /*輪播*/
  body{
    margin: 0;
  }
  .mint-swipe{
    height: 200px
  }
  .mint-swipe-items-wrap > div:nth-child(1){
    background-color:pink;
  }
  .mint-swipe-items-wrap > div:nth-child(2){
    background-color:red;
  }
  .mint-swipe-items-wrap > div:nth-child(3){
    background-color:blue;
  }
  .mint-swipe-indicator{
    background:#666666;
    opacity: 1;
  }
  .mint-swipe-indicator.is-active{
    background-color: red;
  }
  /*九宮格*/
  *{
    padding: 0;
    margin: 0;
  }
  .flex-container{
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .flex-item{
    flex: 1;
    /* border: 1px solid red;*/
    text-align: center;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .flex-item>a{
    margin-bottom: 5px;
  }
  .flex-item>p{
    font-size: 12px;
    color: #737373;
    font-family: "微軟雅黑"
  }
  .line{
    width: 100%;
    height: 10px;
    background-color: #F7F7F7;
  }
  /*精彩時刻*/
  .studyItem{

    /*border:1px solid red;*/

  }
  .studyItem>a{
    width: 100%;
    flex-direction: row;
    display: flex;
    margin-top:10px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
  }
  .styleTitle{
    font-weight: 700;
    font-size: 14px;
    color: #727272;
  }
  .styleText{
    font-size: 12px;
  }
</style>
