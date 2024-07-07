// function calculateParallelogramArea(){
//     // get base
//     const parallelogramBaseInput = document.getElementById('parallelogram-base');
//     const parallelogramBaseText = parallelogramBaseInput.value;
//     const base = parseFloat(parallelogramBaseText);

//     // get height
//     const parallelogramHeightInput = document.getElementById('parallelogram-height');
//     const parallelogramHeightText = parallelogramHeightInput.value;
//     const height = parseFloat(parallelogramHeightText);

//     // calculate
//     const parallelogramArea = base * height;
//     console.log(parallelogramArea);

//     // display parallelogram area
//     const parallelogramAreaSpan = document.getElementById('parallelogram-area');
//     parallelogramAreaSpan.innerText = parallelogramArea;
// }

// function calculateParallelogramArea(){
//     const base = getParallelogramBase();
//     console.log(base);
// }


// function getParallelogramBase(){
//     // get base
//     const parallelogramBaseInput = document.getElementById('parallelogram-base');
//     const parallelogramBaseText = parallelogramBaseInput.value;
//     const base = parseFloat(parallelogramBaseText);
//     return base;
// }

function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base');
    console.log('Base value', base);

    const height = getInputValueById('parallelogram-height');
    console.log('Height value', height);

    const area = base * height;
    console.log('Parallelogram area is', area);

    setInnerTextById('parallelogram-area', area);
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}