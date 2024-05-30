/**
 * objective 
 * */ 



function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);

    // get triangle height value
    const triangleHeightValue= document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightValue.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    // calculate triangle area
    const triangleArea = 0.5 * base * height;
    console.log('calculate of the triangle is:', triangleArea);

    // display triangle aria
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArea
}