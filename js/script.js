import { carouselDownloadStart } from "./carouselDownloads.js";
import { startCarouselOneImage } from "./carouselOneImage.js";
import { carouselTriangle } from "./carouselTriangle.js";
import { initalizeEventListeners } from "./gridImages.js";

carouselDownloadStart();
startCarouselOneImage();
initalizeEventListeners();
carouselTriangle();

window.addEventListener("resize", () => {
	let windowWidth = window.innerWidth;
	if (windowWidth >= 920) {
		carouselDownloadStart();
	}
	if (windowWidth >= 725 && windowWidth < 920) {
		carouselDownloadStart();
	}
	if (windowWidth < 725) {
		carouselDownloadStart();
	}
});
