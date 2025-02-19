//90 -- A
//80-- B
//70 -- C
//60-- D
//F
function gradeCalc(Marks){
    if(Marks>=90){
        return 'A';
    }
    else if(Marks>=80){
        return 'B';
    }
    else if(Marks>=70){
        return 'C';
    }
    else if(Marks>=60){
        return 'D';
    }
    else{
        return 'F';
    }
    

}

let grade = gradeCalc(85);

console.log(`Grade: ${grade}`);
