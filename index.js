
    let myFavInput = document.getElementById("myFav");

    myFavInput.addEventListener("input", function(){
        let chosenColor = myFavInput.value;
        document.getElementById("myDiv").style.backgroundColor = chosenColor;
    }, false);



    let sizeRange = document.querySelector("[type=range]")
    let div = document.querySelector("#myDiv")

    sizeRange.addEventListener("input", evt => {
        div.style.width = evt.target.value + "px"
        div.style.height = evt.target.value + "px"
    });