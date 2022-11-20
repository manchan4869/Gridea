/**
 * ViewImage.js
 * https://tokinx.github.io/view-image
 */
!
function(a) {
    a.extend({
        viewImage: function(b) {
            var c = a.extend({
                target: ".view-image img",
                exclude: "",
                delay: 300
            }, b);
            a(c.exclude).attr("view-image", !1), a(c.target).click(function() {
                var b = a(this).attr("src"),
                    d = a(this).attr("href"),
                    e = "",
                    f = "<style class='view-image-css'>.view-img{position:fixed;background:#fff;background:rgba(255,255,255,.92);width:100%;height:100%;top:0;left:0;text-align:center;padding:2%;z-index:999;cursor: zoom-out}.view-img img,.view-img span{max-width:100%;max-height:100%;position:relative;top:50%;transform: translateY(-50%);}.view-img img{animation:view-img-show .8s -0.1s ease-in-out}.view-img span{height:2em;color:#AAB2BD;overflow:hidden;position:absolute;top:50%;left:0;right:0;width:120px;text-align:center;margin:-1em auto;}.view-img span:after{content:'';position:absolute;bottom:0;left:0;transform: translateX(-100%);width:100%;height:2px;background:#3274ff;animation:view-img-load .8s -0.1s ease-in-out infinite;}@keyframes view-img-load{0%{transform: translateX(-100%);}100%{transform: translateX(100%);}}@keyframes view-img-show{0%{opacity:0;}100%{opacity:1;}}</style>";
                return a(this).attr("view-image") || a(this).attr("rel") ? void 0 : (e = b ? b : d, a("body").append(f + "<div class='view-img'><span>loading...</span></div>"), setTimeout(function() {
                    var b = new Image;
                    b.src = e, b.onload = function() {
                        a(".view-img").html("<img src=" + this.src + ">")
                    }, a(".view-img").click(function() {
                        a(".view-image-css").remove(), a(this).remove()
                    })
                }, c.delay), !1)
            })
        }
    })
}(jQuery);


// Run when the DOM ready
jQuery( function ( $ ) {

	var clickEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

	/**
	 * Scroll to top
	 */
	function scrollToTop() {
		var $window = $( window ),
			$button = $( '#scroll-to-top' );
		$window.scroll( function () {
			$button[$window.scrollTop() > 100 ? 'removeClass' : 'addClass']( 'hidden' );
		} );
		$button.on( clickEvent, function ( e ) {
			e.preventDefault();
			$( 'body, html' ).animate( {
				scrollTop: 0
			}, 500 );
		} );
	}

	scrollToTop();
} );


// 点击事件
jQuery(document).ready(function($) {
 	btn_click("#mStats", "stats_click", "stats_close"); //站点统计
 	btn_click("#mClick", "mobile_click", "mobile_close"); //二维码
	function btn_click(btn, on, off) {
		 flag=true;
		   $(btn).click(function () {
		       $(btn).prop('class', (flag = !flag) ? on : off);
		   });
	}
});


// 文章目录点击显示隐藏
$(document).ready(function(){
    $(".icon-list").click(function(){
        $(".fn_article_nav").toggle();
    });
});


// 移动端导航
var mNavlist = $('.js-m-navlist');

mNavlist.on('click', function () {
    var addclass = $(this).parent('.m_nav-list').data('cssclass'),
        isShowed = $(this).parent('.m_nav-list').hasClass(addclass);

    /* calculation the client height */
    var clientHeight = document.documentElement.clientHeight,
        setHeight = clientHeight * 1 + 'px',
        padding = clientHeight * 0.22 + 'px',
        navWrapper = $('.m_nav-wrapper');

    navWrapper.css({
        'height': setHeight,
        'padding': padding + ' 0 ' + padding,
        'transform': 'translate3d(0,-' + clientHeight + 'px,0)',
    });

    /* if it is showed */
    if (isShowed) {
        $(this).parent('.m_nav-list').removeClass(addclass);
        /* hide the navlist */
        navWrapper.css({
            'transform': 'translate3d(0,-' + clientHeight + 'px,0)'
        });

    } else {
        /* if it is closed */
        $(this).parent('.m_nav-list').addClass(addclass);
        /* show the navlist */
        navWrapper.css({
            'transform': 'translate3d(0,0,0)'
        });
    }
});


// hljs行号
$("pre code").each(function(){
  $(this).html("<ol><li>" + $(this).html().replace(/\n/g,"\n</li><li>") +"\n</li></ol>");
});


// 获取图片alt信息
$(".entry-content p img,.lonesome-img a img").each(function(){ 
    $("<figcaption class='image_title'></figcaption>").insertAfter(this); 
    var thisImage = $(this).parents('.entry-content p,.lonesome-img a').find('img'); 
    var title = thisImage.attr('alt'); 
    $(this).siblings('.image_title').html(title); 
});


// 将footer固定到底部
$(function(){
    function footerPosition(){
        $("footer").removeClass("fixed-bottom");
        var contentHeight = document.body.scrollHeight,//网页正文全文高度
            winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
        if(!(contentHeight > winHeight)){
            //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
            $("footer").addClass("fixed-bottom");
        } else {
            $("footer").removeClass("fixed-bottom");
        }
    }
    footerPosition();
    $(window).resize(footerPosition);
});


// 给不是图片链接的a标签里加rel
const regx = /\.(jpe?g|png)(?=\?|$)/i; // 正则表达式
$('.entry-content').find('a').each(function(){
    const href = $(this).attr('href');
    const isImg = regx.test(href); // 正则表达式与目标字符串是否匹配
    if (!isImg) {
        $(this).attr('rel', 'external');
    }
});


// 文章目录锚链接滑动
$(document).ready(function() {
    $('.toc a').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top+-60+'px';
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                500);
                return false;
            }
        }
    });
});

    //点击加载更多
    
    $(function ($) {
        //点击下一页的链接(即那个a标签)
        $(' .next').click(function () {
            $this = $(this);
            $this.addClass('loading').text('正在努力加载'); //给a标签加载一个loading的class属性，用来添加加载效果
            var href = $this.attr('href'); //获取下一页的链接地址
            var pattern = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#])?/
            href=href.replace(pattern, location.href)            
            if (href != undefined) { //如果地址存在
                $.ajax({ //发起ajax请求
                    url: href,
                    //请求的地址就是下一页的链接
                    type: 'get',
                    //请求类型是get
                    error: function (request) {
                        //如果发生错误怎么处理
                    },
                    success: function (data) { //请求成功
                        $this.removeClass('loading').text('点击查看更多'); //移除loading属性
                        var $res = $(data).find('.post-318 '); //从数据中挑出文章数据，请根据实际情况更改
                        $('.col-md-8').append($res.fadeIn(500)); //将数据加载加进posts-loop的标签中。
                        var newhref = $(data).find(' .next').attr('href'); //找出新的下一页链接
                        if (newhref != undefined) {
                            $('.next').attr('href', newhref);
                        } else {
                            $('.next').remove(); //如果没有下一页了，隐藏
                        }
                    }
                });
            }
            return false;
        });
    });

//highlight
hljs.highlightAll();
    //wow
        wow = new WOW({
                    boxClass: 'wow',
                    animateClass: 'animated',
                    offset: 0,
                    mobile: true,
                    live: true
            });
wow.init();
        //百度统计
        var hosts = window.location.host;
            if (hosts == "blog.manchan.ml") {
                    var _hmt = _hmt || [];
                    (function () {
                            var hm = document.createElement("script");
                            hm.src = "https://hm.baidu.com/hm.js?8f120d9fed3fd2ee8687f27f6e7ae7f6";
                            var s = document.getElementsByTagName("script")[0];
                            s.parentNode.insertBefore(hm, s);
                    })();
            } else {
                    var _hmt = _hmt || [];
                    (function () {
                            var hm = document.createElement("script");
                            hm.src = "https://hm.baidu.com/hm.js?4546e037575b94355f48671241e8193c";
                            var s = document.getElementsByTagName("script")[0];
                            s.parentNode.insertBefore(hm, s);
                    })();
            }
//返回按钮
            $((function (_this) {
                return function () {
                  var bt;
                  bt = $('#back_to_top');
                  if ($(document).width() > 480) {
                    $(window).scroll(function () {
                      var st;
                      st = $(window).scrollTop();
                      if (st > 30) {
                        return bt.css('display', 'block');
                      } else {
                        return bt.css('display', 'none');
                      }
                    });
                    return bt.click(function () {
                      $('body,html').animate({
                        scrollTop: 0
                      }, 800);
                      return false;
                    });
                  }
                };
              })(this));