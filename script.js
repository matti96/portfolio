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


let closeButtons = document.querySelectorAll(".close-info");
closeButtons.forEach(function(btn) {
    btn.addEventListener('click', function(btn){
        btn.stopPropagation();
        turnAllInvisible(tiles);
    })
})


function turnAllInvisible(objList) {
    console.log("wtf")
    objList.forEach(function(obj) {
        let info = obj.querySelector(".info-container");
        info.style.display = "none";
        obj.style.width = tileCollapse;
    })
}

function turnVisible(obj) {
    let info = obj.querySelector(".info-container");
    info.style.display = "inline";
    obj.style.width = tileExpand;
}

function toggleInfoVisibility(obj) {
    let info = obj.querySelector(".info-container");

    if(info.style.display == "none") {
        turnAllInvisible(tiles);
        turnVisible(obj);
    } else {
        //turnAllInvisible(tiles);
    }
}