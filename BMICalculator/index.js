function calculateBMI(){

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let result = document.getElementById("result");
    let category = document.getElementById("category");

    if(height==="" || weight===""){
        alert("Please enter height and weight");
        return;
    }

    height = height / 100;

    let bmi = weight / (height * height);

    result.innerHTML = `Your BMI : <br>${bmi.toFixed(2)}`;

    if(bmi < 18.5){
        category.innerHTML = "Underweight";
        category.style.color = "orange";
    }
    else if(bmi < 25){
        category.innerHTML = "Normal Weight";
        category.style.color = "green";
    }
    else if(bmi < 30){
        category.innerHTML = "Overweight";
        category.style.color = "blue";
    }
    else{
        category.innerHTML = "Obese";
        category.style.color = "red";
    }

}
