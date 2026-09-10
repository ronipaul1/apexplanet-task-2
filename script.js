function showMessage() {

    let terms = document.getElementById("terms").checked;

    if (terms) {
        alert("Thank you for registering!");
    }

}
function countCharacters() {

    let reason = document.getElementById("reason").value;

    let count = reason.length;

    document.getElementById("counter").innerText =
        "Characters: " + count;

}
function enableSubmit() {

    let terms = document.getElementById("terms");
    let submit = document.getElementById("submit");

    submit.disabled = !terms.checked;

}