function pentagonAreaCalculator(){
    // const baseInput = document.getElementById('Pentagon-base');
    // const baseText = baseInput.value;
    // const base = parseFloat(baseText);
    const base = getPentagonBase();
    console.log(base);
}

function getPentagonBase(){
    const baseInput = document.getElementById('Pentagon-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    return base;
}