var toDay = $("#currentDay");
var textArea = $("textarea");
var time = moment().hour();
var nine = $("#nineam");
var ten = $("#tenam");
var eleven = $("#elevenam");
var twelve = $("#twelvepm");
var one = $("#onepm"); 
var two = $("#twopm"); 
var three = $("#threepm");
var four = $("#fourpm");
var five = $("#fivepm");
var btn = $(".saveBtn")

//mental note: use the jquery functions because the js doesn't work w/o it for some reason

/*
currentDay function: 
1.takes in the moment.js format for the current date
2.splits the method into an array exluding the 2021 part
3.takes the first item (the date without seconds)
4.uses jquery to insert the new string into the p element 
*/
function currentDay(){
//1
    var today = moment().format('LLLL');
//2
    var conc = today.split(', 2021')
//3
    var newTD = conc[0];
//4
    var TD = $(toDay).html(newTD);

}

function saveText(){
    
for (var i = 0; i < 9; i++){

    if(time == textArea[i].name){
        $(textArea[i]).addClass("present");
    }

    if(time > textArea[i].name){
          $(textArea[i]).addClass("past");
    }

    if(time < textArea[i].name){
         $(textArea[i]).addClass("future");
     }
    }
}

$(btn).on("click", function(event){
    event.preventDefault;
    
    localStorage.setItem('9am', nine.val());
    // nine.val(localStorage.getItem('9am'));

    localStorage.setItem('10am', ten.val());
    

    localStorage.setItem('11am', eleven.val());
    

    localStorage.setItem('12pm', twelve.val());


    localStorage.setItem('1pm', one.val());
    

    localStorage.setItem('2pm', two.val());
   

    localStorage.setItem('3pm', three.val());
    

    localStorage.setItem('4pm', four.val());


    localStorage.setItem('5pm', five.val());
 

  });

function saveonpage(){

nine.val(localStorage.getItem('9am'));

ten.val(localStorage.getItem('10am'));

eleven.val(localStorage.getItem('11am'));

twelve.val(localStorage.getItem('12pm'));

one.val(localStorage.getItem('1pm'));

two.val(localStorage.getItem('2pm'));

three.val(localStorage.getItem('3pm'));

four.val(localStorage.getItem('4pm'));

five.val(localStorage.getItem('5pm'));

}


currentDay();
saveText();
saveonpage();