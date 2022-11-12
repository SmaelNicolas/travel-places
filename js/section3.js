export const section_3_start = (section3Info, country) => {
	let containerTravelPlaces = document.getElementById(
		"containerTravelPlaces"
	);
	addSection_3ToContainer(containerTravelPlaces, section3Info, country);
	let dot1 = document.getElementById("section3Dot1");
	let dot2 = document.getElementById("section3Dot2");
	let dot3 = document.getElementById("section3Dot3");

	let image1 = document.getElementById("section3Img1");
	let image2 = document.getElementById("section3Img2");
	let image3 = document.getElementById("section3Img3");

	// let containerText1 = document.getElementById("containersection3Text1");
	// let containerText2 = document.getElementById("containersection3Text2");
	// let containerText3 = document.getElementById("containersection3Text3");

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

	// image1.addEventListener("mouseenter", () => {
	// 	containerText1.classList.toggle("showTextContainerCarousel");
	// });
	// image1.addEventListener("mouseleave", () => {
	// 	containerText1.classList.toggle("showTextContainerCarousel");
	// });
	// image2.addEventListener("mouseenter", () => {
	// 	containerText2.classList.toggle("showTextContainerCarousel");
	// });
	// image2.addEventListener("mouseleave", () => {
	// 	containerText2.classList.toggle("showTextContainerCarousel");
	// });
	// image3.addEventListener("mouseenter", () => {
	// 	containerText3.classList.toggle("showTextContainerCarousel");
	// });
	// image3.addEventListener("mouseleave", () => {
	// 	containerText3.classList.toggle("showTextContainerCarousel");
	// });
};

const addSection_3ToContainer = (
	containerTravelPlaces,
	section3Info,
	country
) => {
	let node = document.createElement("section");
	node.classList.add("section3_5StudyAbroad");
	node.innerHTML = `<h2 class="section3_5StudyAbroadTitle">${section3Info.title}</h2>
				<div id="containerSection3Wrapper" class="containerSection3_5Wrapper">
					<div class="containerSection3_5Dots">
						<div
							id="section3Dot1"
							class="section3_5Dot changeBackgroundColorDot"></div>
						<div id="section3Dot2" class="section3_5Dot"></div>
						<div id="section3Dot3" class="section3_5Dot"></div>
					</div>
				</div>`;

	containerTravelPlaces.appendChild(node);
	addImageToWrapper(section3Info, country);
};

const addImageToWrapper = (section3Info, country) => {
	section3Info.urls.map((url, index) => {
		let node = document.createElement("a");
		node.classList.add("containerSection3_5Img");
		index === 0 && node.classList.add("showSection3_5Image");
		node.href = url;
		node.target = "_blank";
		node.id = `section3Img${index + 1}`;
		node.innerHTML = `
						<img
							class="section3_5Img"
							src="./assets/country/${country}/section3/${index + 1}.webp"
							alt="${country}News" />
					`;
		document.getElementById("containerSection3Wrapper").appendChild(node);
	});
};
