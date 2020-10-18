let images = [
    {
        url: "../img/prepair-completed-1.png",
        decs: "Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families",
        city: "Rostov-on-Don LCD admiral",
        area: "81 m2",
        time: "3.5 months",
        cost: "Upon request"
    },
    {
        url: "../img/realize-2.jpg",
        decs: "1Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families1",
        city: "SOCHI THIEVES",
        area: "50 m2",
        time: "2.5 months",
        cost: "Upon request"
    },
    {
        url: "../img/realize-3.jpg",
        decs: "2Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families2",
        city: "ROSTOV-ON-DON PATRIOTIC",
        area: "35 m2",
        time: "1.5 months",
        cost: "Upon request"
    }
];

function initSlider() {
    let sliderImages = document.querySelector(".copleted-slider-item");
    let prewArrow = document.querySelector(".prev_arrow");
    let nextArrow = document.querySelector(".next_arrow");
    let cities = document.querySelector(".slider-cities");
    let nameCity = document.querySelectorAll(".slider-cities-name");

    let sliderText = document.querySelector(".completed-slider-text");
    let city = document.querySelector("#city");
    let area = document.querySelector("#area");
    let time = document.querySelector("#time");
    let cost = document.querySelector("#cost");
    let dots = document.querySelector(".dots__block");

    initImages();
    initArrows();
    initDots();

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `
            <div class="copleted-slider-item-img n${index} ${index === 0 ? "active" : ""}" 
            style="background-image:url(
              ${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;

            nameCity[index].classList.add("n"+index);

            dots.innerHTML += `<button class="dots n${index} ${index === 0? "dots-active" : ""}"></button>`
        });
    }

    function initArrows() {
        prewArrow.addEventListener("click",function(){
          let curNumber = +sliderImages.querySelector(".active").dataset.index;
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
          moveSlider(nextNumber);
        })

        nextArrow.addEventListener("click",function(){
          let curNumber = +sliderImages.querySelector(".active").dataset.index;
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
          moveSlider(nextNumber);
        })
    }

    function initDots(){
        dots.querySelectorAll(".dots").forEach((dot,index)=>{
            dot.addEventListener("click",function(){
                moveSlider(index);
            })
        })
    }

    function moveSlider(num){
      sliderImages.querySelector(".active").classList.remove("active");
      sliderImages.querySelector(".n" + num).classList.add("active");

      cities.querySelector(".active-cities").classList.remove("active-cities")
      cities.querySelector(".n" + num).classList.add("active-cities");

      dots.querySelector(".dots-active").classList.remove("dots-active");
      dots.querySelector(".n" + num).classList.add("dots-active");

      sliderText.innerHTML = images[num].decs
      city.innerHTML = images[num].city
      area.innerHTML = images[num].area
      time.innerHTML = images[num].time
      cost.innerHTML = images[num].cost
    }
}

document.addEventListener("DOMContentLoaded", function () {
    initSlider();
});
