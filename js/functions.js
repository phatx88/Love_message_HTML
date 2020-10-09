$(function(){
	$(".tricky").on({
		mouseover:function(){
			$(this).css({
				left:(Math.random()*90)+"%",
				top:(Math.random()*90)+"%",
			});
		}
	});
	$(".btn-wrap").hover(function() {
		   $(this).toggleClass('active');
	});
});

$('.tricky').bind('touchstart', function(){
	$(this).css({
		left:(Math.random()*90)+"%",
		top:(Math.random()*90)+"%"
	});
})



// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
	var newWidth = $win.width();
	var newHeight = $win.height();
	if (newWidth != clientWidth && newHeight != clientHeight) {
		location.replace(location);
	}
});



(function ($) {
	$.fn.typewriter = function () {
		this.each(function () {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			$ele.show();
			var timer = setInterval(function () {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
					while (str.substr(progress, 1) == "\t")
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
					$('div.btn-wrap, #animationWindow').toggleClass('display');
					$('div.btn-wrap').addClass('animated');
				}
			}, 75);
		});
		
		return this;
	};
})(jQuery);


