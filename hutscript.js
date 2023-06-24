function textslider(slidebutton){
    var textsliderbutton = document.getElementById(slidebutton.id);
    console.log(textsliderbutton)
    var parentelement= document.getElementById(slidebutton.id).parentNode;

    var secondparentelement= document.getElementById(parentelement.id).parentNode;

    var thirdparentelement= secondparentelement.querySelectorAll('.hut_transcription');
    var thirdparrentbuttonelement = secondparentelement.querySelectorAll('button');
    var textslidermassive= Array.from(thirdparentelement);
    var textsliderbuttonmassive = Array.from(thirdparrentbuttonelement);
    var textsliderbuttoncontent = textsliderbutton.id;
    console.log(textslidermassive)
    for(i=0; i < textslidermassive.length; i++){
        if(textslidermassive[i].className== "hut_transcription " + textsliderbuttoncontent ){
            for(c=0; c<textslidermassive.length; c++){
                textslidermassive[c].classList.remove("active");
                textsliderbuttonmassive[c].classList.remove("buttonactive");
                console.log(textsliderbutton)
          
            }
            textslidermassive[i].classList.add("active");
            textsliderbutton.classList.add("buttonactive");
          break;
        }
    }
}