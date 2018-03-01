/*!
 * ScriptName: shared.js
 *
 * FCV - http://foodconnection.jp/
 *
 */
// DOM ready
$(document).ready(function() {
	var top = $('#navmain').offset().top;
	$(window).scroll(function(){
		if($(this).scrollTop()!=0){
			$('#backtotop').fadeIn();
		} else {
			$('#backtotop').fadeOut();
		}		
		if($(window).scrollTop() > top){
			$('#navmain').addClass('bgwhite');
		} else {
			$('#navmain').removeClass('bgwhite');
		}
	});
	$('.heightasviewport').css('height', jQuery(window).height());
	if ($(window).width() < 640) {
	   $('#sec3 .text1').removeClass('heightLine-1');
	   $('#sec3 .box .icon').removeClass('heightLine-2');
	}
	else{
		$('#sec3 .text1').addClass('heightLine-1');
		$('#sec3 .box .icon').addClass('heightLine-2');
	}
	// $(window).resize(function(){
	// 	if ($(window).width() < 640) {
	// 	   $('#sec3 .text1').removeClass('heightLine-1');
	// 	   $('#sec3 .box .icon').removeClass('heightLine-2');
	// 	}
	// 	else{
	// 		$('#sec3 .text1').addClass('heightLine-1');
	// 		$('#sec3 .box .icon').addClass('heightLine-2');
	// 	}
	// });
	$('.smbtn').click(function(){
		$('#navmain .navbar-collapse').fadeToggle();
		$('body').toggleClass("nav-open");
	});	
	$('.btn_toggle').click(function(){
		$(this).toggleClass("btn_rotate");
		$('.content_box').slideToggle();
	});
	$('.btn_toggle1').click(function(){
		$(this).toggleClass("btn_rotate");
		$('.content_box1').slideToggle();
	});
	$('.btn_toggle2').click(function(){
		$(this).toggleClass("btn_rotate");
		$('.content_box2').slideToggle();
	});
	$('.btn_toggle3').click(function(){
		$(this).toggleClass("btn_rotate");
		$('.content_box3').slideToggle();
	});
	$('.btn_toggle4').click(function(){
		$(this).toggleClass("btn_rotate");
		$('.content_box4').slideToggle();
	});

	var h1 = $('#navmain').outerHeight();
	$(window).load(function(e) {
		var hash1= location.hash;
		var $root = $('html, body');

		if(hash1!=""){  
		 var top01 = $(hash1).offset();
		 $('html,body').animate({ scrollTop:top01.top-h1}, 200);  
		}
	});
	$(function($){
		$(function(){
			$('a[href^="#"]').click(function(){
				if ( $( $(this).attr('href') ).length ) {
					var p = $( $(this).attr('href') ).offset();
					if(p.top <= h1){
						$('html,body').animate({ scrollTop: p.top-h1 }, 200);
					}
					else{
						$('html,body').animate({ scrollTop: p.top-h1 }, 200);
					}
				}
			 return false;
			});
		});
	});
});
$(window).load(function(e) {
	var hash1 = location.hash;
	var $root = $('html, body');
	if( hash1 != "" && $(hash1).length > 0){  
		var top01 = $(hash1).offset();
		if ($(hash1).hasClass("link-archo"))
		$(hash1).each(function(){
			$(this).children().find('.toggle-link').click().children().addClass('btn_rotate');
		});
	}
});