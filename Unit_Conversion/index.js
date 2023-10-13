function convertLength() {
    const inputLength = parseFloat(document.getElementById('length').value); //lengthInMeters
    const inputUnit = document.getElementById('input_units').value; //lengthInMeters
    const selectedUnit = document.getElementById('units').value;
    let convertedLength = 0;

    if (inputUnit === selectedUnit) {
        convertedLength = inputLength
    }

    else if (inputUnit === 'meters' && selectedUnit === 'centimeters') {
        convertedLength = inputLength * 100; // 1 meter = 100 centimeters
    }

    else if (inputUnit === 'meters' && selectedUnit === 'millimeters') {
        convertedLength = inputLength * 1000; // 1 meter = 1000 millimetres
    }

    /*
    //for optional enhancement
    else if (inputUnit === 'millimeters' && selectedUnit === 'meters') {
        convertedLength = inputLength * 1000; // 1 millimeter = 1000 metres
    }

    else if (inputUnit === 'millimeters' && selectedUnit === 'centimeters') {
        convertedLength = inputLength / 10; // 1 millimeter = 0.1 centimetres
    }
    
    else if (inputUnit === 'millimeters' && selectedUnit === 'kilometers') {
        convertedLength = inputLength / 1000000; // 1 millimeter = 0.000001 kilometres
    }

    else if (inputUnit === 'centimeters' && selectedUnit === 'millimeters') {
        convertedLength = inputLength * 10; // 1 centimeter = 10 millimetres
    }

    else if (inputUnit === 'centimeters' && selectedUnit === 'meters') {
        convertedLength = inputLength / 100; // 1 centimeter = 0.01 metres
    }

    else if (inputUnit === 'centimeters' && selectedUnit === 'kilometers') {
        convertedLength = inputLength / 100000; // 1 centimeter = 0.00001 kilometres
    }

    else if (inputUnit === 'kilometers' && selectedUnit === 'millimeters') {
        convertedLength = inputLength * 1000000; // 1 kilometer = 1000000 millimetres
    }

    else if (inputUnit === 'kilometers' && selectedUnit === 'centimeters') {
        convertedLength = inputLength * 100000; // 1 kilometer = 100000 centimetres
    }

    else if (inputUnit === 'kilometers' && selectedUnit === 'meters') {
        convertedLength = inputLength * 1000; // 1 kilometer = 1000 metres
    }
    */

    else {
        convertedLength = inputLength / 1000; // 1 meter = 0.001 kilometers
    }

    document.getElementById('result').innerHTML = `${inputLength} ${inputUnit} = ${convertedLength} ${selectedUnit} `;
}