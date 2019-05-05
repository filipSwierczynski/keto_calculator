
let kg = $("#kg");
let lbs = $("#lbs");
let cm = $("#cm");
let inch = $("#inch");
let bodyFat = $("#bodyFat");
let age = $("#age");
let dEE = $("#dEE");
let typingTimer;
let leanBodyMass;
let proteinGoal;
let doneTypingInterval = 1;




//////////////////////// WEIGHT CALCULATIONS /////////////////////
$("#kg").keyup(function(){
    clearTimeout(typingTimer);
    if($("#kg").val()){
        typingTimer = setTimeout(kgToLbs,doneTypingInterval);
    }
});

function kgToLbs(){
   
    lbs.val(`${(kg.val() * 2.204).toFixed(0)}`);
}

$("#lbs").keyup(function(){
    clearTimeout(typingTimer);
    if($("#lbs").val()){
        typingTimer = setTimeout(lbsToKg,doneTypingInterval);
    }
});
function lbsToKg(){
   
    kg.val(`${(lbs.val() * 0.4535).toFixed(1)}`);
}

/////////////////////// HEIGHT CALCULATIONS ////////////////////////

$("#cm").keyup(function(){
    clearTimeout(typingTimer);
    if($("#cm").val()){
        typingTimer = setTimeout(cmToInch,doneTypingInterval);
    }
});
function cmToInch(){
   
    inch.val(`${(cm.val() * 0.393).toFixed(0)}`);
}

$("#inch").keyup(function(){
    clearTimeout(typingTimer);
    if($("#inch").val()){
        typingTimer = setTimeout(inchToCm,doneTypingInterval);
    }
});
function inchToCm(){
   
   cm.val(`${(inch.val() * 2.54).toFixed(0)}`);
}

////////////////////// get gender //////////////////////////////
function getGener(){
    const woman = document.getElementById("woman");
    const man = document.getElementById("man");

    if(man.checked){
        return man;
    } else return woman;
}


//////////////////// CALCULATE MACROS //////////////////////////////

function calculateMacros(){
    console.log("man");
    if(getGener() === man){
     
        result = (66 + ((6.2*lbs.val()) + (12.7 * inch.val())-(6.76*age.val()))) * dEE.val();
        console.log(result);
        let fatLbs = (bodyFat.val() * 0.01) * lbs.val();
        leanBodyMass = lbs.val() - fatLbs;
        proteinGoal = leanBodyMass * 0.8;
        console.log(result);
        result = setGoal();
        console.log(result.toFixed(0));

        
        calcMacros(leanBodyMass);
        document.getElementById('resultBmr').textContent = result;
        
        
      
        
    }else {
        result = (655.1 + ((4.35*lbs.val()) + (4.7 * inch.val())-(4.7*age.val()))) * dEE.val();
       let fatLbs = (bodyFat.val() * 0.01) * lbs.val();
        leanBodyMass = lbs.val() - fatLbs;
        proteinGoal = leanBodyMass * 0.8;
        console.log(result);
        result = setGoal();
        console.log(result);
        
        calcMacros(leanBodyMass);
        document.getElementById('resultBmr').textContent = result;
        
        
    }
}

function calcMacros(lBM){
    gramsProtein = lBM * 0.8;
    gramsCarbs = 20;
    gramsFat = ((result - (gramsProtein*4)) - 20 )/9;
    $("#macros").html(`Protein: ${gramsProtein.toFixed(0)}, Carbs: ${gramsCarbs}, Fat: ${gramsFat.toFixed(0)}`);
}




function setGoal(){
    const fatLoss = document.getElementById("fatLoss");
    const weightGain = document.getElementById("weightGain");
   

    const percentGoal = document.getElementById("percentGoal");
    let percentGoalInput = document.getElementById("percentGoalInput");


    if((fatLoss).checked){
        percentGoal.style.display ="inline-block";
        percentGoalInput.style.display ="inline-block";
        let test = (0.01 * percentGoalInput.value);
        test = test * result;

        return (result - test).toFixed(0);
       
        
    } else if (weightGain.checked){
        
        percentGoal.style.display ="inline-block";
        percentGoalInput.style.display ="inline-block";
        return (((0.01 * percentGoalInput.value) + 1.0) * result).toFixed(0);
    }else {
        percentGoal.style.display ="none";
        selectedGoal = 1;
        percentGoalInput.style.display ="none";

        return result.toFixed(0);

    }

}






