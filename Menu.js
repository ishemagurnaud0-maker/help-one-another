


function getMealOftheDay(day){
  
    switch(day){
        case "Monday":
            console.log(`We eat posho on ${day} `);
            break;
        case "Tuesday":
            console.log(`We eat rice on ${day}  `)
            break;
        case"Wednesday":
            console.log(`We eat cassava oon Wednesday ${day} `)
            break;
        case "Thursday":
            console.log(`We eat potatoes on ${day} `)
            break;
        case "Friday":
            console.log(`We eat rice on ${day} `)
            break;
        case "Saturday":
            console.log(`We eat chips on Saturday ${day}  `)
            break;
        case "Sunday":
            console.log(`We eat plantain on ${day}  `)
            break;
        default:console.log("Unknown day" );
    }
    }
   getMealOftheDay("Monday");
   getMealOftheDay("Tuesday");
   getMealOftheDay("Wednesday");
   getMealOftheDay("Thursday");
   getMealOftheDay("Friday");
   getMealOftheDay("Saturday");
   getMealOftheDay("Sunday");
   
   const greeting=()=> { 
   console.log ( "Hello")
   }
   greeting();
   let x = 10;

function printX() {
    let x = 20;
    console.log(x);
}

printX();
console.log(x);