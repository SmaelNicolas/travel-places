export const carouselTriangle = () => {
	let carouselContainer = document.getElementById(
		"containerCarouselTriangle"
	);
	let image1 = document.getElementById("carouselTriangleImage1");
	let image2 = document.getElementById("carouselTriangleImage2");
	let image3 = document.getElementById("carouselTriangleImage3");
	let arrowLeft = document.getElementById("carouselTriangleArrowLeft");
	let arrowRight = document.getElementById("carouselTriangleArrowRight");

	containerCarouselTriangle.addEventListener("mouseenter", () => {
		arrowLeft.classList.toggle("showArrowsTriangle");
		arrowRight.classList.toggle("showArrowsTriangle");
	});
	containerCarouselTriangle.addEventListener("mouseleave", () => {
		arrowLeft.classList.toggle("showArrowsTriangle");
		arrowRight.classList.toggle("showArrowsTriangle");
	});

	arrowLeft.addEventListener("click", () => {
		let image1Src = image1.src;
		let image2Src = image2.src;
		let image3Src = image3.src;

		image1.src = image2Src;
		image2.src = image3Src;
		image3.src = image1Src;
	});

	arrowRight.addEventListener("click", () => {
		let image1Src = image1.src;
		let image2Src = image2.src;
		let image3Src = image3.src;

		image1.src = image3Src;
		image2.src = image1Src;
		image3.src = image2Src;
	});
};
