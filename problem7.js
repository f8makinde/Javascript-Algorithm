function examinationGrade(score){
     if(score > 100){
        return `This score is not part of our grading system. Score is too high`;
    }
    else if(score >= 70 &&  score <= 100){
     return `Grade A`;
    }
    else if(score >= 60 && score <= 69){
     return`Grade B`;
    }
    else if(score >= 50 && score <= 59){
        return `Grade C`;
    }
    else if(score >= 40 && score <= 49){
        return `Grade D`;
    }
    else{
        return `Carry Over`
    }
    
}
console.log(examinationGrade("70"));