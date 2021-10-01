var toDay = $("#currentDay");
// var
// var
// var
// var
// var
// var

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

function blank(){
    
}

function blank(){
    
}

function blank(){
    
}

function blank(){
    
}

function blank(){
    
}

currentDay();

/*
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/