//slider 
const slides = document.querySelector('.slider-item').children;
const prevSlides = document.querySelector('.slider-left');
const nextSlides = document.querySelector('.slider-right');
const totalSlides = slides.length;
let index = 0;

prevSlides.addEventListener('click',()=>{
	next('prev');
})

nextSlides.addEventListener('click',()=>{
	next('next')
})

function next(direccion) {
	if (direccion == 'next') {
		index++;
		if (index == totalSlides) index = 0;
	}
	else{
		if (index == 0) index = totalSlides-1;
		else index--;
	}

	for (let i = 0; i < slides.length; i++){
		slides[i].classList.remove('item-active');
	}

	slides[index].classList.add('item-active')

}

setInterval(next('next'),1000)

