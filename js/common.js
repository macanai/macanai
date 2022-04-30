/* if change size this browser more than small 767px, change the sauce of this image.
--------------------------------------------------*/
$(function() {
	var $elem = $('img.switch');
	var sp = '/sp/';
	var pc = '/pc/';
	var replaceWidth = 768;

	function imageSwitch() {
		var windowWidth = parseInt(window.innerWidth);

		$elem.each(function() {
			var $this = $(this);
			if(windowWidth > replaceWidth) {
				$this.attr('src', $this.attr('src').replace(sp, pc));
			} else {
				$this.attr('src', $this.attr('src').replace(pc, sp));
			}
		});
	}
	imageSwitch();

	var resizeTimer;
	$(window).on('resize', function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			imageSwitch();
		}, 10);
	});
});


/* loaded
---------------------------------------------- */
$(window).load(function() {
	$('body').addClass('loaded');
});



//easing start-------------------------------

jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

//easing end-------------------------------


/* if IE11
--------------------------------------------------*/
$(function(){
	var ua = navigator.userAgent;
	if (ua.match("MSIE") || ua.match("Trident")) {
		$("body").addClass("ie11");
	}
});


/* if someone came here by ipad, change the viewport.
--------------------------------------------------*/
$(function(){
	var tbView = 'width=1200px,maximum-scale=2.0,user-scalable=1';
	var agent = window.navigator.userAgent.toLowerCase();
	var ipad = agent.indexOf('ipad') > -1 || agent.indexOf('macintosh') > -1 && 'ontouchend' in document;

	if(ipad == true || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') === -1) || navigator.userAgent.indexOf('A1_07') > 0 || navigator.userAgent.indexOf('SC-01C') > 0){
		$('head').prepend('<meta name="viewport" content="' + tbView + '" id="viewport">');
		$('body').addClass('tablet');
	}
});


/* sp viewport
---------------------------------------------- */
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? 'width=device-width,initial-scale=1'
        // ? 'width=1200'
        : 'width=360';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
})();


/* if someone came here by android
--------------------------------------------------*/
if(navigator.userAgent.match(/(Android)/)){
	$(function(){
		$('head').append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanmp-noto.min.css"><link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;600;700&display=swap" rel="stylesheet">');
		$('body').addClass('android');
	});
}


/* smooth scroll
---------------------------------------------- */
$(window).load(function() {
    var headerHeight = $('#header').outerHeight();
    $('a[href^="#"]').click(function(){
        var time = 800;
        var href= $(this).attr('href');
        var target = $(href == "#" ? 'html' : href);
        var distance = target.offset().top-headerHeight;
        // var distance = target.offset().top;
        $('html, body').animate({scrollTop:distance}, time, 'swing');
        return false;
    });
});

/* page top
--------------------------------------------------*/
$(function(){
	$('#pageTop').hide();

	$(window).scroll(function () {
	  var now = $(window).scrollTop();
	  if (now > 200) {
	    $('#pageTop').fadeIn('slow');
	  } else {
	    $('#pageTop').fadeOut();
	  }
	});
	$('#pageTop').click(function(){
	  $('html, body').animate({scrollTop: 0}, 'swing');
	  return false;
	});
});


/* tab
---------------------------------------------- */
$(function(){
	$('.js_tab li').on('click', function(){
		var target = $(this).data('target');
		$('.js_tab li[data-target="'+target+'"]').siblings().removeClass('active');
		$('.js_tabcontent > li#'+target).siblings().removeClass('active');
		$('.js_tab li[data-target="'+target+'"]').addClass('active');
		$('.js_tabcontent > li#'+target).addClass('active');
	});

	// 元の位置にスムーススクロール
	// $('.js_tabcontent + .js_tab li').on('click', function(){
	// 	var header = parseInt($('#main').css('padding-top'));
	// 	$("html,body").animate({scrollTop:$('').offset().top - header});
	// });

	/* example
	---------------------------------------------- */
	// タブ
	// <ul class="js_tab">
	// 	<li data-target="target1"></li>
	// </ul>

	// タブのコンテンツ
	// <ul class="js_tabcontent">
	// 	<li id="target1"></li>
	// </ul>
});


/* modal
---------------------------------------------- */
$(function(){
	$('.modalOpen').each(function(){
		$(this).on('click', function(){
			var target = $(this).data('target');
			var modal = document.getElementById(target);
			$(modal).addClass('active');
			$('html').css('overflow','hidden');
		});
	});

	$('.modalContent').on('click', function(){
		return false;
	});

	$('.modal,.modalClose').on('click', function(){
		$('.modal').removeClass('active');
		$('html').css('overflow','');
	});

	// モーダルのmax-widthが指定されている場合
	$('.modalContent').each(function(){
		if($(this).attr('data-maxwidth')){
			var mw = $(this).data('maxwidth');
			$(this).css('max-width',mw+'px');
		}
	});

	/* example
	---------------------------------------------- */
	// モーダルのトリガー
	// <a class="modalOpen" data-target="modal1"></a>

	// モーダル
	// <div id="modal1" class="modal">
	// 	<div class="modalWrap">
	// 		<div class="modalContainer">
	// 			<div class="modalContent" data-maxwidth="1000">
	// 				ここに内容を記載
	// 				<div class="modalClose opa"></div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </div>
});


/* overflow swipe
---------------------------------------------- */
$(function(){
	// $('.js_scroll').on('touchstart', function(){
	// 	$(this).children('.scrollCaution').fadeOut();
	// });

	$('.js_scroll').each(function(){
		var breakpoint = $(this).data('breakpoint');
		// if($(window).width() > breakpoint){
		// 	$(this).children('.scrollCaution').css('display','none');
		// }

		var width = $(this).children('.scrollInner').data('width');
		if($(window).width() <= breakpoint){
			$(this).children('.scrollInner').css('width',width+'px');
		}
	});

	/* example
	---------------------------------------------- */
	// <div class="js_scroll" data-breakpoint="768">
	// 	<div class="scrollInner" data-width="1000">
	// 		ここに内容を記載
	// 	</div>
	// 	<div class="scrollCaution" title="左右にスワイプしてご覧いただけます。"></div>
	// </div>
});


/* accordion
---------------------------------------------- */
$(function(){
	$('.js_openBtn').on("click", function() {
		$(this).next('.js_openBox').slideToggle();
	});
});


/* fadein animation of main contents
--------------------------------------------------*/
$(function(){
	$(function(){
		$('.fi_u').css('visibility','hidden');
		$(window).scroll(function(){
			var WindowHeight = $(window).height(),
			TopWindow = $(window).scrollTop(),
			targetPosition;
			$('.fi_u').each(function(){
				targetPosition = $(this).offset().top;
				if(TopWindow > targetPosition - WindowHeight + 200){
				$(this).addClass("fadeInUp");
			}
			});
		});
	});
	$(function(){
		$('.fi_d').css('visibility','hidden');
		$(window).scroll(function(){
			var WindowHeight = $(window).height(),
			TopWindow = $(window).scrollTop(),
			targetPosition;
			$('.fi_d').each(function(){
				targetPosition = $(this).offset().top;
				if(TopWindow > targetPosition - WindowHeight + 200){
				$(this).addClass("fadeInDown");
			}
			});
		});
	});
	$(function(){
		$('.fi').css('visibility','hidden');
		$(window).scroll(function(){
			var WindowHeight = $(window).height(),
			TopWindow = $(window).scrollTop(),
			targetPosition;
			$('.fi').each(function(){
				targetPosition = $(this).offset().top;
				if(TopWindow > targetPosition - WindowHeight + 200){
				$(this).addClass("fadeIn");
			}
			});
		});
	});
	$(function(){
		$('.fi_r').css('visibility','hidden');
		$(window).scroll(function(){
			var WindowHeight = $(window).height(),
			TopWindow = $(window).scrollTop(),
			targetPosition;
			$('.fi_r').each(function(){
				targetPosition = $(this).offset().top;
				if(TopWindow > targetPosition - WindowHeight + 200){
				$(this).addClass("fadeInRight");
			}
			});
		});
	});
	$(function(){
		$('.fi_l').css('visibility','hidden');
		$(window).scroll(function(){
			var WindowHeight = $(window).height(),
			TopWindow = $(window).scrollTop(),
			targetPosition;
			$('.fi_l').each(function(){
				targetPosition = $(this).offset().top;
				if(TopWindow > targetPosition - WindowHeight + 200){
				$(this).addClass("fadeInLeft");
			}
			});
		});
	});
});

$(function() {
	$('.fade_slide1').css('visibility','hidden');
	$(window).scroll(function(){
		var WindowHeight = $(window).height(),
		TopWindow = $(window).scrollTop(),
		targetPosition;
		$('.fade_slide1').each(function(i){
			targetPosition = $(this).offset().top;
			if(TopWindow > targetPosition - WindowHeight){
			// $(this).addClass("fadeInUp");
				$(this).delay(200 * i);
		      	$(this).delay(0).queue(function() {
			        $(this).addClass('fadeSlide').dequeue();
			    });
			}
		});
		$(function () {
	      var counter = 0;
	      $(this).each(function () {
	          counter++;
	      });
	    });
	});
});
$(function(){
	$('.fade_slide2').css('visibility','hidden');
	$(window).scroll(function(){
		var WindowHeight = $(window).height(),
		TopWindow = $(window).scrollTop(),
		targetPosition;
		$('.fade_slide2').each(function(i){
			targetPosition = $(this).offset().top;
			if(TopWindow > targetPosition - WindowHeight){
			// $(this).addClass("fadeInUp");
				$(this).delay(200 * i);
		      	$(this).delay(0).queue(function() {
			        $(this).addClass('fadeSlide').dequeue();
			    });
			}
		});
		$(function () {
	      var counter = 0;
	      $(this).each(function () {
	          counter++;
	      });
	    });
	});
});
$(function(){
	$('.fade_slide3').css('visibility','hidden');
	$(window).scroll(function(){
		var WindowHeight = $(window).height(),
		TopWindow = $(window).scrollTop(),
		targetPosition;
		$('.fade_slide3').each(function(i){
			targetPosition = $(this).offset().top;
			if(TopWindow > targetPosition - WindowHeight){
			// $(this).addClass("fadeInUp");
				$(this).delay(200 * i);
		      	$(this).delay(0).queue(function() {
			        $(this).addClass('fadeSlide').dequeue();
			    });
			}
		});
		$(function () {
	      var counter = 0;
	      $(this).each(function () {
	          counter++;
	      });
	    });
	});
});



/*  hamburger
--------------------------------------------------*/
$(function () {
  $('.burgerBtn').click(function () {
    $(this).toggleClass('active');
    $('.burgerNav').toggleClass('active');
    $('body').toggleClass('noscroll');
  });

  $(".burgerListLink").click(function () {
    $(".burgerBtn, .burgerNav").removeClass("active");
    $('body').removeClass('noscroll');
  });
});

