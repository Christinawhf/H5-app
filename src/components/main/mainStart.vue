<template>
  <div id="mainStart">
    <div style="width: 95%;height: 400px;">
      <vue-baberrage :isShow="barrageIsShow" :barrageList="barrageList" :loop="barrageLoop">
      </vue-baberrage>
    </div>
    <mt-button @click="go('making',$event)">
      爆料
      <img src="../../assets/logo.png" height="20" width="20">
    </mt-button>
    <mt-cell title="汉得广电总局">
      <img slot="icon" src="../../assets/logo.png" width="24" height="24">
    </mt-cell>
  </div>
</template>

<script>
  import vueBaberrage from  "../main/vue-barrage.vue"
export default {
  components: {
    vueBaberrage
    },
  name: 'mainStart',
  data () {
    return {
      barrageIsShow: true,
      barrageLoop: false,
      barrageList: []
    }
  },
  methods:{
    go(index, $event){
      if (index === 'making') {
        this.$router.push('/mainMaking');
      }
    }
  }
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
  }
</style>
