var bone = document.getElementById("bone");
bone.style.width = "10%";
bone.style.position = "absolute";
 
function changePosition(){
    var cursorX = event.clientX;
    var cursorY = event.clientY;
    bone.style.paddingLeft = (cursorX-500)+'px';
    bone.style.paddingTop = (cursorY-80)+'px';
}
 
document.addEventListener("click", changePosition);