/**
 * Created by billi on 2017/3/8.
 */
function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placehold = document.getElementById("placehold");
    placehold.setAttribute("src",source);
}