
let tiles = document.querySelectorAll(".project-tile");

tiles.forEach(function(tile) {
    let info = tile.querySelector(".info-container");

    info.style.display = "none";
    tile.addEventListener('click', function(){
        toggleInfoVisibility(this);
    })
})




function toggleInfoVisibility(obj) {
    let info = obj.querySelector(".info-container");

    if(info.style.display == "none") {
        info.style.display = "inline";
    } else {
        info.style.display = "none";
    }
}