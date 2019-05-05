let calorieIntake = 0;
let result;
let gramsProtein;
let gramsCarbs;
let gramsFat;


 

    $( document ).ready(function() {
        $("#imperialForm").hide();
    $("#metricForm").hide();
    });

    let metBtn = document.getElementById("metBtn");
    let impBtn = document.getElementById("impBtn");


    impBtn.onclick = ()=>{
        $("#imperialForm").show();
        $("#metricForm").hide();
    }

    metBtn.onclick = ()=>{
        $("#imperialForm").hide();
        $("#metricForm").show();
    }

    
    

function calculateImperial(){
   let weight = document.getElementById("currentWeight").value;
   let  heightL = document.getElementById("currentHeightLarge").value;
   let heightS = document.getElementById('currentHeightSmall').value;
   let age = document.getElementById('age').value;
   let dEE = document.getElementById('dEE').value;
   let bodyFat = document.getElementById('bodyFat').value;
    bodyFat = bodyFat * 0.01;
    let totalFat = bodyFat * weight;
    let leanBodyMass = weight - totalFat;
    const heightInch = (heightS*1) + (12*heightL);
    alert(leanBodyMass);
   // alert(`Weight ${weight}, Height ${heightInch} , age ${age}`);

    result = (66 + ((6.2*weight) + (12.7 * heightInch)-(6.76*age))) * dEE;

    //result woman imperial
    //  result = (655.1 + ((4.35*weight) + (4.7 * heightInch)-(4.7*age))) * dEE;

    console.log(result);
    result = setGoal();
    
    console.log(result);
    
    calculateMacros(leanBodyMass);
    
    document.getElementById('resultBmr').textContent = result;
    
}

function calculateMetric(){
    let weightKg = document.getElementById("weightKg").value;
    let heightCm = document.getElementById("heightCm").value;
    
    let age = document.getElementById('age').value;
    let dEE = document.getElementById('dEE').value;
    let bodyFat = document.getElementById('bodyFat').value;
    bodyFat = bodyFat * 0.01;
    let totalFat = bodyFat * weightKg;
    let leanBodyMass = weightKg - totalFat;
    //const heightInch = (heightS*1) + (12*heightL);
    alert(leanBodyMass);
   // alert(`Weight ${weight}, Height ${heightInch} , age ${age}`);

  
    result = (66.5 + ((13.75*weightKg) + (5.003 * heightCm)-(6.755*age))) * dEE;

    //result woman metric
    //result = (655.1 + ((9.563*weight) + (1.850 * heightCm)-(4.676*age))) * dEE;
    console.log(result);
    result = setGoal();
    
    console.log(result);
    
    calculateMacrosMetric(leanBodyMass);
    
    document.getElementById('resultBmr').textContent = result;
    
}

function calculateMacros(lBM){
    gramsProtein = lBM * 0.8;
    gramsCarbs = 20;
    gramsFat = ((result - (gramsProtein*4)) - 20 )/9;
    $("#macros").html(`Protein: ${gramsProtein}, Carbs: ${gramsCarbs}, Fat: ${gramsFat}`);
}

function calculateMacrosMetric(lBM){
    gramsProtein = lBM * 1.6;
    gramsCarbs = 20;
    gramsFat = ((result - (gramsProtein*4)) - 20 )/9;
    $("#macros").html(`Protein: ${gramsProtein}, Carbs: ${gramsCarbs}, Fat: ${gramsFat}`);
}

function getGener(){
    const woman = document.getElementById("woman");
    const man = document.getElementById("man");

    if(man.checked){
        return man;
    } else return woman;
}

function setGoal(){
    const fatLoss = document.getElementById("fatLoss");
    const weightGain = document.getElementById("weightGain");
    const maintain = document.getElementById("maintain");

    const percentGoal = document.getElementById("percentGoal");
    let percentGoalInput = document.getElementById("percentGoalInput");


    if((fatLoss).checked){
        percentGoal.style.display ="inline-block";
        percentGoalInput.style.display ="inline-block";
        let test = (0.01 * percentGoalInput.value);
        test = test * result;
        return result - test;
    } else if (weightGain.checked){
        
        percentGoal.style.display ="inline-block";
        percentGoalInput.style.display ="inline-block";
        return ((0.01 * percentGoalInput.value) + 1.0) * result;
    }else {
        percentGoal.style.display ="none";
        selectedGoal = 1;
        percentGoalInput.style.display ="none";
        return result;
    }

}











