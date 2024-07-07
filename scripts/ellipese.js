// function ellipseAreaCalculate(){
//     // get major axis
//     const ellipseMajorAxisInput = document.getElementById('major-axis');
//     const ellipseMajorAxisText = ellipseMajorAxisInput.value;
//     const majorAxis = parseFloat(ellipseMajorAxisText);

//     // get minor axis
//     const ellipseMinorAxisInput = document.getElementById('minor-axis');
//     const ellipseMinorAxisText = ellipseMinorAxisInput.value;
//     const minorAxis = parseFloat(ellipseMinorAxisText);

//     // calculate
//     const ellipseArea = majorAxis * minorAxis * Math.PI;
//     const ellipseAreaShort = ellipseArea.toFixed(2);

//     // display ellipse area
//     const ellipseAreaSpan = document.getElementById('Ellipse-equation');
//     ellipseAreaSpan.innerText = ellipseAreaShort;
// }

function calculateEllipseArea(){
    const majorRadius = getInputValueById('major-axis');
    const minorRadius = getInputValueById('minor-axis');
    const area = (Math.PI * majorRadius * minorRadius).toFixed(2);
    setInnerTextById('Ellipse-equation', area);
}