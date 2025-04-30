const tileCollapse = "200px";
const tileExpand = "400px";

let tiles = document.querySelectorAll(".project-tile");

tiles.forEach(function(tile) {
    let info = tile.querySelector(".info-container");

    info.style.display = "none";
    tile.addEventListener('click', function(){
        toggleInfoVisibility(this);
    })
})


function turnAllInvisible(objList) {
    objList.forEach(function(obj) {
        let info = obj.querySelector(".info-container");
        info.style.display = "none";
        obj.style.width = tileCollapse;
    })
}

function toggleInfoVisibility(obj) {
    let info = obj.querySelector(".info-container");

    if(info.style.display == "none") {
        turnAllInvisible(tiles);
        info.style.display = "inline";
        obj.style.width = tileExpand;
    } else {
        info.style.display = "none";
        obj.style.width = tileCollapse;
    }
}