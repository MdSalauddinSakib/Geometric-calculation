// function pentagonAreaCalculator(){
//     const baseInput = document.getElementById('Pentagon-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     const base = getPentagonBase();
//     console.log(base);
// }

// function getPentagonBase(){
//     const baseInput = document.getElementById('Pentagon-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
// }

function pentagonAreaCalculator(){
    const base = getInputValueById("Pentagon-base");
    console.log('Base value is:', base);

    const height = getInputValueById('Pentagon-height');
    console.log('Height value is:', height);

    const area = base * height;
    console.log('Area of the pentagon is:', area);

    setInnerTextById('Pentagon-area', area);
};

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId, text){
    const element = document.getElementById(elementId);
    element.innerText = text;
}