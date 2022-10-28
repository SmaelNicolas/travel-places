export const carouselDownloadStart = () => {
	new Swiper(".mySwiper", {
		slidesPerView: 3,
		spaceBetween: 30,
		slidesPerGroup: 3,
		loop: true,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	document
		.getElementById("CarouselDownloads")
		.addEventListener("mouseenter", () => {
			document.getElementById(
				"nextPlacesCarouselDownloads"
			).style.display = "flex";
			document.getElementById(
				"prevPlacesCarouselDownloads"
			).style.display = "flex";
		});

	document
		.getElementById("CarouselDownloads")
		.addEventListener("mouseleave", () => {
			document.getElementById(
				"nextPlacesCarouselDownloads"
			).style.display = "none";
			document.getElementById(
				"prevPlacesCarouselDownloads"
			).style.display = "none";
		});

	document
		.getElementById("placesCaouselDownloadsIconDwl")
		.addEventListener("click", () => {
			console.log("HOLA");
		});
};
