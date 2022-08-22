window.onload = function () {

    const pricesBoxButtons = document.querySelectorAll(".prices__box-button");
    for (let i = 0; i < pricesBoxButtons.length; i++) {

        pricesBoxButtons[i].addEventListener('click', function () {
    
            scrollMenu(this.getAttribute('href'));
        })
    
    }


}


// function getCoords(block) {
//   let box = block.getBoundingClientRect();
//   return {
//     top: box.top,
//     left: box.left
//   };
// }


// window.onscroll = function() {
//     // We add pageYOffset for compatibility with IE.
//     if (getCoords( headerTopContainer).top > getCoords(labDesignBlock).top && getCoords(recentWorks).top > getCoords( headerTopContainer).top) {
//         headerLogo.classList.add("dark");
//         headerCall.classList.add("dark");
//         burger.classList.add("dark");

//     } else {
//         headerLogo.classList.remove("dark");
//         headerCall.classList.remove("dark");
//         burger.classList.remove("dark");

//     }
//     if(getCoords(headerLogo).top> getCoords(contact).top){
//         headerLogo.classList.add("zero");
//     }
//    else{
//         headerLogo.classList.remove("zero");
//     }


//     getCoords( headerTopContainer).top
// };


function scrollMenu(blockId) {
    let temp, start, from, to;
    //scroll animation
    cancelAnimationFrame(temp);
    start = performance.now();
    from = window.pageYOffset || document.documentElement.scrollTop;
    // to = document.querySelector(blockId).getBoundingClientRect().top;
    // console.log(document.querySelector(blockId).getBoundingClientRect().top);
    // const { height } = document.querySelector(blockId).getBoundingClientRect();


    to = document.querySelector(blockId).getBoundingClientRect().top;

    duration = 1000 * Math.abs(to) / 4000;

    // scroll
    requestAnimationFrame(function step(timestamp, e) {
        var progress = (timestamp - start) / duration;
        1 <= progress && (progress = 1);
        window.scrollTo(0, from + to * progress | 0);
        (1 > progress) ? temp = requestAnimationFrame(step) : (document.location.hash = blockId);
        document.addEventListener("wheel", function () {
            cancelAnimationFrame(temp);
        })
    })
}






