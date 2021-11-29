function slider({
    container,
    slide,
    nextArrow,
    prevArrov,
    totalCounter,
    currentCounter,
    wrapper,
    field
}) {
// Слайдер !!!!!!!!1

const slides = document.querySelectorAll(slide),
      slider = document.querySelector(container),
      prev = document.querySelector(prevArrov),
      next = document.querySelector(nextArrow),
      currentSlide = document.querySelector(currentCounter),
      totalSlide = document.querySelector(totalCounter),
      slidesWrapper = document.querySelector(wrapper),
      slidesField = document.querySelector(field),
      width = window.getComputedStyle(slidesWrapper).width;
      let slideIndex = 1,
          offset = 0;

          if( slides.length >= 10) {
            totalSlide.textContent = slides.length;
            currentSlide.textContent = slideIndex;
        } else {
            totalSlide.textContent = `0${slides.length}`;
            currentSlide.textContent = `0${slideIndex}`;
        }



      slidesField.style.width = 100 * slides.length + '%';
      slidesField.style.display = 'flex';
      slidesField.style.transition = '0.5s all'; //Анимация

      slidesWrapper.style.overflow = 'hidden';
      slides.forEach(slide => {
        slide.style.width = width;
      });

      slider.style.position = 'relative';

      const indicators = document.createElement('ol'),
            dots = [];
      indicators.classList.add('carousel-indicators');
      slider.append(indicators);

      function dotsOpacity() {
        dots.forEach(item => item.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
      }

      for (let i = 0; i < slides.length; i++) {
          const dot = document.createElement('li');
          dot.setAttribute('data-slide-to', i+1);
          dot.classList.add('dot');
          if (i == 0) {
              dot.style.opacity = 1;
          }
          indicators.append(dot);
          dots.push(dot);
      }
     

      next.addEventListener('click', () => {
        if (offset == +width.replace(/\D/g, '') * (slides.length - 1) ){
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, '');
        }
        
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if( slides.length < 10) {
            currentSlide.textContent = `0${slideIndex}`;
        } else {
            currentSlide.textContent = slideIndex;
        }

        dotsOpacity();

      });


      prev.addEventListener('click', () => {
        if (offset == 0){
            offset = +width.replace(/\D/g, '') * (slides.length - 1);
        } else {
            offset -= +width.replace(/\D/g, '');
        }
        
        slidesField.style.transform = `translateX(-${offset}px)`;


        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if( slides.length < 10) {
            currentSlide.textContent = `0${slideIndex}`;
        } else {
            currentSlide.textContent = slideIndex;
        }
        dotsOpacity();
      });

      dots.forEach(dot => {
        dot.addEventListener('click', (e) => { 
            const slideTo = e.target.getAttribute('data-slide-to');
            
            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            if( slides.length < 10) {
                currentSlide.textContent = `0${slideIndex}`;
            } else {
                currentSlide.textContent = slideIndex;
            }
            dotsOpacity();
        });
      });


    //   showSlides(slideIndex);

    //   function showSlides(i) {
    //     slides.forEach(item => item.style.display='none' );
    //     slides[i-1].style.display='';
    //     if( slides.length >= 10) {
    //         currentSlide.textContent = i;
    //     } else {
    //         currentSlide.textContent = `0${i}`;
    //     }
    //   }

    //   prev.addEventListener('click', () => {
    //     slideIndex--;
    //     if (slideIndex < 1) {
    //         slideIndex = slides.length;
    //     }
    //     showSlides(slideIndex);
    //   });
    //   next.addEventListener('click', () => {
    //     slideIndex++;
    //     if (slideIndex > slides.length) {
    //         slideIndex = 1;
    //     }
    //     showSlides(slideIndex);
    //   });   


      

}

export default slider;