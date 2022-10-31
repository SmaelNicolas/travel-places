export const startCarouselOneImage = () => {
	let dot1 = document.getElementById("carouselOneImageDot1");
	let dot2 = document.getElementById("carouselOneImageDot2");
	let dot3 = document.getElementById("carouselOneImageDot3");

	let image1 = document.getElementById("carouselOneImageImg1");
	let image2 = document.getElementById("carouselOneImageImg2");
	let image3 = document.getElementById("carouselOneImageImg3");

	let containerText1 = document.getElementById(
		"containerCarouselOneImageText1"
	);
	let containerText2 = document.getElementById(
		"containerCarouselOneImageText2"
	);
	let containerText3 = document.getElementById(
		"containerCarouselOneImageText3"
	);

	dot1.addEventListener("click", () => {
		console.log("HACE CLICK");
		image1.classList.add("showCarouselOneImage");
		image2.classList.remove("showCarouselOneImage");
		image3.classList.remove("showCarouselOneImage");
		dot1.classList.add("changeBackgroundColorDot");
		dot2.classList.remove("changeBackgroundColorDot");
		dot3.classList.remove("changeBackgroundColorDot");
	});
	dot2.addEventListener("click", () => {
		image1.classList.remove("showCarouselOneImage");
		image2.classList.add("showCarouselOneImage");
		image3.classList.remove("showCarouselOneImage");
		dot1.classList.remove("changeBackgroundColorDot");
		dot2.classList.add("changeBackgroundColorDot");
		dot3.classList.remove("changeBackgroundColorDot");
	});
	dot3.addEventListener("click", () => {
		image1.classList.remove("showCarouselOneImage");
		image2.classList.remove("showCarouselOneImage");
		image3.classList.add("showCarouselOneImage");
		dot1.classList.remove("changeBackgroundColorDot");
		dot2.classList.remove("changeBackgroundColorDot");
		dot3.classList.add("changeBackgroundColorDot");
	});

	image1.addEventListener("mouseenter", () => {
		containerText1.classList.toggle("showTextContainerCarousel");
	});
	image1.addEventListener("mouseleave", () => {
		containerText1.classList.toggle("showTextContainerCarousel");
	});
	image2.addEventListener("mouseenter", () => {
		containerText2.classList.toggle("showTextContainerCarousel");
	});
	image2.addEventListener("mouseleave", () => {
		containerText2.classList.toggle("showTextContainerCarousel");
	});
	image3.addEventListener("mouseenter", () => {
		containerText3.classList.toggle("showTextContainerCarousel");
	});
	image3.addEventListener("mouseleave", () => {
		containerText3.classList.toggle("showTextContainerCarousel");
	});
};
