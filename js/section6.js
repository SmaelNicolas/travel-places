export const section_6_start = (section6Info, country, styles) => {
	let containerTravelPlaces = document.getElementById(
		"containerTravelPlaces"
	);

	addSection_6ToContainer(
		containerTravelPlaces,
		section6Info,
		country,
		styles
	);

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

const addSection_6ToContainer = (
	containerTravelPlaces,
	section6Info,
	country,
	styles
) => {
	let node = document.createElement("section");
	node.classList.add("containerSection6");
	node.innerHTML = `<h2 class="section6Title ${styles.section_6_title}">${section6Info.title}</h2>
				<div id="Section6" class="swiper mySwiper section6StudyAbroad">
					<div id="section6Wrapper" class="swiper-wrapper section6Wrapper">
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
	createSwiperCardDownload(section6Info, country);
};

const createSwiperCardDownload = (section6Info, country) => {
	for (let i = 0; i < section6Info.number_programs; i++) {
		let node = document.createElement("div");
		node.classList.add("swiper-slide");
		node.classList.add("swiper-slideDownload");
		node.innerHTML = `
						<div class='containerImageSection6Effect'>
							<img
								class='placesSection6Image'
								src='../data/country/${country}/section6/${i + 1}.webp'
							/>
						</div>
						<a
							class='placesSection6IconDwl'
							href='../data/country/${country}/section6/downloads/${i + 1}.pdf'
							download></a>`;
		document.getElementById("section6Wrapper").appendChild(node);
	}
};
