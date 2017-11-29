<template>
  <div id="share">
      <vue-baberrage :isShow="barrageIsShow" :barrageList="barrageList" :loop="barrageLoop">
      </vue-baberrage>

      <input type="text" placeholder="请输入" class="inputtext" v-model="msg">

      <div class="btn-wrap" @click="addToList()">
        <img src="../../assets/logo.png">
        <div>发弹幕</div>
      </div>
    <!--<div class="news">-->
      <!--<mt-switch v-model="value"></mt-switch>-->
      <!--<input  v-model="fakernews" type="text" placeholder="为TA打CALL！！(请输入文本)"/>-->
    <!--</div>-->
    <mt-button @click="go('mainStart',$event)">
      我也要爆料
      <img src="../../assets/logo.png" height="20px" width="20px">
    </mt-button>
    <mt-cell title="汉得广电总局">
      <img slot="icon" src="../../assets/logo.png" width="24" height="24">
    </mt-cell>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  import vueBaberrage from  "../main/vue-barrage.vue"
export default {
  name: 'share',
  components:{
    vueBaberrage
  },
  data () {
    return {
      msg: '',
      barrageIsShow: true,
      currentId: 0,
      barrageLoop: false,
      barrageList: []
    }
  },
  computed: {
    //      ...mapState({
    //        test: state => state.filter.test
    //      })
    ...mapState([
      'isIos'
    ])
  },
  methods:{
    go(index, $event){
      if (index === 'mainStart') {
        this.$router.push('/');
      }
    },
    ...mapMutations('filter', [
      'testAdd'
    ]),
    addToList () {
      this.barrageList.push({
        id: ++this.currentId,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2XkPZ52DF_kyoxU5rD5x8S6MmsPtcEDBfeoBjw5wSIX4lCLh',
        msg: this.msg,
        barrageStyle: 'normal',
        time: 4,
        type: 0,
        position: 'top'
      })
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-button--normal {
    display: inline-block;
    padding: 0 12px;
    color: #656b79;
  }
  .mint-button--default {
    background-color: #656b79;
    /*box-shadow: 0 0 1px #656b79;*/
  }
  .mint-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 50px;
    border: 0;
    box-sizing: border-box;
    color: #fff;
    font-size: 18px;
    height: 41px;
    width: 90%;
    margin-top: 130%;
    position: relative;
  }
  .btn-wrap {
    position: absolute;
    bottom: 30%;
    left: 50%;
    z-index: 2;
    transform: translateX(-50%);
    width: 160px;
    height: 40px;
    background: #1F8CEB;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-wrap img {
    display: block;
    width: 16px;
    height: 16px;
  }

  .btn-wrap div {
    font-size: 16px;
    color: #FFFFFF;
    line-height: 16px;
    margin-left: 10px;
  }
  .inputtext{
    margin-top: 70%;
    position: absolute;
    border: 1px solid #ddd;
    height: 40px;
  }
</style>
