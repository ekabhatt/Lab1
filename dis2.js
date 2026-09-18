let isScary=false;

function scaryToggle(){
    if (isScary === false) {
        document.getElementById("scaryimg").style.display="flex";
        document.getElementById("cuteimg").style.display="none";
        isScary=true;
    }
    else {
        document.getElementById("scaryimg").style.display="none";
        document.getElementById("cuteimg").style.display="flex";
        isScary=false;
    }
}
