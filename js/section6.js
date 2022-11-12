export const section_6_start = (country) => {
	console.log(country);
	let containerTravelPlaces = document.getElementById(
		"containerTravelPlaces"
	);
	addSection_6ToContainer(containerTravelPlaces, country);

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

const addSection_6ToContainer = (containerTravelPlaces, country) => {
	let node = document.createElement("section");
	node.classList.add("containerSection6");
	node.innerHTML = `<h2 class="section6Title">Programs</h2>
				<div id="Section6" class="swiper mySwiper section6StudyAbroad">
					<div class="swiper-wrapper section6Wrapper">
						<div class="swiper-slide swiper-slideDownload">
							<div class="containerImageSection6Effect">
								<img
									class="placesSection6Image"
									src="../assets/country/${country}/section6/1.webp" />
							</div>
							<a
								class="placesSection6IconDwl"
								href="../assets/country/${country}/section6/downloads/1.webp"
								download></a>
						</div>
						<div class="swiper-slide swiper-slideDownload">
							<div class="containerImageSection6Effect">
								<img
									class="placesSection6Image"
									src="../assets/country/${country}/section6/2.webp" />
							</div>
							<a
								class="placesSection6IconDwl"
								href="../assets/country/${country}/section6/downloads/2.webp"
								download></a>
						</div>
						<div class="swiper-slide swiper-slideDownload">
							<div class="containerImageSection6Effect">
								<img
									class="placesSection6Image"
									src="../assets/country/${country}/section6/3.webp" />
							</div>
							<a
								class="placesSection6IconDwl"
								href="../assets/country/${country}/section6/downloads/3.webp"
								download></a>
						</div>
						<div class="swiper-slide swiper-slideDownload">
							<div class="containerImageSection6Effect">
								<img
									class="placesSection6Image"
									src="../assets/country/${country}/section6/4.webp" />
							</div>
							<a
								class="placesSection6IconDwl"
								href="../assets/country/${country}/section6/downloads/4.webp"
								download></a>
						</div>
						<div class="swiper-slide swiper-slideDownload">
							<div class="containerImageSection6Effect">
								<img
									class="placesSection6Image"
									src="../assets/country/${country}/section6/5.webp" />
							</div>
							<a
								class="placesSection6IconDwl"
								href="../assets/country/${country}/section6/downloads/5.webp"
								download></a>
						</div>
						<div class="swiper-slide swiper-slideDownload">
							<div class="containerImageSection6Effect">
								<img
									class="placesSection6Image"
									src="../assets/country/${country}/section6/6.webp" />
							</div>
							<a
								class="placesSection6IconDwl"
								href="../assets/country/${country}/section6/downloads/5.webp"
								download></a>
						</div>
					</div>
					<div
						id="nextPlacesSection6"
						class="swiper-button-next nextPlacesSection6">
						<img src="./assets/icons/right.svg" alt="" srcset="" />
					</div>
					<div
						id="prevPlacesSection6"
						class="swiper-button-prev prevPlacesSection6">
						<img src="./assets/icons/left.svg" alt="" srcset="" />
					</div>
				</div>`;

	containerTravelPlaces.appendChild(node);
};
