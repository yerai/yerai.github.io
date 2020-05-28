$(window).on("load", function() {
    var elems = document.body.getElementsByTagName("picture");
    for(var i=0; i<elems.length; i++){
    	elems[i].style.display="block";
    }

    var elems = document.body.getElementsByTagName("div");
    for(var i=0; i<elems.length; i++){
    	elems[i].style.display="block";
    }

    var elems = document.body.getElementsByTagName("a");
    for(var i=0; i<elems.length; i++){
    	elems[i].style.display="block";
    }

    document.getElementById("loading").style.display="none";
});