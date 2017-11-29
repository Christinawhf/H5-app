<template>
  <div id="app">
    <toptitle></toptitle>
    <div class="content-div">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import topTitle from './components/topTitle.vue'
  import MainStart from './components/main/mainStart.vue'


export default {
  name: 'app',
  components: {
    'toptitle': topTitle
  },
  methods:{
    //判断是否微信登陆
    isWeiXin() {
      let ua = window.navigator.userAgent.toLowerCase();
      console.log(ua);//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
      } else {
        return false;
      }
    },
    //微信分享使用方法
    wxInit(sd){
      let links='http://www.kspxzx.com/index/index/wxshare_choiceOk/identity/Student/courseID/'+this.courseID+'/appointment_code/'+this.appointment_code;   //分享出去的链接
      let title='学车训练课程分享';   //分享的标题
      let desc=' 教练名字：'+this.codeName+' 所在驾校：'+this.drive+' 训练日期：'+this.date+' 训练项目：'+this.proje;  //分享的详情介绍
      wx.config({
        debug: false,
        appId: sd.appId,
        timestamp: sd.timestamp,
        nonceStr: sd.nonceStr,
        signature: sd.signature,
        jsApiList: [
          'onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo'
        ]
      });
      wx.ready(function () {
        // alert("done")
        // alert(title)
        wx.onMenuShareTimeline({
          title: title, // 分享标题
          link:links, // 分享链接'
          imgUrl: sd.cover, // 分享图标
          success: function () {
            // 分享纪录
            shareRecord();
            alert("分享到朋友圈成功")
          },
          cancel: function () {
            alert("分享失败,您取消了分享!")
          }
        });
        // wx.onMenuShareAppMessage({
        //     title: title, // 分享标题
        //     desc: description, // 分享描述
        //     link: link, // 分享链接
        //     imgUrl: cover, // 分享图标
        //     success: function () {
        //         alert("成功分享给朋友")
        //     },
        //     cancel: function () {
        //         alert("分享失败,您取消了分享!")
        //     }
        // });

        //微信分享菜单测试
        wx.onMenuShareAppMessage({
          title:title, // 分享标题
          desc: desc, // 分享描述
          link: links, // 分享链接
          imgUrl: sd.cover, // 分享图标
          success: function () {
            // 分享纪录
            shareRecord();
            alert("成功分享给朋友")
          },
          cancel: function () {
            alert("分享失败,您取消了分享!")
          }
        });

        wx.onMenuShareQQ({
          title:title, // 分享标题
          desc: desc, // 分享描述
          link:links, // 分享链接
          imgUrl: sd.cover, // 分享图标
          success: function () {
            // 分享纪录
            shareRecord();
            alert("成功分享给QQ")
          },
          cancel: function () {
            alert("分享失败,您取消了分享!")
          }
        });
        wx.onMenuShareWeibo({
          title:title, // 分享标题
          desc: desc, // 分享描述
          link: links, // 分享链接
          imgUrl: sd.cover, // 分享图标
          success: function () {
            // 分享纪录
            shareRecord();
            alert("成功分享给朋友")
          },
          cancel: function () {
            alert("分享失败,您取消了分享!")
          }
        });
      });
      wx.error(function(res){
        // alert("error")
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      });
    },

  },
  mounted(){// 微信分享   'http://www.kspxzx.com/'
    let old_this=this;
    if(this.isWeiXin()){
      var url = "/Index/index/wxShare";    //后台接口
      var data = {url:'http://www.kspxzx.com/'}     //当前网页链接，必须跟当前页面链接一样，单页面则以首页链接为准
      $.post(url,data,function(res){
        if(res.code == 0){
          // 调用微信分享
          old_this.wxInit(res.data);
        }
      });
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
