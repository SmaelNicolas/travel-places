export const section_5_start = () => {
	let dot1 = document.getElementById("section5Dot1");
	let dot2 = document.getElementById("section5Dot2");
	let dot3 = document.getElementById("section5Dot3");

	let image1 = document.getElementById("section5Img1");
	let image2 = document.getElementById("section5Img2");
	let image3 = document.getElementById("section5Img3");

	let containerText1 = document.getElementById("containersection5Text1");
	let containerText2 = document.getElementById("containersection5Text2");
	let containerText3 = document.getElementById("containersection5Text3");

	dot1.addEventListener("click", () => {
		image1.classList.add("showSection3_5Image");
		image2.classList.remove("showSection3_5Image");
		image3.classList.remove("showSection3_5Image");
		dot1.classList.add("changeBackgroundColorDot");
		dot2.classList.remove("changeBackgroundColorDot");
		dot3.classList.remove("changeBackgroundColorDot");
	});
	dot2.addEventListener("click", () => {
		image1.classList.remove("showSection3_5Image");
		image2.classList.add("showSection3_5Image");
		image3.classList.remove("showSection3_5Image");
		dot1.classList.remove("changeBackgroundColorDot");
		dot2.classList.add("changeBackgroundColorDot");
		dot3.classList.remove("changeBackgroundColorDot");
	});
	dot3.addEventListener("click", () => {
		image1.classList.remove("showSection3_5Image");
		image2.classList.remove("showSection3_5Image");
		image3.classList.add("showSection3_5Image");
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
