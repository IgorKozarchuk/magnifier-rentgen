// jQuery Magnifier Plugin

$.fn.magnifier = function() {
	
	return this.each(function() {

		var th = $(this);
		var dataImage = th.data("image");
		var dataImageZoom = th.data("image-zoom");
		var dataLoupeSize = th.data("loupe-size");

		th.addClass('magnifier');
		th.resize(function() {
			th.find('.data-image, .magnifier-loupe img').css({
				'width': th.width()
			});
		});
		th.append('<img class="data-image" src="' + dataImage + '"><div class="magnifier-loupe"><img src="' + dataImageZoom + '">');
		th.find('.data-image').css({
			'width': th.width()
		}).siblings('.magnifier-loupe').css({
			'width': dataLoupeSize,
			'height': dataLoupeSize
		}).find('img').css({
			'position': 'absolute',
			'width': th.width()
		});
		th.hover(function() {
			th.find('.magnifier-loupe').stop().fadeToggle(); // stop() - to canceal multiple animations
		});

		th.mousemove(function(event) {
			var elemPos = {};
			var offset = th.offset();

			elemPos = {
				left: event.pageX - offset.left - dataLoupeSize / 2,
				top: event.pageY - offset.top - dataLoupeSize / 2
			};

			th.find('.magnifier-loupe').css({
				'left': elemPos.left,
				'top': elemPos.top
			});

			th.find('img').css({
				'left': -elemPos.left,
				'top': -elemPos.top,
				'width': th.width()
			});
		});

		$(window).resize(function() {
			$('.magnifier').resize();
		});

	});

}
