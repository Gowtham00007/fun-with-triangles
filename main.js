 const inputs = document.querySelectorAll('.angle-input');
 const isTringleBtn = document.querySelector('#is-triangle-btn');
 const output = document.querySelector("#output");

 

function calculateSumOfAngles(angle1,angle2,angle3){
    const sumOfAngels = angle1+angle2+angle3;
    return sumOfAngels;
}



 function isTriangle (){
    const sumOfAngels = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));

    if(sumOfAngels===180){
        output.innerText=" yah , the angles forms a triangle ";
    }else{
        output.innerText=" oh oh ! the angles don't form a triangle";
    }
 }

 isTringleBtn.addEventListener("click",isTriangle)