export const section_4_Start = () => {
	let containerTravelPlaces = document.getElementById(
		"containerTravelPlaces"
	);
	addSection_4ToContainer(containerTravelPlaces);
};

const addSection_4ToContainer = (containerTravelPlaces) => {
	let node = document.createElement("section");
	node.classList.add("containerSection4");
	node.innerHTML = `<h2 class="section4Title">
					Prepare to
					<span class="section4TitleSpan">study abroad</span>
				</h2>
				<div class="containerSection4Info">
					<div class="section4Info">
						<div class="section4InfoNumber">
							<div class="section4InfoNumberText">1</div>
							<h3 class="section4InfoNumberTitle">Country</h3>
						</div>
						<div class="section4InfoText section4InfoOne">
							<div class="section4InfoOneImageCountryContainer">
								<img
									class="section4InfoOneImageCountry"
									src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/9f/49/84/monumento-de-francia.jpg?w=1200&h=1200&s=1"
									alt="countryimage" />
								<img
									class="section4InfoOneImageFlag"
									src="https://t3.ftcdn.net/jpg/00/42/50/34/360_F_42503487_5R2vtjtXNYYomm3qd6ZpN9jSPjj3r0pm.jpg"
									alt="flag" />
							</div>
							<div class="section4InfoOneRibbonContainer">
								<div class="section4InfoOneRibbonName">
									Argentina
								</div>
								<div class="section4InfoOneRibbonText">
									Hay cientos de países en el mundo y, por
									ende, muchos destinos para estudiar en el
									extranjero. Sin embargo, hay naciones que
									destacan entre la multitud.
								</div>
							</div>
						</div>
					</div>
					<div class="section4Info">
						<div class="section4InfoNumber">
							<div class="section4InfoNumberText">2</div>
							<h3 class="section4InfoNumberTitle">Weather</h3>
						</div>
						<div class="section4InfoText section4InfoTwo">
							<div
								class="section4InfoTextDescription section4InfoTwoText">
								A pesar de que se viven las cuatro estaciones,
								el clima de Austra- lia es muy cálido. Al menos,
								gran parte del año. Claro, no hay que negar que
								llueve
							</div>
						</div>
					</div>
					<div class="section4Info">
						<div class="section4InfoNumber">
							<div class="section4InfoNumberText">3</div>
							<h3 class="section4InfoNumberTitle">Best Cities</h3>
						</div>
						<div class="section4InfoText section4InfoThree">
							<div
								class="section4InfoTextDescription section4InfoThreeCardsContainer">
								<div class="section4InfoThreeCards">
									<img
										class="section4InfoThreeCardsImage"
										src="https://aptus.com.ar/wp-content/uploads/2021/07/9-de-julio-def-rotated.jpg"
										alt="city1" />
									<div class="section4InfoThreeCardsCity">
										City
									</div>
								</div>
								<div class="section4InfoThreeCards">
									<img
										class="section4InfoThreeCardsImage"
										src="https://aptus.com.ar/wp-content/uploads/2021/07/9-de-julio-def-rotated.jpg"
										alt="city2" />
									<div class="section4InfoThreeCardsCity">
										City
									</div>
								</div>
								<div class="section4InfoThreeCards">
									<img
										class="section4InfoThreeCardsImage"
										src="https://aptus.com.ar/wp-content/uploads/2021/07/9-de-julio-def-rotated.jpg"
										alt="city3" />
									<div class="section4InfoThreeCardsCity">
										City
									</div>
								</div>
								<div class="section4InfoThreeCards">
									<img
										class="section4InfoThreeCardsImage"
										src="https://aptus.com.ar/wp-content/uploads/2021/07/9-de-julio-def-rotated.jpg"
										alt="city4" />
									<div class="section4InfoThreeCardsCity">
										City
									</div>
								</div>
								<div class="section4InfoThreeCards">
									<img
										class="section4InfoThreeCardsImage"
										src="https://aptus.com.ar/wp-content/uploads/2021/07/9-de-julio-def-rotated.jpg"
										alt="city5" />
									<div class="section4InfoThreeCardsCity">
										City
									</div>
								</div>
								<div class="section4InfoThreeCards">
									<img
										class="section4InfoThreeCardsImage"
										src="https://aptus.com.ar/wp-content/uploads/2021/07/9-de-julio-def-rotated.jpg"
										alt="city6" />
									<div class="section4InfoThreeCardsCity">
										City
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="section4Info">
						<div class="section4InfoNumber">
							<div class="section4InfoNumberText">4</div>
							<h3 class="section4InfoNumberTitle">
								Internationals exams
							</h3>
						</div>
						<div class="section4InfoText section4InfoFour">
							<div
								class="section4InfoTextDescription section4InfoFourText">
								A pesar de que se viven las cuatro estaciones,
								el clima de Austra- lia es muy cálido. Al menos,
								gran parte del año. Claro, no hay que negar que
								llueve y, en algunas zonas, nieva
							</div>
						</div>
					</div>
					<div class="section4Info">
						<div class="section4InfoNumber">
							<div class="section4InfoNumberText">5</div>
							<h3 class="section4InfoNumberTitle">Procedure</h3>
						</div>
						<div class="section4InfoText section4InfoFive">
							<img
								src="./assets/procedure_tickets.png"
								alt="img tickets" />
							<div
								class="section4InfoTextDescription section4InfoFiveText">
								Hay cientos de países en el mundo y, por ende,
								muchos destinos para estudiar en el extranjero.
								Sin embargo, hay naciones que destacan entre la
								multitud.
							</div>
						</div>
					</div>
					<div class="section4Info">
						<div class="section4InfoNumber">
							<div class="section4InfoNumberText">6</div>
							<h3 class="section4InfoNumberTitle">
								Accommodations
							</h3>
						</div>
						<div class="section4InfoText section4InfoSix">
							<div
								class="section4InfoTextDescription section4InfoSixText">
								Sed fermentum ut nibh duis. Dolor pretium arcu,
								tincidunt ultrices tristique arcu cursus massa
								gravida.
							</div>
							<div class="section4InfoSixImagesContainer">
								<div class="section4InfoSixImageRestContainer">
									<img
										class="section4InfoSixImageRest"
										src="https://www.ikea.com/us/en/images/products/tufjord-upholstered-bed-frame-djuparp-dark-green__1101321_pe866585_s5.jpg"
										alt="img bed" />

									<img
										class="section4InfoSixImageClip"
										src="./assets/clip.png"
										alt="" />
								</div>
								<div
									class="section4InfoSixImageRestContainerBack">
									<img
										class="section4InfoSixImageRestBack"
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSA8o1CiQ0q7g62rwsRLz-uteMMrY0OiPt2A&usqp=CAU"
										alt="img bed back" />
								</div>
							</div>
							<img
								class="section4InfoSixImageMap"
								src="./assets/accomodations_map.png"
								alt="img map" />
						</div>
					</div>
					<div class="section4Info">
						<div class="section4InfoNumber">
							<div class="section4InfoNumberText">7</div>
							<h3 class="section4InfoNumberTitle">
								Final recommendations
							</h3>
						</div>
						<div class="section4InfoText section4InfoSeven">
							<div
								class="section4InfoTextDescription section4InfoSevenText">
								Vivir en el extranjero es exponerse a nuevas
								formas de ver la vida. A fin de cuentas, en
								otros países, hablan, visten, comen... de otra
								manera. Al principio, esto puede ser un choque
								para ti. Sin embargo, la felicidad en viajar
								radica en
							</div>
							<img
								class="section4InfoSevenImage"
								src="./assets/finalRecommedations_camera.png"
								alt="img hola" />
						</div>
					</div>
					<img
						class="section4InfoImagePlane"
						src="./assets/plane.png"
						alt="" />
				</div>`;

	containerTravelPlaces.appendChild(node);
};
