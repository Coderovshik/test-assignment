export const getInputNumbersValue = function (input: HTMLInputElement) {
    // Return stripped input value — just numbers
    return input.value.replace(/\D/g, '');
}

export const applyMask = function (input: HTMLInputElement) {
    let inputNumbersValue = getInputNumbersValue(input),
        formattedInputValue = "";

    if (!["7", "8"].includes(inputNumbersValue[0])) inputNumbersValue = "7" + inputNumbersValue;
    let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
    formattedInputValue = firstSymbols + " ";
    if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
    }

    return formattedInputValue;
}