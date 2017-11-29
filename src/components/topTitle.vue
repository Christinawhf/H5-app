<template>
  <div id="topTitle">
    <mt-header fixed class="border-1px-top" title="别拦我，我要爆个料">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right" @click="share"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'topTitle',
  data () {
    return {
    }
  },
  methods:{
    share:function () {
      alert(window.navigator.userAgent.toLowerCase());
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-header.is-fixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;}
  .mint-header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #000;
    box-sizing: border-box;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    height: 40px;
    line-height: 1;
    position: relative;
    text-align: center;
    white-space: nowrap;
  }
</style>
