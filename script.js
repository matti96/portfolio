/*
const style = window.getComputedStyle(document.body);
const imgSize = style.getPropertyValue('--imgSize');
console.log(imgSize);
*/
const imgSize = 300;
const tileSize = 146;

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

    function selectDot(carousel, number){
        let dotGroups = document.querySelectorAll(".carousel-dots");
        let dots = dotGroups[carousel].querySelectorAll(".dot");

        dots.forEach(function(dot){
            dot.classList.remove("dot-select");
        });
        dots[number].classList.add("dot-select");
    }

    function getPosition(project) {
        let projects = document.querySelectorAll(".focus-project");
        let dots = projects[project].querySelectorAll(".dot");
        let activeDot;
        dots.forEach(function(dot, index){
            if(dot.classList.contains("dot-select")) {
                activeDot = index;
            }
        });
        return activeDot;
    }

    function getSlideCount(carouselIndex) {
        let projects = document.querySelectorAll(".focus-project");
        let dots = projects[carouselIndex].querySelectorAll(".dot");
        return dots.length;
    }

    function setPosition(carousel, pos) {
        let projects = document.querySelectorAll(".focus-project");
        let imgs = projects[carousel].querySelectorAll(".project-media img, .project-media video");
        let offset = pos * imgSize + "px";

        imgs.forEach(function(pic){
            pic.style.right = offset;
        });
    }

    function swipeRight(carouselIndex) {
        let slideCount = getSlideCount(carouselIndex);
        let currentPos = getPosition(carouselIndex);
        if(currentPos >= slideCount - 1) {
            setPosition(carouselIndex, 0);
            selectDot(carouselIndex, 0);
        } else {
            setPosition(carouselIndex, currentPos + 1);
            selectDot(carouselIndex, currentPos + 1);
        }
    }

    function swipeLeft(carouselIndex) {
        let slideCount = getSlideCount(carouselIndex);
        let currentPos = getPosition(carouselIndex);
        if(currentPos <= 0) {
            setPosition(carouselIndex, slideCount - 1);
            selectDot(carouselIndex, slideCount - 1);
        } else {
            setPosition(carouselIndex, currentPos - 1);
            selectDot(carouselIndex, currentPos - 1);
        }
    }

    return { setPosition, selectDot, getPosition, getSlideCount, swipeRight };
})();
