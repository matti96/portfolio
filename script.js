const r = document.querySelector(':root');
const cs = getComputedStyle(r);

let contentWidth = cs.getPropertyValue('--contentWidth').trim().substring(0,3);
let imgSize = contentWidth * 2 / 3;

function updateCSSVariables(){
        //cs = getComputedStyle(r);
        contentWidth = cs.getPropertyValue('--contentWidth').trim().substring(0,3);
        imgSize = contentWidth * 2 / 3;
    }


const tileHandler = (function(){

    const tiles = document.querySelectorAll(".project-tile");
    tiles.forEach(function(tile, index){

        let img = tile.querySelector("img");
        img.draggable = false;

        tile.addEventListener('click', function(){
            highlightTile(index);
            focusHandler.setVisible(index);
        });
    });

    function highlightTile(tileNumber) {
        tiles.forEach(function(tile){
            let img = tile.querySelector("img");
            img.id = "";
        });
        let img = tiles[tileNumber].querySelector("img");
        img.id = "tile-highlighted";
    }

    return {  };
})();

const focusHandler = (function(){

    const cards = document.querySelectorAll(".focus-project");
    function setVisible(cardNumber) {
        cards.forEach(function(card){
            card.classList.remove("active-project");
            card.classList.add("inactive-project");
            
        });
        cards[cardNumber].classList.remove("inactive-project");
        cards[cardNumber].classList.add("active-project");
        
    }

    return { setVisible };
})();

const carouselHandler = (function(){
    
    const buttonHandler = (function(){
        const focusProjects = document.querySelectorAll(".focus-project");
        
        try{
            focusProjects.forEach(function(project, index){
                const prevButton = project.querySelector(".carousel-previous");
                const nextButton = project.querySelector(".carousel-next");
                
                prevButton.addEventListener('click',function(){
                    swipeLeft(index);
                });
                nextButton.addEventListener('click',function(){
                    swipeRight(index);
                });
            })
        }
        catch(err){
            console.log(err);
        }
        
    })();

    let carousels = new Array();

    let dotSections = document.querySelectorAll(".carousel-dots");

    dotSections.forEach(function(dotSection, index){
        let car = new Carousel(0, getSlideCount(index));
        carousels.push(car);
    });

    function Carousel(pos, maxPos) {
        this.currentPos = pos;
        this.maximumPos = maxPos;
    }

    function setPosition(carousel, pos) {
        carousels[carousel].currentPos = pos;
    }

    function getPosition(carousel) {
        return carousels[carousel].currentPos;
    }

    function getMaximum(carousel) {
        return carousels[carousel].maximumPos;
    }

    function refreshCarousels(){
        carousels.forEach(function(car, index){
            setOffset(index, car.currentPos);
            selectDot(index, car.currentPos);
        });
    };

    function setOffset(carousel, pos) {
        scaleHandler.updateCSSVariables();

        let projects = document.querySelectorAll(".focus-project");
        let imgs = projects[carousel].querySelectorAll(".project-media img, .project-media video");
        let offset = pos * imgSize + "px";

        imgs.forEach(function(pic){
            pic.style.right = offset;
        });
    }

    function selectDot(carousel, number){
        let dotGroups = document.querySelectorAll(".carousel-dots");
        let dots = dotGroups[carousel].querySelectorAll(".dot");

        dots.forEach(function(dot){
            dot.classList.remove("dot-select");
        });
        dots[number].classList.add("dot-select");
    }
    
    function getSlideCount(carouselIndex) {
        let projects = document.querySelectorAll(".focus-project");
        let dots = projects[carouselIndex].querySelectorAll(".dot");
        return dots.length;
    }
       
    function swipeRight(carouselIndex) {
        let current = getPosition(carouselIndex);
        let max = getMaximum(carouselIndex);

        if(current >= max - 1) {
            setPosition(carouselIndex, 0)
        } else {
            setPosition(carouselIndex, current += 1);
        }
        refreshCarousels();
    }

    function swipeLeft(carouselIndex) {
        let current = getPosition(carouselIndex);
        let max = getMaximum(carouselIndex);

        if(current <= 0) {
            setPosition(carouselIndex, max - 1);
        } else {
            setPosition(carouselIndex, current -= 1);
        }
        refreshCarousels();
    }

    return { refreshCarousels };
})();
