/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";

}
function openForm(){
    var s = document.getElementById('test1');
    if (s.classList.contains('hide')) {
        s.classList.remove("hide");
        s.classList.add("show");
    } else {
        s.classList.remove("show");
        s.classList.add("hide");
    }
    var x = document.getElementById('test2');
    if (x.classList.contains('hide')) {
        x.classList.remove("hide");
        x.classList.add("show");
    } else {
        x.classList.remove("show");
        x.classList.add("hide");
    }


}