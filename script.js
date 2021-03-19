// adobeFont読み込みようコピペコード
(function(d) {
var config = {
  kitId: 'byh3qpj',
  scriptTimeout: 3000,
  async: true
},
h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);
// adobeFont読み込み用コピペコードここまで

$(function(){
    $('.hb_menu').on('click',function(){
      $('span').toggleClass('active');
      $('#nav').toggleClass('active');
      $('.triangle').toggleClass('open');
      $('.triangleText').toggleClass('test');

      if($('#nav').hasClass('active')){
        $('#nav').hide().fadeIn(400);
      }else{
        $('#nav').hide().fadeOut();
      }

      if($('.triangle').hasClass('open')){
        $('.triangle').hide().fadeIn(800);
      }else{
        $('.triangle').hide().fadeOut();
      }
    });
});

$('#manu a[href]').on('click', function(event) {
        $('.hb_menu').trigger('click');
    });

    $(function (){
      $('.work_item').hover(
        function(){
          $('.text').fadeIn();
        },
        function(){
          $('.text').fadeOut();
        }
      );
    });

    // モーダルが複数ある場合
    $(function () {
      // モーダルのボタンをクリックした時
      $('#text1').on('click', function() {

        $('#test1').fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
      });
      // ×やモーダルの背景をクリックした時
      $('.test').click(function(){
        $('#test1').fadeOut(); // モーダルを非表示にする
      });
    });


    // モーダルが複数ある場合
    $(function () {
      // モーダルのボタンをクリックした時
      $('#text2').on('click', function() {

        $('#test2').fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
      });
      // ×やモーダルの背景をクリックした時
      $('.test').click(function(){
        $('#test2').fadeOut(); // モーダルを非表示にする
      });
    });

    // モーダルが複数ある場合
    $(function () {
      // モーダルのボタンをクリックした時
      $('#text3').on('click', function() {

        $('#test3').fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
      });
      // ×やモーダルの背景をクリックした時
      $('.test').click(function(){
        $('#test3').fadeOut(); // モーダルを非表示にする
      });
    });


    // モーダルが複数ある場合
    $(function () {
      // モーダルのボタンをクリックした時
      $('#text4').on('click', function() {

        $('#test4').fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
      });
      // ×やモーダルの背景をクリックした時
      $('.test').click(function(){
        $('#test4').fadeOut(); // モーダルを非表示にする
      });
    });


    // モーダルが複数ある場合
    $(function () {
      // モーダルのボタンをクリックした時
      $('#text5').on('click', function() {

        $('#test5').fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
      });
      // ×やモーダルの背景をクリックした時
      $('.test').click(function(){
        $('#test5').fadeOut(); // モーダルを非表示にする
      });
    });


    // モーダルが複数ある場合
    $(function () {
      // モーダルのボタンをクリックした時
      $('#text6').on('click', function() {

        $('#test6').fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
      });
      // ×やモーダルの背景をクリックした時
      $('.test').click(function(){
        $('#test6').fadeOut(); // モーダルを非表示にする
      });
    });

// 背景がスクロールしない様に固定する
    $(function(){
      let scrollPosition;
      $(".text").on("click", function() {
        scrollPosition = $(window).scrollTop();
        $('body').addClass('fixed').css({'top': -scrollPosition});
      });
      $(".test").on("click", function() {
        $('body').removeClass('fixed').css({'top': 0});
        window.scrollTo( 0 , scrollPosition );
      });
    });

// プロフィールエリアのオブジェクトを動かす
    $(function(){
      $(window).scroll(function (){
        $('.profile_wrapper').each(function(){
          let elemPos = $('.profile_triangle,.profile_circle').offset().top;
          let scroll = $(window).scrollTop();
          let windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 500){
            $('.profile_triangle,.profile_circle').addClass('fadeIn');
          }
        });
      });
    });

// オレンジの帯アニメーション用
    $(function(){
      $(window).scroll(function (){
        $('.contents').each(function(){
          let target = $(this).offset().top;
          let scroll = $(window).scrollTop();
          let windowHeight = $(window).height();
          if (scroll > target - windowHeight + 500){
              $(this).addClass('fade');
          }
        });
      });
    });


    $(function(){
      $(window).scroll(function (){
        $('.skill_wrapper').each(function(){
          let elemPos = $('.skill_item').offset().top;
          let scroll = $(window).scrollTop();
          let windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 300){
            $('.skill_item').addClass('fadeIn');
          }
        });
      });
    });


    $(function(){
      $(window).scroll(function (){
        $('.contact_wrapper').each(function(){
          let elemPos = $('.contact_triangle').offset().top;
          let scroll = $(window).scrollTop();
          let windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 3300){
            $('.contact_triangle').addClass('fade');
          }
        });
      });
    });
