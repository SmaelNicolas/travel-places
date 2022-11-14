export const section_5_start = (section3Info, country, styles) => {
	let containerTravelPlaces = document.getElementById(
		"containerTravelPlaces"
	);
	addSection_5ToContainer(
		containerTravelPlaces,
		section3Info,
		country,
		styles
	);

	let dot1 = document.getElementById("section5Dot1");
	let dot2 = document.getElementById("section5Dot2");
	let dot3 = document.getElementById("section5Dot3");

	let image1 = document.getElementById("section5Img1");
	let image2 = document.getElementById("section5Img2");
	let image3 = document.getElementById("section5Img3");

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
};

const addSection_5ToContainer = (
	containerTravelPlaces,
	section5Info,
	country,
	styles
) => {
	let node = document.createElement("section");
	node.classList.add("section3_5StudyAbroad");
	node.innerHTML = `<h2 class="section3_5StudyAbroadTitle ${styles.section_5_title}">${section5Info.title}</h2>
				<div id="containerSection5Wrapper" class="containerSection3_5Wrapper">
					<div class="containerSection3_5Dots">
						<div
							id="section5Dot1"
							class="section3_5Dot changeBackgroundColorDot"></div>
						<div id="section5Dot2" class="section3_5Dot"></div>
						<div id="section5Dot3" class="section3_5Dot"></div>
					</div>
				</div>`;

	containerTravelPlaces.appendChild(node);
	addImageToWrapper(section5Info, country, styles);
};

const addImageToWrapper = (section5Info, country) => {
	section5Info.urls.map((url, index) => {
		let node = document.createElement("a");
		node.classList.add("containerSection3_5Img");
		index === 0 && node.classList.add("showSection3_5Image");
		node.href = url;
		node.target = "_blank";
		node.id = `section5Img${index + 1}`;
		node.innerHTML = `
						<img
							class="section3_5Img"
							src="./data/country/${country}/section5/${index + 1}.webp"
							alt="${country}News" />
					`;
		document.getElementById("containerSection5Wrapper").appendChild(node);
	});
};
