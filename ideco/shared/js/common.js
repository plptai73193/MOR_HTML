/*!
 * ScriptName: common.js
 * Version: 0.6
 *
 * FCV - http://foodconnection.jp/
 *
 */

$(document).ready(function() {
	var UA = navigator.userAgent;
	if (UA.indexOf("iPhone") < 0 && UA.indexOf("Android") < 0) $(".telhref").contents().unwrap(); // remove link [tel] on desktop

	// fix bg parallax on mobile
	if (isMobile.any()) $(".bg-parallax").css("background-attachment", "inherit");
	else $(".bg-parallax").css("background-attachment", "");

	// BEGIN: bxSlider plugin
	if ($(".bxSlider").length) {
		if ($.fn.bxSlider) {
			$(".bxSlider").each(function() {
				var $bxSliderData = {
						mode: $.inArray($(this).attr("data-mode"), ["horizontal", "vertical", "fade"]) >= 0 ? $(this).attr("data-mode") : "fade",
						auto: $.inArray($(this).attr("data-auto"), ["true", "on", "enable", "enabled", "1"]) >= 0 ? true : false,
						controls: $.inArray($(this).attr("data-controls"), ["true", "on", "enable", "enabled", "1"]) >= 0 ? true : false,
						randomStart: $.inArray($(this).attr("data-randomStart"), ["true", "on", "enable", "enabled", "1"]) >= 0 ? true : false,
						infiniteLoop: $.inArray($(this).attr("data-infiniteLoop"), ["true", "on", "enable", "enabled", "1"]) >= 0 ? true : false,
						ticker: $.inArray($(this).attr("data-ticker"), ["true", "on", "enable", "enabled", "1"]) >= 0 ? true : false,
						tickerHover: $.inArray($(this).attr("data-tickerHover"), ["true", "on", "enable", "enabled", "1"]) >= 0 ? true : false,
						pager: $.inArray($(this).attr("data-pager"), ["true", "on", "enable", "enabled", "1"]) >= 0 ? true : false,
						pagerCustom: typeof $(this).attr("data-pagerCustom") != "undefined" && $(this).attr("data-pagerCustom").length > 0 ? $(this).attr("data-pagerCustom") : null,
						pagerSelector: typeof $(this).attr("data-pagerSelector") != "undefined" ? $(this).attr("data-pagerSelector") : null,
						useCSS: $.inArray($(this).attr("data-useCSS"), ["true", "on", "enable", "enabled", "1"]) >= 0 ? true : false,
						autoHover: $.inArray($(this).attr("data-autoHover"), ["true", "on", "enable", "enabled", "1"]) >= 0 ? true : false,
						preloadImages: $.inArray($(this).attr("data-preloadImages"), ["all", "visible"]) >= 0 ? $(this).attr("data-preloadImages") : "visible",
						hideControlOnEnd: $.inArray($(this).attr("data-hideControlOnEnd"), ["true", "on", "enable", "enabled", "1"]) >= 0 ? true : false,
						captions: $.inArray($(this).attr("data-captions"), ["true", "on", "enable", "enabled", "1"]) >= 0 ? true : false,
						clickContinue: $.inArray($(this).attr("data-clickContinue"), ["true", "on", "enable", "enabled", "1"]) >= 0 ? true : false,
						speed: typeof $(this).attr("data-speed") != "undefined" ? parseInt($(this).attr("data-speed")) : 1000,
						pause: typeof $(this).attr("data-pause") != "undefined" ? parseInt($(this).attr("data-pause")) : 4000,
						slideMargin: typeof $(this).attr("data-slideMargin") != "undefined" ? parseInt($(this).attr("data-slideMargin")) : 0,
						startSlide: typeof $(this).attr("data-startSlide") != "undefined" ? parseInt($(this).attr("data-startSlide")) : 0,
						autoDelay: typeof $(this).attr("data-autoDelay") != "undefined" ? parseInt($(this).attr("data-autoDelay")) : 0,
						minSlides: typeof $(this).attr("data-minSlides") != "undefined" ? parseInt($(this).attr("data-minSlides")) : 1,
						maxSlides: typeof $(this).attr("data-maxSlides") != "undefined" ? parseInt($(this).attr("data-maxSlides")) : 1,
						moveSlides: typeof $(this).attr("data-moveSlides") != "undefined" ? parseInt($(this).attr("data-moveSlides")) : 0,
						slideWidth: typeof $(this).attr("data-slideWidth") != "undefined" ? parseInt($(this).attr("data-slideWidth")) : 0,
						autoDirection: $.inArray($(this).attr("data-autoDirection"), ["next", "prev"]) >= 0 ? $(this).attr("data-autoDirection") : "next",
						adaptiveHeight: $.inArray($(this).attr("data-adaptiveHeight"), ["true", "on", "enable", "enabled", "1"]) >= 0 ? true : false,
						adaptiveHeightSpeed: typeof $(this).attr("data-adaptiveHeightSpeed") != "undefined" ? parseInt($(this).attr("data-adaptiveHeightSpeed")) : 500,
						nextSelector: typeof $(this).attr("data-nextSelector") != "undefined" ? $(this).attr("data-nextSelector") : null,
						prevSelector: typeof $(this).attr("data-prevSelector") != "undefined" ? $(this).attr("data-prevSelector") : null,
						nextText: typeof $(this).attr("data-nextText") != "undefined" ? $(this).attr("data-nextText") : "Next",
						prevText: typeof $(this).attr("data-prevText") != "undefined" ? $(this).attr("data-prevText") : "Prev",
						easing: typeof $(this).attr("data-easing") != "undefined" ? $(this).attr("data-easing") : null
					};

				if (typeof $(this).attr("data-auto") == "undefined") $bxSliderData.auto = true;
				if (typeof $(this).attr("data-infiniteLoop") == "undefined") $bxSliderData.infiniteLoop = true;
				if (typeof $(this).attr("data-useCSS") == "undefined" && $bxSliderData.mode === "fade") $bxSliderData.useCSS = true;
				if (typeof $(this).attr("data-controls") == "undefined" && ($bxSliderData.pagerCustom !== null || $bxSliderData.pagerSelector !== null)) $bxSliderData.pager = true;
				if (typeof $(this).attr("data-controls") == "undefined" && ($bxSliderData.nextSelector !== null || $bxSliderData.nextSelector !== null)) $bxSliderData.controls = true;
				if (typeof $(this).attr("data-nextText") == "undefined" && $bxSliderData.nextSelector !== null) $bxSliderData.nextText = "";
				if (typeof $(this).attr("data-prevText") == "undefined" && $bxSliderData.prevSelector !== null) $bxSliderData.prevText = "";

				if ($bxSliderData.ticker === true) {
					$bxSliderData.mode = $.inArray($bxSliderData.mode, ["horizontal", "vertical"]) >= 0 ? $bxSliderData.mode : "horizontal";
					$bxSliderData.auto = false;
					$bxSliderData.autoStart = true;
					$bxSliderData.autoDelay = 0;
					$bxSliderData.autoHover = false;
					$bxSliderData.useCSS = false;
				}

				var $bxSlider = $(this).bxSlider({
						mode: $bxSliderData.mode,
						auto: $bxSliderData.auto,
						controls: $bxSliderData.controls,
						randomStart: $bxSliderData.randomStart,
						infiniteLoop: $bxSliderData.infiniteLoop,
						ticker: $bxSliderData.ticker,
						tickerHover: $bxSliderData.tickerHover,
						pager: $bxSliderData.pager,
						pagerCustom: $bxSliderData.pagerCustom,
						useCSS: $bxSliderData.useCSS,
						autoHover: $bxSliderData.autoHover,
						preloadImages: $bxSliderData.preloadImages,
						hideControlOnEnd: $bxSliderData.hideControlOnEnd,
						captions: $bxSliderData.captions,
						speed: $bxSliderData.speed,
						pause: $bxSliderData.pause,
						slideMargin: $bxSliderData.slideMargin,
						startSlide: $bxSliderData.startSlide,
						autoDelay: $bxSliderData.autoDelay,
						minSlides: $bxSliderData.minSlides,
						maxSlides: $bxSliderData.maxSlides,
						moveSlides: $bxSliderData.moveSlides,
						slideWidth: $bxSliderData.slideWidth,
						autoDirection: $bxSliderData.autoDirection,
						adaptiveHeight: $bxSliderData.adaptiveHeight,
						adaptiveHeightSpeed: $bxSliderData.adaptiveHeightSpeed,
						nextSelector: $bxSliderData.nextSelector,
						prevSelector: $bxSliderData.prevSelector,
						nextText: $bxSliderData.nextText,
						prevText: $bxSliderData.prevText,
						easing: $bxSliderData.easing,
						onSlideAfter: function() {
							if (($bxSliderData.ticker !== true && $bxSliderData.tickerHover !== true) && $bxSliderData.auto !== false && $bxSliderData.clickContinue) {
								$bxSlider.stopAuto();
								$bxSlider.startAuto();
							}
						},
						onSlideNext: function($slideElement, oldIndex, newIndex) {
					        if (newIndex != 0) {
					    		$('#key .text').addClass('bgw');
					    	} else {
					    		$('#key .text').removeClass('bgw');
					    	}
					    },
					    onSlidePrev: function($slideElement, oldIndex, newIndex) {				      
					         if (newIndex != 0) {
					    		$('#key .text').addClass('bgw');
					    	} else {
					    		$('#key .text').removeClass('bgw');
					    	}
					    }
					});

				if ($(this).parents(".bxSlider-pager").length) {
					$(this).parents(".bxSlider-pager").on("mouseenter", "a[data-slide-index]", function() {
						var $idx = $(this).attr("data-slide-index");
						if ($idx != $bxSlider.getCurrentSlide()) $bxSlider.goToSlide($idx);
					});
				}
			});
		} else console.error("required libs bxSlider");
	}
	// END: bxSlider plugin

	// BEGIN: slide fading
	if ($(".slide-fade").length) {
		var $slideFadeTimer = {};

		$(".slide-fade").each(function() {
			if (!$(this).hasClass("stop")) {
				var $this = $(this),
					$duration = typeof $this.attr("data-duration") != "undefined" ? parseInt($this.attr("data-duration")) : 1000,
					$timer = typeof $this.attr("data-timer") != "undefined" ? parseInt($this.attr("data-timer")) : 4000;

				if (!$this.children(".active").length) {
					$this.children().hide();
					$this.children().eq(0).show().addClass("active");

					if ($this.siblings(".slide-page").length) $this.siblings(".slide-page").children().eq(0).addClass("active");
				} else {
					if ($this.siblings(".slide-page").length) $this.siblings(".slide-page").children().eq($this.children(".active").index()).addClass("active");
				}

				$slideFadeTimer[$this.index()] = setInterval(function() {
					slideFade($this, $duration);
				}, $timer);
			}
		});

		$("body").on("click", ".slide-btn > .slide-next", function() {
			var $btn = $(this),
				$this = $btn.parent().siblings(".slide-fade"),
				$duration = typeof $this.attr("data-duration") != "undefined" ? parseInt($this.attr("data-duration")) : 1000,
				$timer = typeof $this.attr("data-timer") != "undefined" ? parseInt($this.attr("data-timer")) : 4000;

			if (!$btn.hasClass("clicked") && !$this.hasClass("stop")) {
				clearInterval($slideFadeTimer[$this.index()]);

				$btn.addClass("clicked");

				$this.children(".active").stop().fadeOut($duration, function() {
					$(this).removeClass("active").removeAttr("style").hide();
				});

				if ($this.children(".active").next().length) {
					$this.children(".active").next().stop().fadeIn($duration, function() {
						$(this).addClass("active").removeAttr("style").show();
						$btn.removeClass("clicked");

						$slideFadeTimer[$this.index()] = setInterval(function() {
							$this.siblings(".slide-btn").children(".slide-next").click();
						}, $timer);
					});
				} else {
					$this.children().eq(0).stop().fadeIn($duration, function() {
						$(this).addClass("active").removeAttr("style").show();
						$btn.removeClass("clicked");

						$slideFadeTimer[$this.index()] = setInterval(function() {
							$this.siblings(".slide-btn").children(".slide-next").click();
						}, $timer);
					});
				}
			}
		});
		$("body").on("click", ".slide-btn > .slide-prev", function() {
			var $btn = $(this),
				$this = $btn.parent().siblings(".slide-fade"),
				$duration = typeof $this.attr("data-duration") != "undefined" ? parseInt($this.attr("data-duration")) : 1000,
				$timer = typeof $this.attr("data-timer") != "undefined" ? parseInt($this.attr("data-timer")) : 4000;

			if (!$btn.hasClass("clicked") && !$this.hasClass("stop")) {
				clearInterval($slideFadeTimer[$this.index()]);

				$btn.addClass("clicked");

				$this.children(".active").stop().fadeOut($duration, function() {
					$(this).removeClass("active").removeAttr("style").hide();
				});

				if ($this.children(".active").prev().length) {
					$this.children(".active").prev().stop().fadeIn($duration, function() {
						$(this).addClass("active").removeAttr("style").show();
						$btn.removeClass("clicked");

						$slideFadeTimer[$this.index()] = setInterval(function() {
							$this.siblings(".slide-btn").children(".slide-next").click();
						}, $timer);
					});
				} else {
					$this.children().last().stop().fadeIn($duration, function() {
						$(this).addClass("active").removeAttr("style").show();
						$btn.removeClass("clicked");

						$slideFadeTimer[$this.index()] = setInterval(function() {
							$this.siblings(".slide-btn").children(".slide-next").click();
						}, $timer);
					});
				}
			}
		});

		$("body").on("click", ".slide-page > *", function() {
			var $page = $(this).parent(),
				$idx = $(this).index(),
				$this = $(this).parents(".slideParent").length ? $(this).parents(".slideParent").find(".slide-fade") : $(this).siblings(".slide-fade"),
				$duration = typeof $this.attr("data-duration") != "undefined" ? parseInt($this.attr("data-duration")) : 1000,
				$timer = typeof $this.attr("data-timer") != "undefined" ? parseInt($this.attr("data-timer")) : 4000;

			if ($this.length) {
				if (!$page.hasClass("clicked") && !$this.hasClass("stop")) {
					if ($this.children().eq($idx).length) {
						clearInterval($slideFadeTimer[$this.index()]);

						$this.siblings(".slide-page").children(".active").removeClass("active");
						$(this).addClass("active");

						$page.addClass("clicked");

						$this.children(".active").stop().fadeOut($duration, function() {
							$(this).removeClass("active").removeAttr("style").hide();
						});

						$this.children().eq($idx).stop().fadeIn($duration, function() {
							$(this).addClass("active").removeAttr("style").show();
							$page.removeClass("clicked");

							$slideFadeTimer[$this.index()] = setInterval(function() {
								slideFade($this, $duration);
							}, $timer);
						});
					} else console.info("Slide not found");
				}
			} else console.info(".slideParent or .slide-fade not found!");
		});

		function slideFade(elm, duration) {
			elm.children(".active").stop().fadeOut(duration, function() {
				$(this).removeClass("active").removeAttr("style").hide();
			});

			if (elm.children(".active").next().length) {
				if (elm.siblings(".slide-page").length) {
					elm.siblings(".slide-page").children(".active").removeClass("active");
					elm.siblings(".slide-page").children().eq(elm.children(".active").next().index()).addClass("active");
				}

				elm.children(".active").next().stop().fadeIn(duration, function() {
					$(this).addClass("active").removeAttr("style").show();

					if (elm.siblings(".slide-btn").hasClass("clicked")) elm.siblings(".slide-btn.clicked").removeClass("clicked");
					if (elm.siblings(".slide-page").hasClass("clicked")) elm.siblings(".slide-page.clicked").removeClass("clicked");
				});
			} else {
				if (elm.siblings(".slide-page").length) {
					elm.siblings(".slide-page").children(".active").removeClass("active");
					elm.siblings(".slide-page").children().eq(0).addClass("active");
				}

				elm.children().eq(0).stop().fadeIn(duration, function() {
					$(this).addClass("active").removeAttr("style").show();

					if (elm.siblings(".slide-btn").hasClass("clicked")) elm.siblings(".slide-btn.clicked").removeClass("clicked");
					if (elm.siblings(".slide-page").hasClass("clicked")) elm.siblings(".slide-page.clicked").removeClass("clicked");
				});
			}
		}
	}
	// BEGIN: slide fading

	// navigation animate
	if ($(".nav-animate").length) {
		$(".nav-animate").each(function() {
			var $timerNav,
				$navNull = $(this).hasClass("nav-null"),
				$navWidth = $(this).find("li").first().outerWidth(),
				$navPosX = $navNull ? 0 : $(this).find("li").first().position().left,
				// $navML = 0,
				$navMR = 0;

			if ($(this).find("li.active").length) {
				$navWidth = $(this).find("li.active").outerWidth(),
				$navPosX = $(this).find("li.active").position().left;

				// $navML = $(this).find("li.active").next().length ? parseInt($(this).find("li.active").next().css("margin-left"), 10),
				$navMR = $(this).find("li.active").prev().length ? parseInt($(this).find("li.active").prev().css("margin-right"), 10) : 0;
			} else {
				if (!$navNull) $(this).find("li").first().addClass("active");

				// $navML = parseInt($(this).find("li").first().css("margin-left"), 10),
				// $navMR = parseInt($(this).find("li").first().css("margin-right"), 10);
			}

			$navWidth += $navMR;
			$navPosX -= $navMR;

			$(this).children("span").css({
				width: $navWidth,
				left: $navPosX
			});

			if ($navNull) $(this).children("span").css("opacity", 0);

			$(this).find("li").mouseover(function() {
				var $navW = $(this).outerWidth(),
					$navX = $(this).position().left,
					// $nML = $(this).next().length ? parseInt($(this).next().css("margin-left"), 10),
					$nMR = $(this).prev().length ? parseInt($(this).prev().css("margin-right"), 10) : 0;

				if ($navNull) {
					clearTimeout($timerNav);

					$navPosX = $navX - $nMR;

					$(this).parents(".nav-animate").children("span").css("opacity", 1);
					console.log($navPosX);
				}

				$(this).parents(".nav-animate").children("span").stop().animate({
					width: $navW + $nMR,
					left: $navX - $nMR
				}, "fast");
			}).mouseleave(function() {
				var $span = $(this).parents(".nav-animate").children("span");

				if ($navNull) {
					clearTimeout($timerNav);
					$timerNav = setTimeout(function() {
						console.log($navPosX);
						$span.stop().fadeOut(100, function() {
							$(this).removeAttr("style").css({
								opacity: 0,
								width: $navWidth,
								left: $navPosX
							})
						});
					}, 500);
				} else {
					$span.stop().animate({
						width: $navWidth,
						left: $navPosX
					}, "fast");
				}
			});
		});
	}


	// BEGIN: toggle
	if ($(".toggle").length) {
		$toggleDuration = 500;
		$(".toggle").each(function() {
			if (typeof $(this).attr("data-duration") != "undefined") {
				if ($.inArray($(this).attr("data-duration"), ["slow", "normal", "fast"]) >= 0) $toggleDuration = $(this).attr("data-duration");
				else $toggleDuration = parseInt($(this).attr("data-duration"));
			}
		});

		$("body").on("click", ".toggle-link", function() {
			if ($(this).parents(".toggle").hasClass("active")) {
				$(this).siblings(".toggle-main").stop().slideUp($toggleDuration, function() {
					$(this).removeAttr("style");
					$(this).parents(".toggle").removeClass("active");
				});
			} else {
				$(this).siblings(".toggle-main").stop().slideDown($toggleDuration, function() {
					$(this).removeAttr("style");
					$(this).parents(".toggle").addClass("active");

					// if ($(this).find("[class*=heightLine]").length) heightLine();
				});

				if ($(this).siblings(".toggle-main").find("[class*=heightLine]").length) heightLine();
			}
		});
	}
	// END: toggle

	// BEGIN: tabs - switch
	if ($(".tabs-switch").length) {
		$(".tabs-switch").each(function() {
			var $tabs = $(this),
				$tabLink = $tabs.find(".tab-link"),
				$tabContent = $tabs.find(".tab-content");

			$tabLink.children().each(function() {
				if ($(this).find("img").length && !$(this).find("img").hasClass("over") && !$(this).find("img").hasClass("non-over")) {
					$(this).data("src", $(this).find("img").attr("src"));

					$(this).find("img").attr("src").match(/^(.*)(\.{1}.*)/g);
					$(this).data("active", RegExp.$1 + "_on" + RegExp.$2);
				}
			});

			$tabContent.children().hide();

			if (location.hash) {
				if ($tabLink.children("[data-tab-anchor='" + location.hash + "']").length) $tabLink.children("[data-tab-anchor='" + location.hash + "']").addClass("active");
				else $tabLink.children().first().addClass("active");
			} else if (!$tabLink.children(".active").length) $tabLink.children().first().addClass("active");

			$tabLink.children(".active").find("img").attr("src", $tabLink.children(".active").data("active"));

			$tabContent.children().eq($tabLink.children(".active").index()).show();
		});

		$("body").on("click", ".tab-link > *", function() {
			var $idx = $(this).index(),
				$act = $(this).parent().children(".active"),
				$tabMode = $.inArray($(this).parents(".tabs-switch").attr("data"), ["fade", "slide", "block"]) >= 0 ? $(this).parents(".tabs-switch").attr("data") : "block",
				$tabDuration = $(this).parents(".tabs-switch").attr("data-duration") ? parseInt($(this).parents(".tabs-switch").attr("data-duration")) : 300,
				$tabContent = $(this).parents(".tabs-switch").children(".tab-content");

			$act.find("img").attr("src", $act.data("src"));
			$act.removeClass("active");
			$(this).addClass("active");
			if (!$(this).find("img").hasClass("active")) $(this).find("img").attr("src", $(this).data("active"));

			if ($tabMode == "fade") {
				$tabContent.children().stop().fadeOut($tabDuration, function() {
					$(this).removeAttr("style").hide();
				}).eq($idx).stop().fadeIn($tabDuration, function() {
					$(this).removeAttr("style").show();

					if ($(this).find("[class*=heightLine]").length) heightLine();
				});
			} else if ($tabMode == "slide") {
				$tabContent.children().stop().slideUp($tabDuration, function() {
					$(this).removeAttr("style").hide();
				}).eq($idx).stop().slideDown($tabDuration, function() {
					$(this).removeAttr("style").show();

					if ($(this).find("[class*=heightLine]").length) heightLine();
				});
			} else {
				$tabDuration = $(this).parents(".tabs-switch").attr("data-duration") ? parseInt($(this).parents(".tabs-switch").attr("data-duration")) : 0;

				$tabContent.children().stop().hide($tabDuration, function() {
					$(this).removeAttr("style").hide();
				}).eq($idx).stop().show($tabDuration, function() {
					$(this).removeAttr("style").show();

					if ($(this).find("[class*=heightLine]").length) heightLine();
				});
			}
		});
	}
	// END: tab - switch

	// BEGIN: RSS
	if (typeof rss === "object" && isObjectVar(rss)) {
		var objRss = {};

		for (var r in rss) {
			if (!isNaN(parseFloat(r)) && isFinite(r)) objRss = rss; // multiple
			else objRss[0] = rss; // single
		}
		for (var rssNum in objRss) { // eaching
			var rssData = objRss[rssNum];
			if (typeof rssData != "undefined" && typeof rssData == "object") {
				if (typeof rssData.dateFormat == "undefined") {
					rssData.dateFormat = {
						year: "-",
						month: "-",
						date: ""
					}
				}
				if (typeof rssData.imageSize == "undefined") {
					rssData.imageSize = {
						width: 300,
						height: 200
					}
				}
				if (typeof rssData.elm != "undefined" && $(rssData.elm).length) {
					if (typeof rssData.feedURL != "undefined") {
						var content = typeof rssData.template != "undefined" ? rssData.template : "",
							rssCallbacks = typeof rssData.done === "function" ? rssData.done : function() {};

						var $rssLoop = $(rssData.elm).feed({
							Path		: typeof rssData.url != "undefined" ? rssData.url : "rss.php", //rss.phpă®å ´æ‰€ă€‚éå±¤ăŒå¤‰ă‚ă‚‹æ™‚ă®ă¿å¤‰æ›´ă€‚
							feedURL		: rssData.feedURL, //RSSă®URLă€‚
							indention	: typeof rssData.indention != "undefined" ? rssData.indention : false, //æœ¬æ–‡ă®ă‚½ăƒ¼ă‚¹ă‚’è¡¨ç¤ºă™ă‚‹ă‹ă©ă†ă‹
							MAX			: typeof rssData.max != "undefined" ? rssData.max : 3, //è¨˜äº‹ă®æœ€å¤§æ•°ă€‚
							titleMax	: typeof rssData.titleMax != "undefined" ? rssData.titleMax : 10, //ă‚¿ă‚¤ăƒˆăƒ«ă®æœ€å¤§æ–‡å­—æ•°ă€‚
							postMax		: typeof rssData.postMax != "undefined" ? rssData.postMax : 50, //æœ¬æ–‡ă®æœ€å¤§æ–‡å­—æ•°ă€‚
							endtext		: typeof rssData.endText != "undefined" ? rssData.endText : "...", //æœ€å¤§æ–‡å­—æ•°ă‚’è¶…ăˆăŸå¾Œă«è¿½å ă™ă‚‹ăƒ†ă‚­ă‚¹ăƒˆă€‚
							Datetype	: rssData.dateFormat, //æ—¥ä»˜ă®å½¢å¼ă€€ä¾‹)â—‹â—‹å¹´â—‹â—‹æœˆâ—‹â—‹æ—¥
							Image		: typeof rssData.image != "undefined" ? (rssData.image === true ? "yes" : rssData.image) : "no", //ç”»åƒä»˜ăă®è¨˜äº‹ă‹ă©ă†ă‹ă€€yesă€ă‚‚ă—ăă¯noă§ă€‚
							ImageSize	: rssData.imageSize, //è¡¨ç¤ºă™ă‚‹ç”»åƒă®ă‚µă‚¤ă‚ºă€€width=æ¨ªå¹…ă€€height="ç¸¦å¹…"
							noImage		: typeof rssData.noImage != "undefined" ? (rssData.noImage === true ? "yes" : rssData.noImage) : "no", //No-imageç”»åƒăŒå¿…è¦ă‹ă©ă†ă‹ă€€yesă€ă‚‚ă—ăă¯noă§ă€‚
							noImage_src : typeof rssData.noImageSRC != "undefined" ? rssData.noImageSRC : "shared/img/index/no_image.jpg", //No-imageç”»åƒă®ăƒ‘ă‚¹ă€‚
							source		: function (LINK, TITLE, DATE, POST, IMAGE, COUNT) {
								var post = "";

								if (typeof rssData.template != "undefined") {
									post =
										rssData.template
											.replace(/{title}/ig, TITLE)
											.replace(/{name}/ig, TITLE)
											.replace(/{content}/ig, POST)
											.replace(/{desc}/ig, POST)
											.replace(/{date}/ig, DATE)
											.replace(/{image}/ig, IMAGE)
											.replace(/{img}/ig, IMAGE)
											.replace(/{photo}/ig, IMAGE)
											.replace(/{pic}/ig, IMAGE)

											.replace(/{picture}/ig, IMAGE)
											.replace(/{url}/ig, LINK)
											.replace(/{link}/ig, LINK)
											.replace(/{count}/ig, COUNT)
											.replace(/{total}/ig, COUNT);
								}

								return post;
							}
						}, rssCallbacks);
					} else console.error(rssData.feedURL + " is empty", rssData);
				} else console.error(rssData.elm + " not found", rssData);
			}
		}
	}
	// END: RSS

	// BEGIN: gmap
	if (typeof gmap === "object" && isObjectVar(gmap)) {
		function init() {
			var errorsMap = {
					mapDiv: false,
					latLong: false
				},
				objData = {}; // single || multiMap || multiPoint


			// checking
			if (typeof gmap.maps != "undefined" && Object.keys(gmap.maps).length > 0) { // multi map
				if (typeof gmap.maps[0] == "undefined") { // associative array
					if (typeof gmap.maps.mapDiv == "undefined" || gmap.maps.mapDiv == "") errorsMap.mapDiv = 1;
					else if ((typeof gmap.maps.latitude == "undefined" && typeof gmap.maps.latitude != "number") || (typeof gmap.maps.longitude == "undefined" && typeof gmap.maps.longitude != "number")) errorsMap.latLong = 1;
				} else { // object
					for (var s in gmap.maps) { // loop
						if (typeof gmap.maps[s].mapDiv == "undefined" || gmap.maps[s].mapDiv == "") {
							errorsMap.mapDiv = 2;
							break;
						} else if ((typeof gmap.maps[s].latitude == "undefined" && typeof gmap.maps[s].latitude != "number") || (typeof gmap.maps[s].longitude == "undefined" && typeof gmap.maps[s].longitude != "number")) {
							errorsMap.latLong = 2;
							break;
						}
					}
				}
			} else { // single map
				if (typeof gmap.mapDiv == "undefined" || gmap.mapDiv == "") errorsMap.mapDiv = 3;
				else if ((typeof gmap.latitude == "undefined" && typeof gmap.latitude != "number") || (typeof gmap.longitude == "undefined" || typeof gmap.longitude != "number")) errorsMap.latLong = 3;
			}


			if (errorsMap.mapDiv || errorsMap.latLong) {
				console.info("ERROR", errorsMap);
				return false;
			} else {
				// if ()
				var init = initMap(gmap);
				// console.log(init);
			}

			/*
			 * initialize
			 *
			 */

			function initMap(data) {
				var dataMap = {
						mapDiv: false,
						latitude: false,
						longitude: false,
						center: false,
						zoom: 17,
						minZoom: 2,
						zoomControl: true,
						disableDoubleClickZoom: true,
						mapTypeControl: true,
						scaleControl: true,
						scrollwheel: false,
						panControl: true,
						streetViewControl: true,
						draggable: true,
						overviewMapControl: true,
						style: true,
						name: false,
						desc: false,
						tel: false,
						email: false,
						url: false,
						logo: false,
						clickable: false,
						hover: false,
						html: false,
						multi: false
					};

				// BEGIN: configs default
				if (typeof data.zoom != "undefined" && typeof data.zoom == "number") dataMap.zoom = data.zoom;
				if (typeof data.minZoom != "undefined" && typeof data.minZoom == "number") dataMap.minZoom = data.minZoom;
				if (typeof data.zoomControl != "undefined" && typeof data.zoomControl == "boolean") dataMap.zoomControl = data.zoomControl;
				if (typeof data.disableDoubleClickZoom != "undefined" && typeof data.disableDoubleClickZoom == "boolean") dataMap.disableDoubleClickZoom = data.disableDoubleClickZoom;
				if (typeof data.mapTypeControl != "undefined" && typeof data.mapTypeControl == "boolean") dataMap.mapTypeControl = data.mapTypeControl;
				if (typeof data.scaleControl != "undefined" && typeof data.scaleControl == "boolean") dataMap.scaleControl = data.scaleControl;
				if (typeof data.scrollwheel != "undefined" && typeof data.scrollwheel == "boolean") dataMap.scrollwheel = data.scrollwheel;
				if (typeof data.panControl != "undefined" && typeof data.panControl == "boolean") dataMap.panControl = data.panControl;
				if (typeof data.streetViewControl != "undefined" && typeof data.streetViewControl == "boolean") dataMap.streetViewControl = data.streetViewControl;
				if (typeof data.draggable != "undefined" && typeof data.draggable == "boolean") dataMap.draggable = data.draggable;
				if (typeof data.overviewMapControl != "undefined" && typeof data.overviewMapControl == "boolean") dataMap.overviewMapControl = data.overviewMapControl;

				if (typeof data.name != "undefined" && data.name != "") dataMap.name = data.name;
				if (typeof data.desc != "undefined" && data.desc != "") dataMap.desc = data.desc;
				if (typeof data.tel != "undefined" && data.tel != "") dataMap.tel = data.tel;
				if (typeof data.email != "undefined" && data.email != "") dataMap.email = data.email;
				if (typeof data.url != "undefined" && data.url != "") dataMap.url = data.url;
				if (typeof data.logo != "undefined" && data.logo != "") dataMap.logo = data.logo;

				if (typeof data.clickable != "undefined" && data.clickable != "") dataMap.clickable = data.clickable;
				if (typeof data.html != "undefined" && data.html != "") dataMap.html = data.html;
				if (typeof data.hover != "undefined" && typeof data.hover == "boolean") dataMap.hover = data.hover;

				if (typeof data.multi != "undefined" && Object.keys(data.multi).length > 0) dataMap.multi = data.multi;

				if (typeof data.style != "undefined") {
					dataMap.style = {};
					if (typeof data.style.hue != "undefined") dataMap.style.hue = data.style.hue;
					if (typeof data.style.gamma != "undefined") dataMap.style.gamma = data.style.gamma;
					if (typeof data.style.lightness != "undefined") dataMap.style.lightness = data.style.lightness;
					if (typeof data.style.saturation != "undefined") dataMap.style.saturation = data.style.saturation;
				}
				// END: configs default

				dataMap.mapDiv = data.mapDiv;
				dataMap.latitude = data.latitude;
				dataMap.longitude = data.longitude;

				if (typeof data.maps != "undefined" && Object.keys(data.maps).length > 0) { // multi map
					var objMap = {};
					if (typeof data.maps[0] == "undefined") objMap[0] = data.maps; // object
					else objMap = data.maps; // array

					for (var g in objMap) { // loop
						var obj = objMap[g];

						// BEGIN: override configs
						if (typeof obj.zoom != "undefined" && typeof obj.zoom == "number") dataMap.zoom = obj.zoom;
						if (typeof obj.minZoom != "undefined" && typeof obj.minZoom == "number") dataMap.minZoom = obj.minZoom;
						if (typeof obj.zoomControl != "undefined" && typeof obj.zoomControl == "boolean") dataMap.zoomControl = obj.zoomControl;
						if (typeof obj.disableDoubleClickZoom != "undefined" && typeof obj.disableDoubleClickZoom == "boolean") dataMap.disableDoubleClickZoom = obj.disableDoubleClickZoom;
						if (typeof obj.mapTypeControl != "undefined" && typeof obj.mapTypeControl == "boolean") dataMap.mapTypeControl = obj.mapTypeControl;
						if (typeof obj.scaleControl != "undefined" && typeof obj.scaleControl == "boolean") dataMap.scaleControl = obj.scaleControl;
						if (typeof obj.scrollwheel != "undefined" && typeof obj.scrollwheel == "boolean") dataMap.scrollwheel = obj.scrollwheel;
						if (typeof obj.panControl != "undefined" && typeof obj.panControl == "boolean") dataMap.panControl = obj.panControl;
						if (typeof obj.streetViewControl != "undefined" && typeof obj.streetViewControl == "boolean") dataMap.streetViewControl = obj.streetViewControl;
						if (typeof obj.draggable != "undefined" && typeof obj.draggable == "boolean") dataMap.draggable = obj.draggable;
						if (typeof obj.overviewMapControl != "undefined" && typeof obj.overviewMapControl == "boolean") dataMap.overviewMapControl = obj.overviewMapControl;

						if (typeof obj.style != "undefined") {
							dataMap.style = {};
							if (typeof obj.style.hue != "undefined") dataMap.style.hue = obj.style.hue;
							if (typeof obj.style.gamma != "undefined") dataMap.style.gamma = obj.style.gamma;
							if (typeof obj.style.lightness != "undefined") dataMap.style.lightness = obj.style.lightness;
							if (typeof obj.style.saturation != "undefined") dataMap.style.saturation = obj.style.saturation;
						}

						if (typeof obj.name != "undefined" && obj.name != "") dataMap.name = obj.name;
						if (typeof obj.desc != "undefined" && obj.desc != "") dataMap.desc = obj.desc;
						if (typeof obj.tel != "undefined" && obj.tel != "") dataMap.tel = obj.tel;
						if (typeof obj.email != "undefined" && obj.email != "") dataMap.email = obj.email;
						if (typeof obj.url != "undefined" && obj.url != "") dataMap.url = obj.url;
						if (typeof obj.logo != "undefined" && obj.logo != "") dataMap.logo = obj.logo;
						// END: override configs

						if (typeof obj.clickable != "undefined" && obj.clickable != "") dataMap.clickable = obj.clickable;
						if (typeof obj.html != "undefined" && obj.html != "") dataMap.html = obj.html;
						if (typeof obj.hover != "undefined" && typeof obj.hover == "boolean") dataMap.hover = obj.hover;
						if (typeof obj.multi != "undefined" && Object.keys(obj.multi).length > 0) dataMap.multi = obj.multi;

						dataMap.mapDiv = obj.mapDiv;
						dataMap.latitude = obj.latitude;
						dataMap.longitude = obj.longitude;

						if (typeof obj.center != "undefined") {
							dataMap.center = {};
							if (typeof obj.center.latitude != "undefined") dataMap.center.latitude = obj.center.latitude;
							if (typeof obj.center.longitude != "undefined") dataMap.center.longitude = obj.center.longitude;
						} else	{
							dataMap.center = {
								latitude: obj.latitude,
								longitude: obj.longitude
							};
						}

						loadMap(dataMap);
					}
				} else { // single map
					if (typeof data.center != "undefined") {
						dataMap.center = {};
						if (typeof data.center.latitude != "undefined") dataMap.center.latitude = data.center.latitude;
						if (typeof data.center.longitude != "undefined") dataMap.center.longitude = data.center.longitude;
					} else {
						dataMap.center = {
							latitude: data.latitude,
							longitude: data.longitude
						};
					}

					loadMap(dataMap);
				}

				return dataMap;
			}

			function loadMap(data) {
				var elm = data.mapDiv;

				elm = elm.substring(0, 1) == "#" ? elm.substring(1) : elm; // remove hash

				var mapElement = document.getElementById(elm),
					styleOptions = [],
					mapOptions = {
						center: new google.maps.LatLng(data.center.latitude, data.center.longitude),
						zoom: data.zoom,
						minZoom: data.minZoom,
						zoomControl: data.zoomControl,
						zoomControlOptions: {
							style: google.maps.ZoomControlStyle.DEFAULT,
						},
						disableDoubleClickZoom: data.disableDoubleClickZoom,
						scaleControl: data.scaleControl,
						scrollwheel: data.scrollwheel,
						panControl: data.panControl,
						streetViewControl: data.streetViewControl,
						draggable: data.draggable,
						mapTypeControl: data.mapTypeControl,
						mapTypeControlOptions: {
							style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
						},
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						overviewMapControl: data.overviewMapControl,
						overviewMapControlOptions: {
							opened: false,
						}
					},
					googleMap = new google.maps.Map(mapElement, mapOptions);

				if (data.multi === false) {
					var arr = {};

					if (typeof data["name"] != "undefined") arr["name"] = data["name"];
					if (typeof data["desc"] != "undefined") arr["desc"] = data["desc"];
					if (typeof data["tel"] != "undefined") arr["tel"] = data["tel"];
					if (typeof data["email"] != "undefined") arr["email"] = data["email"];
					if (typeof data["url"] != "undefined") arr["url"] = data["url"];
					if (typeof data["logo"] != "undefined") arr["logo"] = data["logo"];
					if (typeof data["clickable"] != "undefined") arr["clickable"] = data["clickable"];
					if (typeof data["html"] != "undefined") arr["html"] = data["html"];
					if (typeof data["hover"] != "undefined") arr["hover"] = data["hover"];

					arr["longitude"] = data["longitude"];
					arr["latitude"] = data["latitude"];

					setMaps(arr, googleMap, data.center);
				} else {
					for (i = 0; i < Object.keys(data.multi).length; i++) {
						var arr = data.multi[i];

						if (typeof data["clickable"] != "undefined") arr["clickable"] = data.clickable;
						if (typeof data["html"] != "undefined") arr["html"] = data.html;
						if (typeof data["hover"] != "undefined") arr["hover"] = data.hover;

						setMaps(arr, googleMap, data.center);
					}
				}

				// stylers
				if (data.style !== false) {
					if (typeof data.style.hue != "undefined" || typeof data.style.gamma != "undefined" || typeof data.style.lightness != "undefined" || typeof data.style.saturation != "undefined") {
						if (typeof styleOptions[0] == "undefined") styleOptions[0] = {};
						if (typeof styleOptions[0].stylers == "undefined") styleOptions[0].stylers = [];
					}

					if (typeof data.style.hue != "undefined") {
						styleOptions[0].stylers.push({
							hue: data.style.hue
						});
					}
					if (typeof data.style.gamma != "undefined") {
						styleOptions[0].stylers.push({
							gamma: data.style.gamma
						});
					}
					if (typeof data.style.lightness != "undefined") {
						styleOptions[0].stylers.push({
							lightness: data.style.lightness
						});
					}
					if (typeof data.style.saturation != "undefined") {
						styleOptions[0].stylers.push({
							saturation: data.style.saturation
						});
					}
				}

				var styledMapOptions = {
						name: "MAP"
					},
					sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);

				googleMap.mapTypes.set("sample", sampleType);
				googleMap.setMapTypeId("sample");

				// force reset
				googleMap.setZoom(data.zoom);
				googleMap.setCenter(new google.maps.LatLng(data.center.latitude, data.center.longitude));
			}
			function setMaps(obj, map, center) {
				var options = {};

				if (obj["html"] !== false) {
					if (typeof obj["name"] != "undefined") options["title"] = obj["name"];
					if (typeof obj["desc"] != "undefined") options["desc"] = obj["desc"];
					if (typeof obj["tel"] != "undefined") options["tel"] = obj["tel"];
					if (typeof obj["email"] != "undefined") options["email"] = obj["email"];
					if (typeof obj["url"] != "undefined") options["web"] = obj["url"];
				}

				if (typeof obj["logo"] != "undefined") options["icon"] = new google.maps.MarkerImage(obj["logo"]);

				options["position"] = new google.maps.LatLng(obj["latitude"], obj["longitude"]);
				options["map"] = map;

				var marker = new google.maps.Marker(options);

				if (obj["html"] !== false) {
					var dialog = new google.maps.InfoWindow(),
						infoWindowVisible = (function() {
							var currentlyVisible = false;
							return function(visible) {
								if (visible !== undefined) currentlyVisible = visible;
								return currentlyVisible;
							};
						}()),
						dialogShow = (function() {
							return function() {
								if (infoWindowVisible()) {
									dialog.close();
									infoWindowVisible(false);
								} else {
									var tpl = {};
									tpl["name"] = typeof obj["name"] != "undefined" ? obj["name"] : "";
									tpl["desc"] = typeof obj["desc"] != "undefined" ? obj["desc"] : "";
									tpl["tel"] = typeof obj["tel"] != "undefined" ? obj["tel"] : "";
									tpl["email"] = typeof obj["email"] != "undefined" ? obj["email"] : "";
									tpl["url"] = typeof obj["url"] != "undefined" ? obj["url"] : "";

									var html =
										obj["html"]
											.replace(/{name}/ig, tpl["name"])
											.replace(/{title}/ig, tpl["name"])

											.replace(/{txt}/ig, tpl["desc"])
											.replace(/{text}/ig, tpl["desc"])
											.replace(/{desc}/ig, tpl["desc"])
											.replace(/{description}/ig, tpl["desc"])

											.replace(/{tel}/ig, tpl["tel"])
											.replace(/{telephone}/ig, tpl["tel"])
											.replace(/{phone}/ig, tpl["tel"])
											.replace(/{moible}/ig, tpl["tel"])

											.replace(/{mail}/ig, tpl["email"])
											.replace(/{email}/ig, tpl["email"])

											.replace(/{url}/ig, tpl["url"])
											.replace(/{web}/ig, tpl["url"])
											.replace(/{website}/ig, tpl["url"]);

									dialog = new google.maps.InfoWindow({
										content: html
									});
									dialog.open(map, marker);
									infoWindowVisible(true);
								}
							};
						}());

					// events
					google.maps.event.addListener(marker, "click", function() {
						if (obj["clickable"] == "link" && typeof obj["url"] != "undefined" && obj["url"] != "") {
							if (!isExternal(obj["url"]) && $(obj["url"]).length) {
								$("html, body").stop().animate({
									scrollTop: $(obj["url"]).offset().top
								}, 500);
							} else window.open(obj["url"], "_parent");
						} else if (obj["clickable"] == "popup" && isHTML(obj.html)) dialogShow();
					});
					google.maps.event.addListener(dialog, "closeclick", function() {
						infoWindowVisible(false);
					});

					if (obj["hover"] === true && obj["clickable"] == "link") {
						google.maps.event.addListener(marker, "mouseover", function() {
							dialogShow();
						});
						google.maps.event.addListener(marker, "mouseout", function() {
							dialog.close();
							infoWindowVisible(false);
						});
					}
				}

				/*
				window.onresize = function(event) {
					google.maps.event.trigger(map, "resize");
					map.setCenter(new google.maps.LatLng(center.latitude, center.longitude));
				};
				*/

				// always center
				google.maps.event.addDomListener(window, "resize", function() {
					var center = map.getCenter();
					google.maps.event.trigger(map, "resize");
					// map.setCenter(new google.maps.LatLng(center.latitude, center.longitude));
					map.setCenter(center);
				});

				google.maps.event.addListenerOnce(map, "idle", function() {
					google.maps.event.trigger(map, "resize");
					map.setCenter(new google.maps.LatLng(center.latitude, center.longitude));
				});

				// google.maps.event.trigger(map, "resize"); // onload
			}
		}
		google.maps.event.addDomListener(window, "load", init);
	}
	// END: gmap

	// BEGIN: rollover button
	$("body").on({
		mouseover: function() {
			if (!$(this).data("src-original")) $(this).data("src-original", $(this).attr("src"));

			$(this).attr("src").match(/^(.*)(\.{1}.*)/g);

			var $src = RegExp.$1 + "_on" + RegExp.$2;

			$(this).attr("src", $src); // update src
		}, mouseout: function() {
			if ($(this).data("src-original")) {
				$(this).attr("src", $(this).data("src-original")); // update src
				$(this).removeData("src-original")
			}
		}
	}, "img.btn");
	// END: rollover button

	// BEGIN: smooth scroll
	$("body").on("click", "a[href*=#]:not([href=#])", function(e) {
		// .nav-fixed: elm sáº½ cá»‘ Ä‘á»‹nh
		// .nav-target: tá»a Ä‘á»™ sáº½ tĂ­nh
		// .nav-pin: elm sáº½ gáº¯n .fixed
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			var ptnHash = /([;?%&,+*~\':"!^$[\]()=>|\/@])/g,
				hash = this.hash.replace(ptnHash, "\\$1"),
				$anchor = $(hash);

			$anchor = $anchor.length > 0 ? $anchor : $("[name=" + hash.slice(1) +"]");

			if ($anchor.length) {
				e.preventDefault();

				var $offsetY = $anchor.offset().top,
					$navOffset = 0;

				if ($(".nav-fixed").length) $navOffset = typeof $(".nav-fixed").attr("data-height") != "undefined" ? parseInt($(".nav-fixed").attr("data-height")) : $(".nav-fixed").outerHeight();

				if ($(".tabs-switch").length) {
					$(".tabs-switch").each(function() {
						var $tabs = $(this),
							$tabLink = $tabs.children(".tab-link");

						if ($tabLink.children("[data-tab-anchor='" + hash + "']").length) $tabLink.children("[data-tab-anchor='" + hash + "']").click();
					});
				}

				if ($(".nav-target").length) {
					// $("html, body").stop().animate({
						// scrollTop: $(".nav-target").offset().top + 10
					// }, 100, function() {
						if ($(".nav-fixed").length) $navOffset = typeof $(".nav-fixed").attr("data-height") != "undefined" ? parseInt($(".nav-fixed").attr("data-height")) : $(".nav-fixed").outerHeight();

						$("html, body").stop().animate({
							scrollTop: $offsetY - $navOffset
						}, 500);
					// });
				} else {
					$("html, body").stop().animate({
						scrollTop: $offsetY - $navOffset
					}, 500);
				}

				// window.location.hash = hash; // update localtion

				return false;
			}
		}
	});
	// END: smooth scroll

	// BEGIN: scroll to top
	if ($(window).scrollTop() > 0) $("#pagetop").addClass("visible");
	else $("#pagetop").removeClass("visible");

	$("body").on("click", "#pagetop", function() {
		if (!$(this).hasClass("in-scroll")) {
			$(this).addClass("in-scroll");

			var $scrollDuration = $.inArray($(this).attr("data-duration"), ["slow", "normal", "fast"]) >= 0 || parseInt($(this).attr("data-duration")) > 0 ? $(this).attr("data-duration") : "slow";

			$("html, body").stop().animate({
				scrollTop: 0
			}, $scrollDuration, function() {
				$("#pagetop").removeClass("in-scroll");
			});
		}
	});
	// END: scroll to top

	// BEGIN: text vertical
	$(".txt-vertical").each(function() {
		if (!$(this).hasClass("all-str")) {
			var $regex = /(\d{1,2})/g;

			if ($(this).hasClass("per-line")) $regex = /(\d)/g;

			$(this).html(function(idx, val) {
				return val.replace($regex, '<span class="int">$1</span>');
			});
		}

		if ($(this).children(".txt-normal").length) {
			$(this).children(".txt-normal").html(function(idx, val) {
				var $characters = $.trim(val).split("");
				return '<span class="int">' + $characters.join('</span><span class="int">') + '</span>';
			});
		}
	});
	$(".txt-vertical-x").each(function() {
		$(this).html($(this).text().replace(/(.)/g, "<span>$1</span>"));
	});
	// END: text vertical

	// BEGIN: social button
	var __socialsHTML__ = "",
		__socialsLang = $("html").attr("lang") !== undefined && $.trim($("html").attr("lang")).length == 2 ? $.trim($("html").attr("lang")).toLowerCase() : "ja",
		$socialsLine = "",
		$socialsTwitter = "",
		$socialsFacebook = "",
		$socialsGooglePlus = "",
		locationURL = window.location.href || location.href;

	$socialsTwitter += '<div class="twitter">';
		$socialsTwitter += '<a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>';
		$socialsTwitter += '<script type="text/javascript">!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';
	$socialsTwitter += '</div>';

	$socialsFacebook += '<div class="facebook">';
		$socialsFacebook += '<div class="fb-like" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>';
	$socialsFacebook += '</div>';

	$socialsGooglePlus += '<div class="google">';
		$socialsGooglePlus += '<div class="g-plusone" data-size="medium"></div>';
	$socialsGooglePlus += '</div>';

	$socialsGooglePlus += '<div class="line-social">';
		$socialsLine += '<div class="line-it-button" data-lang="' + __socialsLang + '" data-type="like" data-url="' + locationURL + '" style="display: none;">';
			$socialsLine += '<script src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" async="async" defer="defer"></script>';
		$socialsLine += '</div>';
	$socialsLine += '</div>';

	if ($("#socialbuttons").length) {
		var $socialsOrder = typeof $("#socialbuttons").attr("data") != "undefined" ? $("#socialbuttons").attr("data").split("") : false;

		if (typeof $socialsOrder == "object" && $socialsOrder.length) {
			for (var socialsType in $socialsOrder) {
				if ($.trim(socialsType).length > 0) {
					socialsType = socialsType.toLowerCase();

					if ($socialsOrder[socialsType].toLocaleLowerCase() === "f") __socialsHTML__ += $socialsFacebook;
					else if ($socialsOrder[socialsType].toLocaleLowerCase() === "t") __socialsHTML__ += $socialsTwitter;
					else if ($socialsOrder[socialsType].toLocaleLowerCase() === "g") __socialsHTML__ += $socialsGooglePlus;
					else if ($socialsOrder[socialsType].toLocaleLowerCase() === "l") __socialsHTML__ += $socialsLine;
				}
			}
		} else {
			__socialsHTML__ += $socialsTwitter;
			__socialsHTML__ += $socialsFacebook;
			__socialsHTML__ += $socialsGooglePlus;
			__socialsHTML__ += $socialsLine;
		}

		$("#socialbuttons").html(__socialsHTML__);
	}
	// END: social button

	/* fix smoothscroll on IE */
	if (navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
		$("body").on("mousewheel", function (e) {
			event.preventDefault();
			window.scrollTo(0, window.pageYOffset - event.wheelDelta);
		});
	}

	// scrollBefore(); // smoothscroll before page loaded

	$("body").on({
		mouseup: function() {
			$(this).removeClass("scrollable");
		}, mousedown: function() {
			$(this).addClass("scrollable");
		}, mouseleave: function() {
			$(this).removeClass("scrollable");
		}
	}, ".gmap");
});

// user agents
var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

$(window).resize(function() {
	// fix bg parallax on mobile
	if (isMobile.any()) $(".bg-parallax").css("background-attachment", "inherit");
	else $(".bg-parallax").css("background-attachment", "");
}).on("scroll resize", function() {
	if ($(this).scrollTop() > 0) $("#pagetop").addClass("visible");
	else $("#pagetop").removeClass("visible");

	if ($(".nav-fixed").length) {
		var $navPinY = $(".nav-target").length ? $(".nav-target").offset().top - $(".nav-fixed").outerHeight() - 1 : $(".nav-fixed").offset().top;
		if ($(this).scrollTop() > $navPinY) {
			if ($(".nav-pin").length) $(".nav-pin").addClass("fixed");
			else $(".nav-fixed").addClass("fixed");
		} else {
			if ($(".nav-pin").length) $(".nav-pin").removeClass("fixed");
			else $(".nav-fixed").removeClass("fixed");
		}
	}
}).on("load", function() {
	// scrollBefore();
});

var scrollBefore = function() {
	if (location.hash) {
		var ptnHash = /([;?%&,+*~\':"!^$[\]()=>|\/@])/g,
			hash = location.hash;

		hash = hash.replace(ptnHash, "\\$1");
		if ($(hash).length) {
			if ($(".nav-fixed").length) {
				var $offsetY = $(hash).offset().top;

				// if ($(".nav-pin").length) $offsetY -= $(".nav-pin").outerHeight();
				$offsetY -= $(".nav-fixed").outerHeight();

				setTimeout(function() {
					window.scroll(0, $offsetY);
				}, 10);

				$("a[href=" + hash + "]").click();
			}
		}
	}
};

scrollBefore(); // DOM loaded



/*
 * Plugins/Functions
 *
 */

// check object is variable or DOM elements
function isObjectVar(obj) {
	return ((typeof obj != "undefined") && (typeof obj === "object") && (obj.nodeType !== 1) && (typeof obj.ownerDocument !== "object"));
}

(function($) {
	// BEGIN: $.feed
	$.fn.feed = function (option, callbacks) {
		var option = $.extend({
			Path		: "",
			BOX			: $(this),
			feedURL		: "",
			MAX			: 5,
			titleMax	: 40,
			postMax		: 100,
			endtext		: "...",
			indention	: "no",
			Datetype	: { year: "å¹´", month: "æœˆ", date: "æ—¥" },
			Image		: "no",
			ImageSize	: { width: "200", height: "150"}, //è¡¨ç¤ºă™ă‚‹ç”»åƒă®ă‚µă‚¤ă‚º
			noImage		: "no",
			noImage_src : "shared/img/shared/no_image.jpg",
			source		: "",
			done		: false
		}, option);

		$.ajax({
			url: option["Path"] + "?url=" + option["feedURL"],
			crossDomain: true,
			cache: false,
			async: false,
			type:'GET',
			dataType:'xml',
			error: function(){ return false; },
			success: function(data){
				var cnt = 0,
					imgTbl = [],
					img = "",
					src = "",
					ss = "",
					html = "";

			$(option["BOX"]["selector"]).empty(); // clear template

			//è¦ç´ ă‚’å…¨ă¦é…åˆ—ă«
			$(data).find("item").each(function(){
				var title = $("title",this).text(), //ă‚¿ă‚¤ăƒˆăƒ«
					link = $("link",this).text(), //ăƒªăƒ³ă‚¯å…ˆ
					ex = $("description",this).text(); //æ³¨é‡ˆæ–‡ç« 

					//æœ¬æ–‡ă®ă‚½ăƒ¼ă‚¹ă‚’è¡¨ç¤ºă™ă‚‹ă‹ă©ă†ă‹
					if(option.indention === "yes") ex = $('encoded',this).text();

					//ă‚¹ăƒăƒ¼ă‚¹ă‚’å‰é™¤
					ex.replace(/\s+/g, "");
					ex.replace(" ", "");

					//ă‚¿ă‚¤ăƒˆăƒ«ăŒ1è¡Œă«åă¾ă‚‰ăªă„å ´åˆă€èª¿æ•´
					if (title.length > option.titleMax) {
						var rename = title.substring(0,option.titleMax-1) + option.endtext;
						title = rename;
					}

					//æœ¬æ–‡ă®èª¿æ•´
					if (ex.length > option.postMax) {
						var retxt = ex.substring(0,option.postMax-1) + option.endtext;
						ex = retxt;
					}

					//æ—¥ä»˜å–å¾—
					var Datetxt = $("pubDate",this).text(),
						year = Datetxt.substring(12, 16),
						month = Datetxt.substring(8, 11),
						date = Datetxt.substring(5, 7);

					//è‹±èªè¡¨è¨˜ă®æœˆă‚’æ—¥æœ¬èªă«å¤‰æ›
					if (month == "Jan") month = "01";
					if (month == "Feb") month = "02";
					if (month == "Mar") month = "03";
					if (month == "Apr") month = "04";
					if (month == "May") month = "05";
					if (month == "Jun") month = "06";
					if (month == "Jul") month = "07";
					if (month == "Aug") month = "08";
					if (month == "Sep") month = "09";
					if (month == "Oct") month = "10";
					if (month == "Nov") month = "11";
					if (month == "Dec") month = "12";

					//æ—¥ä»˜ă®å½¢å¼
					date = year + option.Datetype.year + month + option.Datetype.month + date + option.Datetype.date;

					//ç”»åƒă®å–å¾—
					if(option.Image !== "no") {

						ss = $(this).find('[nodeName="content:encoded"]').context.textContent;
						html = $.parseHTML( ss );

						imgTbl.length = 0;


						var AllImage = $(html).find("img");

						for (i=0, Max=AllImage.length; i<Max; i++) {
							//çµµæ–‡å­—ă‚’é™¤å¤–ă™ă‚‹
							if (!$(AllImage)[i].src.match("s.w.org")) Array.prototype.push.apply(imgTbl, [$(AllImage)[i].src]);
						}

						if (imgTbl[0]) src = imgTbl[0];
						else src = option.noImage_src; //no-imageç”»åƒ

						if (option.noImage === "yes") {
							img = '<span style="display:block; background: url(' + src + ') no-repeat center center; background-size:cover; width:' + option.ImageSize.width + 'px; height:' + option.ImageSize.height + 'px;"></span>';
						}

						if (option.noImage === "no") {
							if ($(html).find("img")[0]) img = '<span style="display:block; background: url(' + src + ') no-repeat center center; background-size:cover; width:' + option.ImageSize.width + 'px; height:' + option.ImageSize.height + 'px;"></span>';
							else img = '<span class="no-image" style="display:none;"></span>';
						}
					}

					//å‡ºå›ă®ă‚½ăƒ¼ă‚¹
					if(!title.match("PR")) {
						var postdata = option.source,
							post = postdata(link,title,date,ex,img,cnt);

						$(option.BOX.selector).append(post);
					}

					//çµ‚äº†ăƒ•ăƒ©ă‚°
					cnt++;
					if(cnt > (option.MAX -1)) return false;
				});
			}
		}).done(function() {
			if (typeof callbacks === "function") callbacks.call(this);
		});
	};
	// END: $.feed

	// BEGIN: $.fcvScroll
	$.fn.fcvScroll = function(options) {
		var options = $.extend({
			selector: ".section", // selector
			delay: 50, // time delay (ms)
			duration: 400, // time duration (ms)
			reference: .9,
		}, options);

		if (options.selector) {
			var $wrapper = $(this),
				$offsetSelectors = [],
				$scrollDown = true,
				$scrollPos = $(window).scrollTop(),
				$scrollTimer = null;

			$wrapper.find(options.selector).each(function(i) {
				$offsetSelectors.push($(this).offset().top); // offsetY fined
			});

			$(window).scroll(function() {
				$scrollDown = $(window).scrollTop() >= $scrollPos;
				$scrollPos = $(window).scrollTop();

				clearTimeout($scrollTimer);

				if ($.inArray($(window).scrollTop(), $offsetSelectors) < 0) { // not in area fined
					$scrollTimer = setTimeout(function() { // fcv-snap
						var $scrollTop = $(window).scrollTop(),
							$posY = $(window).height() * options.reference,
							$position = 0,
							$target;

							if ($scrollDown) { // direction down
								$position = $scrollTop + $posY - 1;
								$wrapper.find(options.selector).each(function() {
									var $offsetY = $(this).offset().top;
									if (($offsetY > $scrollTop) && ($offsetY <= $position)) {
										$target = $(this);
										return false;
									}
								});
							} else { // direction up
								$position = $scrollTop - $posY + 1;
								$wrapper.find(options.selector).each(function() {
									var $offsetY = $(this).offset().top;
									if (($offsetY < $scrollTop) && ($offsetY >= $position)) {
										$target = $(this);
										return false;
									}
								});
							}

							if ($target) {
								$("html, body").stop().animate({
									scrollTop: $target.offset().top
								}, options.duration, function() {
									clearTimeout($scrollTimer);
								});
							}
					}, options.delay);
				}
			}).resize(function() {
				if ($(options.selector).hasClass("minHeight")) {
					$(options.selector).css({
						minHeight: $(window).height()
					});
				} else {
					$(options.selector).css({
						height: $(window).height()
					});
				}
			}).trigger("resize");
		} else console.error("Missing selector");

		return this;
	};
	// END: $.fcvScroll
})(jQuery);

// BEGIN: heightLine
function heightLine() {

	this.className="heightLine";
	this.parentClassName="heightLineParent"
	reg = new RegExp(this.className+"-([a-zA-Z0-9-_]+)", "i");
	objCN =new Array();
	var objAll = document.getElementsByTagName ? document.getElementsByTagName("*") : document.all;
	for(var i = 0; i < objAll.length; i++) {
		if (typeof objAll[i].className == "string") {
			var eltClass = objAll[i].className.split(/\s+/);
			for(var j = 0; j < eltClass.length; j++) {
				if(eltClass[j] == this.className) {
					if(!objCN["main CN"]) objCN["main CN"] = new Array();
					objCN["main CN"].push(objAll[i]);
					break;
				}else if(eltClass[j] == this.parentClassName){
					if(!objCN["parent CN"]) objCN["parent CN"] = new Array();
					objCN["parent CN"].push(objAll[i]);
					break;
				}else if(eltClass[j].match(reg)){
					var OCN = eltClass[j].match(reg)
					if(!objCN[OCN]) objCN[OCN]=new Array();
					objCN[OCN].push(objAll[i]);
					break;
				}
			}
		}
	}

	//check font size
	var e = document.createElement("div");
	var s = document.createTextNode("S");
	e.appendChild(s);
	e.style.classname="check-fontsize";
	e.style.visibility="hidden";
	e.style.position="absolute";
	e.style.top="0";
	document.body.appendChild(e);
	var defHeight = e.offsetHeight;

	changeBoxSize = function(){
		for(var key in objCN){
			if (objCN.hasOwnProperty(key)) {
				//parent type
				if(key == "parent CN"){
					for(var i=0 ; i<objCN[key].length ; i++){
						var max_height=0;
						var CCN = objCN[key][i].childNodes;
						for(var j=0 ; j<CCN.length ; j++){
							if(CCN[j] && CCN[j].nodeType == 1){
								CCN[j].style.height="auto";
								max_height = max_height>CCN[j].offsetHeight?max_height:CCN[j].offsetHeight;
							}
						}
						for(var j=0 ; j<CCN.length ; j++){
							if(CCN[j].style){
								var stylea = CCN[j].currentStyle || document.defaultView.getComputedStyle(CCN[j], '');
								var newheight = max_height;
								if(stylea.paddingTop)newheight -= stylea.paddingTop.replace("px","");
								if(stylea.paddingBottom)newheight -= stylea.paddingBottom.replace("px","");
								if(stylea.borderTopWidth && stylea.borderTopWidth != "medium")newheight-= stylea.borderTopWidth.replace("px","");
								if(stylea.borderBottomWidth && stylea.borderBottomWidth != "medium")newheight-= stylea.borderBottomWidth.replace("px","");
								CCN[j].style.height =newheight+"px";
							}
						}
					}
				}else{
					var max_height=0;
					for(var i=0 ; i<objCN[key].length ; i++){
						objCN[key][i].style.height="auto";
						max_height = max_height>objCN[key][i].offsetHeight?max_height:objCN[key][i].offsetHeight;
					}
					for(var i=0 ; i<objCN[key].length ; i++){
						if(objCN[key][i].style){
							var stylea = objCN[key][i].currentStyle || document.defaultView.getComputedStyle(objCN[key][i], '');
								var newheight = max_height;
								if(stylea.paddingTop)newheight-= stylea.paddingTop.replace("px","");
								if(stylea.paddingBottom)newheight-= stylea.paddingBottom.replace("px","");
								if(stylea.borderTopWidth && stylea.borderTopWidth != "medium")newheight-= stylea.borderTopWidth.replace("px","")
								if(stylea.borderBottomWidth && stylea.borderBottomWidth != "medium")newheight-= stylea.borderBottomWidth.replace("px","");
								objCN[key][i].style.height =newheight+"px";
						}
					}
				}
			}
		}
	}

	checkBoxSize = function(){
		if(defHeight != e.offsetHeight){
			changeBoxSize();
			defHeight= e.offsetHeight;
		}

		// var elm = document.querySelector(".check-fontsize");
		// if (elm) elm.parentNode.removeChild(elm);
	}
	changeBoxSize();
	setInterval(checkBoxSize,1000)
	window.onresize=changeBoxSize;
}

function addEvent(elm,listener,fn){
	try{
		elm.addEventListener(listener,fn,false);
	}catch(e){
		elm.attachEvent("on"+listener,fn);
	}
}
addEvent(window,"load",heightLine);
// END: heightLine

(function() { // DOM loaded
	// facebook
	if (document.getElementById("fb-root")) {
		var fbScript = document.createElement("script"),
			fbScriptContent = "";

		fbScriptContent += '(function(d, s, id) {';
			fbScriptContent += 'var js, fjs = d.getElementsByTagName(s)[0];';
			fbScriptContent += 'if (d.getElementById(id)) return;';
			fbScriptContent += 'js = d.createElement(s);';
			fbScriptContent += 'js.id = id;';
			fbScriptContent += 'js.src = "http://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.8";';
			fbScriptContent += 'fjs.parentNode.insertBefore(js, fjs);';
		fbScriptContent += '}(document, "script", "facebook-jssdk"));';

		fbScript.innerHTML = fbScriptContent;
		document.body.appendChild(fbScript);
	}

	// WOW js
	if (typeof window["WOW"] === "function") {
		var $wowData = {
				box: typeof $("body").attr("data-wow-box") != "undefined" ? $("body").attr("data-wow-box") : "wow",
				animate: typeof $("body").attr("data-wow-animate") != "undefined" ? $("body").attr("data-wow-animate") : "animated",
				offset: typeof $("body").attr("data-wow-offset") != "undefined" ? parseInt($("body").attr("data-wow-offset")) : 0,
				mobile: $.inArray($("body").attr("data-wow-mobile"), ["true", "on", "enable", "enabled", "1"]) >= 0 ? true : false,
				live: $.inArray($("body").attr("data-wow-live"), ["true", "on", "enable", "enabled", "1"]) >= 0 ? true : false,
				callback: function() {},
				scrollContainer: null
			};

		if (typeof $("body").attr("data-wow-offset") == "undefined") $wowData.mobile = true;
		if (typeof $("body").attr("data-wow-live") == "undefined") $wowData.live = true;

		new WOW($wowData).init();
	}
})();

// conflicts
if (!Object.keys) {
	Object.keys = (function() {
		"use strict";
		var hasOwnProperty = Object.prototype.hasOwnProperty,
			hasDontEnumBug = !({
				toString: null
			}).propertyIsEnumerable("toString"),
			dontEnums = [
				"toString",
				"toLocaleString",
				"valueOf",
				"hasOwnProperty",
				"isPrototypeOf",
				"propertyIsEnumerable",
				"constructor"
			],
			dontEnumsLength = dontEnums.length;

		return function(obj) {
			if (typeof obj !== "object" && (typeof obj !== "function" || obj === null)) {
				throw new TypeError("Object.keys called on non-object");
			}

			var result = [],
				prop, i;

			for (prop in obj) {
				if (hasOwnProperty.call(obj, prop)) {
					result.push(prop);
				}
			}

			if (hasDontEnumBug) {
				for (i = 0; i < dontEnumsLength; i++) {
					if (hasOwnProperty.call(obj, dontEnums[i])) {
						result.push(dontEnums[i]);
					}
				}
			}
			return result;
		};
	}());
}

function isHTML(str) {
	var a = document.createElement("div");
	a.innerHTML = str;
	for (var child = a.childNodes, i = child.length; i--;) {
		if (child[i].nodeType == 1) return true;
	}
	return false;
}

var checkDomain = function(url) {
	if (url.indexOf('//') === 0) url = location.protocol + url;
	return url.toLowerCase().replace(/([a-z])?:\/\//, "$1").split("/")[0];
};
var isExternal = function(url) {
	return ((url.indexOf(":") > -1 || url.indexOf("//") > -1) && checkDomain(location.href) !== checkDomain(url));
};