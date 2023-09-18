const sides = document.querySelectorAll('.side');
const calculateAreaBtn = document.querySelector('#calculate-area-btn');
const output =document.querySelector('#output');

function calculateArea(a,b){
    const areaOfTriangles = 1/2*(a*b) ;
    return areaOfTriangles;
}

function triangleArea(){
    const areaOfTriangles = calculateArea(Number(sides[0].value),Number(sides[1].value));
    output.innerText=` the area of the triangle is ${areaOfTriangles} units `;

}

calculateAreaBtn.addEventListener('click',triangleArea);