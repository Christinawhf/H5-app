<template>
  <div id="mainMaking">
    <mt-popup
      v-model="popupV">
    内容上传
    </mt-popup>
    <!--<div class="page-input">-->
      <!--<input type="text" name="name" v-model="contents"  class="page1-name-input J_name_input" placeholder="我要爆料的是......">-->
      <input v-model="contents"  placeholder="我要爆料的是......" class="J_name_input content-input" @change="checklength">

    <!--</div>-->
    <p class="page1-txt">
      为了世界的和平！宇宙的正义！让我<br>
      们大声说出来（20字以内）
    </p>
    <div class="page-input page-input1" style='overflow:hidden;z-index: 4'>
      <input type="file" name="name" class="page1-name-input page-file J_file" accept="image/*" @change="upload">
      <!--<input  name="name" class="page1-name-input page-file J_file" @click="uploads">-->
      <img src="../../assets/logo.png" style="height: 20px;width: 20px;position: absolute;
    margin-top: 7%;
    margin-left: 19%;">
      <p class="file-txt">上传照片</p>
    </div>
    <div class="popup">
      <mt-popup
        v-model="popupVisible"
        position="bottom">
        <mt-button type="default">拍照</mt-button>
        <mt-button type="default">从相册中选取</mt-button>
        <mt-button type="default">取消</mt-button>
      </mt-popup>
    </div>
    <p class="page1-txt">
      有图有真相！可上传可拍照！必传哦~
    </p>
    <mt-button @click="publish">
      一键发布
      <img src="../../assets/logo.png" height="20" width="20">
    </mt-button>
    <mt-cell title="汉得广电总局">
      <img slot="icon" src="../../assets/logo.png" width="24" height="24">
    </mt-cell>
  </div>
</template>

<script>
export default {
  name: 'mainMaking',
  components: {},
  data() {
    return {
      contents: "",
      files: [],
      type: "",
      popupVisible: false,
      popupV: false
    }

  },
  methods: {
    checklength: function () {
      if (this.contents.length > 20) {
        alert("最多输入20个字哦");
      }
    },
    uploads:function () {
      this.popupVisible=true;
    },
    upload(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
      alert(files.length);
      $('.file-txt').text('上传成功');
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    publish: function () {
      this.popupV = true;
      var that = this;
      setTimeout(function () {
        this.popupV = false;
        that.$router.push('/publish');
      }, 3000)
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
  .popcontent{
    position: absolute;
    bottom: 0px;
  }
  .content-input{
    position: relative;
    width: 10.48rem;
    height: 2.62rem;
    line-height: .62rem;
    border: 1px solid #87e1b5;
    border-radius: .5rem;
    margin: 2.8rem auto .22rem;
    text-align: center;
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
  .page-input {
    position: relative;
    width: 10.48rem;
    height: 2.62rem;
    line-height: .62rem;
    border: 1px solid #87e1b5;
    border-radius: .5rem;
    margin: 2.8rem auto .22rem;
  }
  .page1-name-input {
    display: block;
    border: none;
    outline: none;
    background: transparent;
    width: 9.95rem;
    height: 2.62rem;
    line-height: .62rem;
    font-size: .28rem;
    color: #fff;
    text-align: center;
    margin-left: .25rem;
  }
  .page-file {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 3;
  }
  .page1-txt {
    font-size: .22rem;
    color: #aeaeae;
    line-height: 1.5em;
    text-align: center;
  }
</style>
