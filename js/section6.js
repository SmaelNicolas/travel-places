export const section_6_start = () => {
	let manyInView;
	let slidesInView;
	let windowWidth = window.innerWidth;
	if (windowWidth >= 920) {
		manyInView = 3;
		slidesInView = 3;
	}
	if (windowWidth >= 725 && windowWidth < 920) {
		manyInView = 2;
		slidesInView = 2;
	}
	if (windowWidth < 725) {
		manyInView = 1;
		slidesInView = 1;
	}
	new Swiper(".mySwiper", {
		slidesPerView: manyInView,
		spaceBetween: 30,
		slidesPerGroup: slidesInView,
		loop: true,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	document.getElementById("Section6").addEventListener("mouseenter", () => {
		document.getElementById("nextPlacesSection6").style.display = "flex";
		document.getElementById("prevPlacesSection6").style.display = "flex";
	});

	document.getElementById("Section6").addEventListener("mouseleave", () => {
		document.getElementById("nextPlacesSection6").style.display = "none";
		document.getElementById("prevPlacesSection6").style.display = "none";
	});
};
