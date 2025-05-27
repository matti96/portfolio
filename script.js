const tileHandler = (function(){

    const highlight = "3px solid #f88";
    const noHighlight = "3px solid #eee";

    const tiles = document.querySelectorAll(".project-tile");
    tiles.forEach(function(tile, index){

        let img = tile.querySelector("img");
        img.draggable = false;
        
        tile.addEventListener('click', function(){
            displayHandler.show(index + ": " + tile);
            highlightTile(index);
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

const displayHandler = (function(){

    const display = document.querySelector("#display");
    function show(content){
        //display.innerText = "" + content;
        console.log("content");
    }

    return { show };
})();

function setCarouselPosition(pos) {
    let imgs = document.querySelectorAll(".focus-project img");
    let offset = pos * 300 + "px";

    imgs.forEach(function(pic){
        pic.style.right = offset;
        console.log(pic.style.right);
    });
}