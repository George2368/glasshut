var optionTranscription = [];
var dropdownC = document.querySelectorAll('.dropdown_content');
var dropdownLength = dropdownC.length;
console.log(dropdownLength)
for (var i = 0; i< dropdownLength; i++){
    optionTranscription.push(dropdownC[i])
}
/*dropdownC.forEach(item => {
    optionTranscription.push(item)
});*/
console.log(optionTranscription)
function myFunction(s) {

   
        s.classList.add('button_animation');
        var classnamethiscontainer = s.id;
        
        n = document.getElementById(classnamethiscontainer);
        console.log(n);
        var closestcontainer = n.closest('.option_container');
        var a = closestcontainer.lastChild;
        var l = a.previousSibling
        console.log(l);
        if (l.classList.contains('show')){
            l.classList.remove('show')
            s.classList.remove('button_animation');
        }
        else{
            l.classList.add('show');
        }
        /*l.classList.toggle('show')*/
        /*var lasthildelement = parentcontainer.firstChild;
        */
   

};

/*function makeUser(name, age) {
    return {
        name, // то же самое, что и name: name
        age   // то же самое, что и age: age
        // ...
      };
    }*/
function Makeoptionobject(name, price, id){
    this.name = name;
    this.price = price;
    this.id = id;
    aditionaloptionmasive.push(this);
}
/*function Makeoptionobject(name, price, id){
   return{
    name,
    price,
    id
   };
}*/
var aditionaloptionmasive = [];

var freshBreakfastforone  = new Makeoptionobject('Fresh Breakfast for one', 400, add_number_1.id);
var freshBreakfastfortwo  = new Makeoptionobject('Fresh Breakfast for two', 500, add_number_2.id);
var classicDinnerforone  =  new Makeoptionobject('Classic Dinner for one', 600, add_number_3.id);
var classicDinnerfortwo  = new Makeoptionobject('Classic Dinner for two', 800, add_number_4.id);
var electricCarCharge  =  new Makeoptionobject('Electric Car Charge', 800, add_number_5.id);

var aditionalOptional = [];
function addOptionFunction(addfunc){
 
    
    var animationvutton = document.getElementById(addfunc.id);
    var buttonimg = animationvutton.lastChild;
    var parrayname = document.createElement("p");
    var parrayprice = document.createElement("p");
    for(i=0; i <aditionaloptionmasive.length; i++){
        if (addfunc.id == aditionaloptionmasive[i].id) {
            parrayname.id = aditionaloptionmasive[i].id;
            parrayprice.id = aditionaloptionmasive[i].id;
            parrayname.className = "classparrayname";
            parrayprice.className = "classparrayprice";
            var removeid = parrayname.id;
            var removepriceid = parrayprice.id;
            if(aditionalOptional.includes(aditionaloptionmasive[i])!=true){
                aditionalOptional.push(aditionaloptionmasive[i]);
                var addpcheckpriceelement = aditionalOptional.indexOf(aditionaloptionmasive[i]);
                parrayname.innerHTML= aditionalOptional[addpcheckpriceelement].name;
                parrayprice.innerHTML= aditionalOptional[addpcheckpriceelement].price;
                pricepositioncontainerelement.append(parrayname, parrayprice)
             

              
            }
          
            if (addfunc.classList.contains('add_aditional_option_button_active') ) {
                addfunc.classList.remove('add_aditional_option_button_active');
                buttonimg.previousSibling.src="assets/Group 173.svg";
                var deleteelement = aditionalOptional.indexOf(aditionaloptionmasive[i]);
                aditionalOptional.splice(deleteelement, 1);
                var removed = document.querySelector("#"+ removeid +".classparrayname");
              
              removed.remove();
              var priceremoved = document.querySelector("#"+ removepriceid +".classparrayprice");
              priceremoved.remove();
            }
            else{
                addfunc.classList.add('add_aditional_option_button_active');
                buttonimg.previousSibling.src="/assets/Vector\ 36.svg";
            }
         
        /*var source = 0; 
        for(adn = 0; adn < aditionalOptional.lenth; adn++){ 
            if(aditionaloptionmasive[i] == aditionalOptional[adn]){
                source++;
             }
        }
        if(source == 0){
            aditionalOptional.push(aditionaloptionmasive[i]);
        }
*/
        }
    }  
    heightgrow();
    

   console.log(aditionalOptional)
};

var pricepositioncontainer = document.getElementsByClassName('price_position_container');
let lengthaditionalOptionalmassive;


function heightgrow(){
    
if(lengthaditionalOptionalmassive==undefined){
        lengthaditionalOptionalmassive= aditionalOptional.length;
    
    }
    console.log(lengthaditionalOptionalmassive)
    var containerelement = document.getElementById('checkcontainer');
    console.log(containerelement)
    var maxheightelement = containerelement.offsetHeight;
    console.log(maxheightelement)
    lengthaditionalOptionalmassive =  aditionalOptional.length;
if ( aditionalOptional.length>lengthaditionalOptionalmassive){
    containerelement.style.maxHeight= maxheightelement - 2.84+"px";
}
if(aditionalOptional.length> 3 && maxheightelement < 653){ 
    containerelement.style.maxHeight= maxheightelement + 2.84+"px";}
if(aditionalOptional.length<= 3){ 
        containerelement.style.maxHeight= "568.12px";}

console.log(lengthaditionalOptionalmassive)

}
function check(){
   
    for (i in aditionalOptional){
        if ( aditionalOptional[i+1].price!=undefined){
            var price = aditionalOptional[i].price + aditionalOptional[i+1].price;
        }
        console.log(price)

    }
}


