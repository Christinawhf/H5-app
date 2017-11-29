$(document).ready(function () {
  var link = window.location.href;
  var link2 = '';
  var img_url = '';
  var imgURI = '';
  var pic_url = '';
  var urlLink = '';
  var flag3 = true;
  var isShare = false;
  var uploadUserName = '';
  if(window.location.search == ''){
    link2 = link;
  }else {
    link2 = (window.location.href).split('?')[0];
    img_url = GetQueryString('key') ;
    $('.J_share_img').attr('src','https://ost-dev.cn-hangzhou.oss.aliyun-inc.com/' + img_url +'?x-oss-process=image/resize,m_lfit,h_500,w_400');
    if(img_url){
      isShare = true;
    }
  }

  function GetQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var r = decodeURI(window.location.search).substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
  var body = $('body')[0];

  var gNum = 'YX'+ parseInt(Math.floor(Math.random()*90000) + 10000);
  $('.page4-number').text(gNum);
  var name;
  var flag1 = false;
  var flag2 = false;
  var hasImage = false;
  var uploadUrl = 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcyRkFBQTUzOURDOTExRTdBQjJFOERCREYzRTE1QTE3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcyRkFBQTU0OURDOTExRTdBQjJFOERCREYzRTE1QTE3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzJGQUFBNTE5REM5MTFFN0FCMkU4REJERjNFMTVBMTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzJGQUFBNTI5REM5MTFFN0FCMkU4REJERjNFMTVBMTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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';
  //分享朋友圈图标
  var _wxReady = false;
  var _shareUrl = window.location.href.split('#')[0];
  var _defaultTitle = '今天我入职阿里了，这是我的办公Style！';
  var _defaultDesc = '想体验阿里巴巴的办公Style吗？快来生成属于你的阿里工牌吧';
  var _defaultImage = 'https://gw.alicdn.com/tfs/TB1MVMvcGagSKJjy0FgXXcRqFXa-300-300.jpg';
  getSign();
  $('.J_join1').on('click',function () {
    $('.yq-page0').addClass('page-left');
    setTimeout(function(){
      $('.yq-page0').hide();
    },800)
  });
  if (isShare == true) {
    $('.yq-page0').show();

  } else {
    //$('.yq-page0').remove();
    $('.yq-page0').hide();
  }
  $('.J_join2').on('click',function () {
    //$.fn.fullpage.moveTo(1,true);
    $('.tip-pop').show();
    uploadImg();
  });
  $('.J_join3').on('click',function () {
    $.fn.fullpage.moveTo(2,true);
    if(flag3 == true){
      flag3 = false;
      uploadOss();
    }
  });
  $('.J_name_input').on('change',function () {
    name = $('.J_name_input').val();
    if(!name){
      alert('请输入您要爆的料');
      flag1 = false;
    } else if(name.length > 20){
      alert('最多输入长度不能超过20个字喔');
      $('.J_name_input').val('');
      flag1 = false;
    }else if(name.match(/^[\u4e00-\u9fa5]+$/) == null) {
      alert('只能输入中文花名');
      flag1 = false;
      $('.J_name_input').val('');
    }else{
      flag1 = true;
      $('.page2-name').text(name);
      $('.page4-name').text(name);
    }
  });
  $('.J_file').on('change',function () {
    var file=this.files[0];
    if (!/image\/\w+/.test(file.type)) {
      alert("这个需要图片哟！");
      return false;
    }else{
      $('.file-txt').text('上传成功');
      var reader = new FileReader();
      reader.onload=function(){
        urlLink=reader.result;
        uploadUrl = urlLink;
        hasImage = true;
      };
      reader.readAsDataURL(file);
    }

  });
  $('.share-pop').on('click',function () {
    $('.share-pop').hide();
  });
  var fp = $('.wp-inner').fullpage({
    afterChange: function (e) {
      if(e.cur === 2 ){
        $.fn.fullpage.start();
        flag3 = true;

      }else if(e.cur < 1){
        $.fn.fullpage.stop();
      }
    }
  });
  $.fn.fullpage.stop();
  function uploadImg(){
    if (flag1 == true){
      name = $('.J_name_input').val();
    } else {
      name = '花名';
    }
    var image = new Image();
    var new_img = new Image();
    image.src = uploadUrl;
    // console.log(image.src);
    image.onload= function () {
      var orient = getPhotoOrientation(image);
      var canvas = document.getElementById("myCanvas");
      var context = canvas.getContext("2d");
      var imgwid = image.width;
      var imghei = image.height;
      context.beginPath();
      if(orient == 6 || orient == 8) {
        canvas.width = imghei;
        canvas.height = imgwid;
        var wid = canvas.width ;
        var hei = canvas.height;
        context.save();
        context.translate(wid / 2, hei / 2);//设置画布上的(0,0)位置，也就是旋转的中心点
        if(orient == 6){
          context.rotate(90 * Math.PI / 180);//把画布旋转90度
        }
        if(orient == 8){
          context.rotate(-90 * Math.PI / 180);//把画布旋转90度
        }
        context.drawImage(image,-hei / 2,-wid / 2,hei,wid);
        context.closePath();
        imgURI = canvas.toDataURL("image/jpeg", 1);
        new_img.src = imgURI;
        new_img.onload = function () {
          var can2 = document.getElementById("myCanvas2");
          var cxt = can2.getContext("2d");
          var wid2 = can2.width ;
          var hei2 = can2.height;
          var wMultiple = wid2 / wid;
          var hMultiple = hei2 / hei;
          var whMultiple = wid / hei;
          var sX =(wid - wid2/hMultiple)/2;
          var sY =(hei - hei2/hMultiple)/2;
          cxt.beginPath();
          if(whMultiple > 0.78947){
            cxt.drawImage(new_img,sX,0,wid2/hMultiple,hei2/hMultiple, 0, 0, wid2, hei2);
          }else {
            cxt.drawImage(new_img,0,sY,wid2/wMultiple,hei2/wMultiple, 0, 0, wid2, hei2);
          }
          if (name.length == 1) {
            cxt.fillStyle = '#dd732a';
            cxt.font = ' bolder 56px PingFang SC bold';
            cxt.fillText(name, wid2 * 0.805, hei2 * 0.09);
          } else if (name == '' || name.length == 2) {
            cxt.fillStyle = '#dd732a';
            cxt.font = ' bolder 56px PingFang SC';
            cxt.fillText(name, wid2 * 0.778, hei2 * 0.09);
          } else if (name.length == 3) {
            cxt.fillStyle = '#dd732a';
            cxt.font = ' bolder 56px PingFang SC bold';
            cxt.fillText(name, wid2 * 0.736, hei2 * 0.09);
          }
          if (gNum) {
            cxt.fillStyle = '#dd732a';
            cxt.font ='40px PingFang SC';
            cxt.fillText(gNum, wid2 * 0.736, hei2 * 0.15);
          }
          context.closePath();
          var img_URI = can2.toDataURL("image/jpeg", 1);
          $(".J_photo").attr('src', img_URI);
          pic_url = img_URI;
          //uploadOss();
          $.fn.fullpage.moveTo(1,true);
          $('.tip-pop').hide();
        }
      } else {
        canvas.width = imgwid ;
        canvas.height = imghei;
        var wid = canvas.width ;
        var hei = canvas.height;
        context.save();
        if(orient == 3){
          context.translate(wid / 2, hei / 2);//设置画布上的(0,0)位置，也就是旋转的中心点
          context.rotate(180*Math.PI / 180);//把画布旋转180度
          context.drawImage(image,  -wid / 2, -hei / 2,  wid,hei);

        }else{
          context.drawImage(image,  0, 0,  wid,hei);
        }
        context.closePath();
        imgURI = canvas.toDataURL("image/jpeg", 1);
        new_img.src = imgURI;
        new_img.onload = function () {
          var can2 = document.getElementById("myCanvas2");
          var cxt = can2.getContext("2d");
          var wid2 = can2.width ;
          var hei2 = can2.height;
          var wMultiple = wid2 / imgwid;
          var hMultiple = hei2 / imghei;
          var whMultiple = imgwid / imghei;
          var sX =(imgwid - wid2/hMultiple)/2;
          var sY =(imghei - hei2/hMultiple)/2;
          cxt.beginPath();
          if(whMultiple > 0.78947){
            cxt.drawImage(new_img,sX,0,wid2/hMultiple,hei2/hMultiple, 0, 0, wid2, hei2);
          }else {
            cxt.drawImage(new_img,0,sY,wid2/wMultiple,hei2/wMultiple, 0, 0, wid2, hei2);
          }
          if (name.length == 1) {
            cxt.fillStyle = '#dd732a';
            cxt.font = ' bolder 56px PingFang SC bold';
            cxt.fillText(name, wid2 * 0.805, hei2 * 0.09);
          } else if (name == '' || name.length == 2) {
            cxt.fillStyle = '#dd732a';
            cxt.font = ' bolder 56px PingFang SC';
            cxt.fillText(name, wid2 * 0.778, hei2 * 0.09);
          } else if (name.length == 3) {
            cxt.fillStyle = '#dd732a';
            cxt.font = ' bolder 56px PingFang SC bold';
            cxt.fillText(name, wid2 * 0.736, hei2 * 0.09);
          }
          if (gNum) {
            cxt.fillStyle = '#dd732a';
            cxt.font ='40px PingFang SC';
            cxt.fillText(gNum, wid2 * 0.736, hei2 * 0.15);
          }
          context.closePath();
          var img_URI = can2.toDataURL("image/jpeg", 1);
          $(".J_photo").attr('src', img_URI);
          pic_url = img_URI;
          $.fn.fullpage.moveTo(1,true);
          $('.tip-pop').hide();
        }
      }
    };
  }
  $('.J_share').on('click',function () {
    $('.share-pop').show();
  });
  function uploadOss(){
    var key = '';
    $.ajax({
      type:'get',
      url: 'https://scos.alibaba-inc.com/itsm/Mobile/getUploadPolicy.json',
      data: {},
      xhrFields: {
        withCredentials: true
      },
      success:function (res) {
        var data = res.content;
        var formData= new FormData();
        formData.append("OSSAccessKeyId",data.OSSAccessKeyId);
        formData.append("policy",data.policy);
        formData.append("Signature",data.Signature);
        formData.append("key",data.key);
        formData.append("file",convertBase64UrlToBlob(pic_url));
        key = data.key;
        $.ajax({
          type: 'POST',
          url: 'https://ost-dev.cn-hangzhou.oss.aliyun-inc.com',
          contentType : false,
          cache: false,
          processData: false,
          data:formData,
          success:function (res) {
            var _shareUrl2 = 'https://scos.alibaba-inc.com/index.html?key='+key;
            wx.onMenuShareAppMessage({
              title: _defaultTitle, // 分享标题
              desc: _defaultDesc, // 分享描述
              link: _shareUrl2, // 分享链接
              imgUrl: _defaultImage, // 分享图标
              type: '', // 分享类型,music、video或link，不填默认为link
              dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
              success: function () {
                $('.share-pop').hide();  // 用户确认分享后执行的回调函数
              },
              cancel: function () {
                $('.share-pop').hide(); // 用户取消分享后执行的回调函数
              }
            });
            //pyq
            wx.onMenuShareTimeline({
              title: _defaultTitle, // 分享标题
              link: _shareUrl2, // 分享链接
              imgUrl: _defaultImage, // 分享图标
              success: function () {
                $('.share-pop').hide();// 用户确认分享后执行的回调函数
              },
              cancel: function () {
                $('.share-pop').hide();// 用户取消分享后执行的回调函数
              }
            });
          },
          error:function(res){

          }
        });
      },
      error:function(res){
      }
    });
    //flag3 = true;
  }
//            把base64格式改成blob
  function convertBase64UrlToBlob(urlData){
    var bytes=window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte
    //处理异常,将ascii码小于0的转换为大于0
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i);
    }
    return new Blob( [ab] , {type : 'image/png'});
  }
  //朋友圈分享
  function getSign(){
    $.ajax({
      url:'https://scos.alibaba-inc.com/yxdh/api/signature.json',
      type:'get',
      dataType: "json",
      data:{
        url:_shareUrl
      },
      jsonp: "callback",
      success: function(res){
        var _res = res.content;
        wx.config({
          debug: false,
          appId: _res.appId,
          timestamp:_res.timestamp,
          nonceStr: _res.nonceStr,
          signature: _res.signature,
          jsApiList: [
            // 所有要调用的 API 都要加到这个列表中
            'onMenuShareAppMessage',
            'onMenuShareTimeline'
          ]
        });
        //分享给朋友
        wx.ready(function () {
          _wxReady = true;
          //pengyou
          wx.onMenuShareAppMessage({
            title: _defaultTitle, // 分享标题
            desc: _defaultDesc, // 分享描述
            link: _shareUrl, // 分享链接
            imgUrl: _defaultImage, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
              // 用户确认分享后执行的回调函数
              $('.share-pop').hide();
            },
            cancel: function () {
              $('.share-pop').hide(); // 用户取消分享后执行的回调函数
            }
          });
          //pyq
          wx.onMenuShareTimeline({
            title: _defaultTitle, // 分享标题
            link: _shareUrl, // 分享链接
            imgUrl: _defaultImage, // 分享图标
            success: function () {
              // 用户确认分享后执行的回调函数
              $('.share-pop').hide();
            },
            cancel: function () {
              $('.share-pop').hide(); // 用户取消分享后执行的回调函数
            }
          });
          wx.error(function(res){
//                                 alert("errorMSG:"+ JSON.stringify(res));
          });
        });
      },
      error: function(res){
//                        alert('fail'+ JSON.stringify(res));
        // alert('fail');
      }
    });
  }
  //        获取图片方向
  function getPhotoOrientation(img){
    var orient;
    EXIF.getData(img, function () {
      orient = EXIF.getTag(this, 'Orientation');
    });
    return orient;
  }
});
