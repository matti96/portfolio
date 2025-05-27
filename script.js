const tileHandler = (function(){

    const highlight = "3px solid #f88";
    const noHighlight = "3px solid #eee";

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
            img.style.border = noHighlight;
        });
        let img = tiles[tileNumber].querySelector("img");
        img.style.border = highlight;
    }

    function saySomething() {
        console.log("something");
        return 1;
    }

    return { saySomething };
})();

const focusHandler = (function(){

    const cards = document.querySelectorAll(".focus-project");
    function setVisible(cardNumber) {
        cards.forEach(function(card){
            card.style.opacity = "0%";
        });
        cards[cardNumber].style.opacity = "100%";
    }

    return { setVisible };
})();

function setCarouselPosition(pos) {
    let imgs = document.querySelectorAll(".focus-project img");
    let offset = pos * 300 + "px";

    imgs.forEach(function(pic){
        pic.style.right = offset;
        console.log(pic.style.right);
    });
}