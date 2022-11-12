export const section_5_start = () => {
	let containerTravelPlaces = document.getElementById(
		"containerTravelPlaces"
	);
	addSection_5ToContainer(containerTravelPlaces);

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

const addSection_5ToContainer = (containerTravelPlaces) => {
	let node = document.createElement("section");
	node.classList.add("section3_5StudyAbroad");
	node.innerHTML = `<h2 class="section3_5StudyAbroadTitle">News 2</h2>
				<div class="containerSection3_5Wrapper">
					<a
						href="https://youtube.com.ar"
						target='_blank'
						id="section5Img1"
						class="containerSection3_5Img showSection3_5Image">
						<img
							class="section3_5Img"
							src="./assets/country/argentina/section5/1.webp"
							alt="" />
						<div
							id="containersection5Text1"
							class="containerSection3_5Text">
							<div class="containerSection3_5Title">Titulo</div>
							<div class="containerSection3_5TextSubtitle">
								Subtitulo
							</div>
						</div>
					</a>
					<a
						href="https://google.com.ar"
						target='_blank'
						id="section5Img2"
						class="containerSection3_5Img">
						<img
							class="section3_5Img"
							src="./assets/country/argentina/section5/2.webp"
							alt="" />
						<div
							id="containersection5Text2"
							class="containerSection3_5Text">
							<div class="containerSection3_5Title">Titulo</div>
							<div class="containerSection3_5TextSubtitle">
								Subtitulo
							</div>
						</div>
					</a>
					<a
						href="https://google.com.ar"
						target='_blank'
						id="section5Img3"
						class="containerSection3_5Img">
						<img
							class="section3_5Img"
							src="./assets/country/argentina/section5/3.webp"
							alt="" />
						<div
							id="containersection5Text3"
							class="containerSection3_5Text">
							<div class="containerSection3_5Title">Titulo</div>
							<div class="containerSection3_5TextSubtitle">
								Subtitulo
							</div>
						</div>
					</a>
					<div class="containerSection3_5Dots">
						<div
							id="section5Dot1"
							class="section3_5Dot changeBackgroundColorDot"></div>
						<div id="section5Dot2" class="section3_5Dot"></div>
						<div id="section5Dot3" class="section3_5Dot"></div>
					</div>
				</div>
			</section>`;

	containerTravelPlaces.appendChild(node);
};
