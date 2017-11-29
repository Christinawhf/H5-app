<template>
  <div id="publish">
    <div>
                    <textarea placeholder="为了世界和平，我要爆个料" style="width:85%; border:solid 1px #d8d8d8; border-radius:3px; font-size:14px; padding:10px;" rows="3" maxlength="50" @input="descInput"
                              v-model="desc"></textarea>
      <p class="pay-service-textarea-text"><span>{{remnant}}</span>/50</p>

    </div>
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
      remind:false,
      remnant: 0,
      desc:""
    }
  },
  methods:{
    descInput(){
      var txtVal = this.desc.length;
      this.remnant =txtVal;
    },
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
  .pay-service-textarea-text{
    position:absolute;
    margin-top: -1.88rem;
    margin-left: 1.5rem;
  }
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
