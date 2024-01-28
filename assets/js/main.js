(function ($) {

	$(document).ready(function () {
		// Accordion
		$('.custom-accordion .accordion__title').on("click", function (event) {
			if (event.target.nodeName === "A" || event.target.nodeName === "SPAN" || event.target.nodeName === "IMG") {
				event.preventDefault();
				console.log("Hello");
			}
			var parent = $(this).parent();
			parent.toggleClass('active');
			var content = parent.find('.accordion__content');
			var height = content.children().first().height();
			content.css('height', (content.height() > 0) ? 0 : height + 'px');
		});

		// Welcome section Swiper Slide Text
		var swiper1 = new Swiper('.swiper-1', {
			direction: 'vertical',
			loop: true,
			allowTouchMove: false
		});

		// Featured Slider Text
		var swiper2 = new Swiper(".mySwiper", {
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});
		function showContent() {
			var activeItem = $(".featured-slider .swiper-slide-active").children().first();
			var title = activeItem.attr("data-title");
			var location = activeItem.attr("data-location");
			console.log(title);
			console.log(location);
			$(".featured-content h3").text(title);
			$(".featured-content p").text(location);
		}
		showContent();
		swiper2.on('slideChange', function () {
			setTimeout(function () {
				showContent();
			}, 0)
		});

		var carouselTicker = $("#carouselTicker").carouselTicker({
			speed: 3
		});

		// Mousewheel event
		$("body").on("mousewheel", function (e) {
			if (e.deltaY > 0) {
				carouselTicker.next();
			} else {
				carouselTicker.prev();
			}
		});


		// AOS
		AOS.init({
			once: true,
		});

		// Mousewheel event
		$(".welcome-video").on("mousewheel", function (e) {
			var currentItem = swiper1.activeIndex;
			var total = swiper1.slides.length - swiper1.loopedSlides * 2;
			if (e.deltaY > 0) {
				if (!(currentItem === 1)) {
					swiper1.slidePrev();
					e.preventDefault();
				}
			} else {
				if (!(currentItem === total)) {
					swiper1.slideNext();
					e.preventDefault();
				}
			}
		});

		// Owl Carousel
		// const fsItems = $(".fs-items");
		// fsItems.owlCarousel({
		// 	items: 1,
		// 	dots: true,
		// 	nav: true,
		// 	loop: true,
		// 	navText: [
		// 		'<img src="assets/img/icons/slide-left.svg" />',
		// 		'<img src="assets/img/icons/slide-right.svg" />',
		// 	],
		// 	onChanged: function () {
		// 		setTimeout(function () {
		// 			var activeItem = $(".fs-items .owl-item.active").children().first();
		// 			var title = activeItem.attr("data-title");
		// 			var location = activeItem.attr("data-location");
		// 			$(".fs-item__title").text(title);
		// 			$(".fs-item__location").text(location);
		// 		}, 100);
		// 	}
		// });
	});
})(jQuery);