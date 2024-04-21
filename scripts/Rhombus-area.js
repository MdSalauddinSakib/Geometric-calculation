function rhombusAreaCalculate(){
    const baseInput = document.getElementById('Rhombus-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base);

    const heightInput = document.getElementById('Rhombus-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    console.log(height);

    const calculateRhombusArea = 0.5 * base * height;
    console.log("calculate of the rhombus area is:", calculateRhombusArea);

    const rhombusAreaSpan = document.getElementById('Rhombus-area');
    rhombusAreaSpan.innerText = calculateRhombusArea;
}