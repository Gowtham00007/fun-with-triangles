const sides = document.querySelectorAll('.side-input');
    const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
    const output = document.querySelector('#output');


    function calculateSumofSquares(a,b){
        const sumOfSquares = a*a + b*b ;
        return sumOfSquares;
    }

function calculateHypotenuse(){
const sumOfSquares = calculateSumofSquares(Number(sides[0].value),Number(sides[1].value));
const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
output.innerText="the lenght of hypotenues is "+lengthOfHypotenuse;

 
}

    hypotenuseBtn.addEventListener("click",calculateHypotenuse);