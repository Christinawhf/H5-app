<template>
  <div id="publish">
    <mt-popup
      v-model="remind">
      分享到朋友圈
    </mt-popup>
    <p>#{{topic}}#</p>
    <mt-button @click="reminding">
      快去曝光
      <img src="../../assets/logo.png" height="20" width="20">
    </mt-button>
  </div>
</template>

<script>
export default {
  name: 'publish',
  data () {
    return {
      topic:'话题在这儿',
      remind:false
    }
  },
  methods:{
    reminding:function () {
      this.remind=true;
      var that=this;
      setTimeout(function(){
        this.remind=false;
        that.$router.push('/share');
      },1000)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-popup {
    color: #fff;
    background-color: transparent;
  }
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
