var textInput = document.getElementById("textInput");
var result = document.getElementById("result");

textInput.addEventListener("input", function () {
    var text = textInput.value;

    result.textContent = "Նիշերի քանակը՝ " + text.length;
});

textInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        textInput.value = "";
        result.textContent = "Նիշերի քանակը՝ 0";
    }
});