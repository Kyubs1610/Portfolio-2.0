(() => {
//If you want to add more images, add the link name and URL image URL in the array list below.
	const images_list = [
{
    "url": "./Asset/metéo.png",
    "alt": "météo app",
    "name": "Météo app",
    "link": "",
    "height":"300px",
    "width":"700px",
},
{
    "url": "./Asset/Kyubs.png",
    "alt": "my first JS game",
    "name": "my first JS game",
    "link": ""
},
{
    "url": "./Asset/V-card.png",
    "alt": "v-card",
    "name": "v-card",
    "link": ""
},
{
    "url": "./Asset/date.png",
    "alt": "Timeouts-Intervals",
    "name": "Timeouts-Intervals",
    "link": ""
},
// {
//     "url": "https://www.html-code-generator.com/images/slider/5.png",
//     "alt": "",
//     "name": "image 5",
//     "link": ""
// }
	];

	let slider_id = document.querySelector("#hcg-slider-1");

	// append all images
	let dots_div = "";
	let images_div = "";
	for (let i = 0; i < images_list.length; i++) {
		// if no link without href="" tag
		let href = (images_list[i].link == "" ? "":' href="'+images_list[i].link+'"');
		images_div += '<a'+href+' class="hcg-slides animated"'+(i === 0 ? ' style="display:flex"':'')+'>'+
						'<img src="'+images_list[i].url+'" alt="'+images_list[i].name+'">'+
					 '</a>';
		dots_div += '<a href="#" class="hcg-slide-dot'+(i === 0 ? ' dot-active':'')+'" data-id="'+i+'"></a>';
	}
	slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
	slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;

	let slide_index = 0;

	const images = slider_id.querySelectorAll(".hcg-slides");
	const dots = slider_id.querySelectorAll(".hcg-slide-dot");
	const prev_button = slider_id.querySelector("#hcg-slide-prev");
	const next_button = slider_id.querySelector("#hcg-slide-next");

	const showSlides = () => {
		if (slide_index > images.length-1) {
			slide_index = 0;
		}
		if (slide_index < 0) {
			slide_index = images.length-1;
		}
		for (let i = 0; i < images.length; i++) {
			images[i].style.display = "none";
			dots[i].classList.remove("dot-active");
			if (i == slide_index) {
				images[i].style.display = "flex";
				dots[i].classList.add("dot-active");
			}
		}
	}

	prev_button.addEventListener("click", event => {
		event.preventDefault();
		slide_index--;
		showSlides();
	}, false);

	next_button.addEventListener("click", event => {
		event.preventDefault();
		slide_index++;
		showSlides();
	}, false);

	const dot_click = event => {
		event.preventDefault();
		slide_index = event.target.dataset.id;
		showSlides();
	}

	for (let i = 0; i < dots.length; i++) {
		dots[i].addEventListener("click", dot_click, false);
	}
})();
