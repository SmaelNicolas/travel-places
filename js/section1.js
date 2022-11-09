export const section_1_start = () => {
	let carouselContainer = document.getElementById("containerSection1");
	let image1 = document.getElementById("section1Image1");
	let image2 = document.getElementById("section1Image2");
	let image3 = document.getElementById("section1Image3");
	let arrowLeft = document.getElementById("section1ArrowLeft");
	let arrowRight = document.getElementById("section1ArrowRight");

	containerSection1.addEventListener("mouseenter", () => {
		arrowLeft.classList.toggle("showArrowsTriangleStudyAbroad");
		arrowRight.classList.toggle("showArrowsTriangleStudyAbroad");
	});
	containerSection1.addEventListener("mouseleave", () => {
		arrowLeft.classList.toggle("showArrowsTriangleStudyAbroad");
		arrowRight.classList.toggle("showArrowsTriangleStudyAbroad");
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
