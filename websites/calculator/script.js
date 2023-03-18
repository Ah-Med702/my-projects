const signButton = document.getElementById("sign-button");
signButton.addEventListener("click", changeSign);

function changeSign() {
    const answer = document.getElementById("calculator-answer");
    const currentValue = parseFloat(answer.value);
    const newValue = currentValue * -1;
    answer.value = newValue;
}
