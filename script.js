const tileHandler = (function(){

    const tiles = document.querySelectorAll(".project-tile");
    tiles.forEach(function(tile, index){
        tile.addEventListener('click', function(){
            displayHandler.show(index + ": " + tile);
        });
    });

    function saySomething() {
        console.log("something");
        return 1;
    }

    return { saySomething };
})();

const displayHandler = (function(){

    const display = document.querySelector("#display");
    function show(content){
        display.innerText = "" + content;
    }

    return { show };
})();