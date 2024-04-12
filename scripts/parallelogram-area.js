function calculateParallelogramArea(){
    // get base
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);

    // get height
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);
    
    // calculate
    const parallelogramArea = base * height;
    console.log(parallelogramArea);

    // display parallelogram area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = parallelogramArea;
}