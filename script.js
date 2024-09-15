const input = document.getElementById("input");
const result = document.getElementById("result");
const check = document.getElementById("check");
const clear = document.getElementById("delete");


function validPhoneNumber(phoneNumber) {
    const phonePattern = /^\(?([0-9]{3})\)?[-\s]?([0-9]{3})[-\s]?([0-9]{4})$/;
    const phonePattern2 = /^1?[-\s]?(\(?[0-9]{3}\)?)[-\s]?([0-9]{3})[-\s]?([0-9]{4})$/;
    var codeNumber = phonePattern2.test(phoneNumber);
    var validNumber = phonePattern.test(phoneNumber);
if (validNumber || codeNumber) {
    result.innerText += `Valid US number: ${input.value}.`;
    return;
} else if ((!validNumber && input.value !== "") || 
(!codeNumber && input.value !== "")) {
    result.innerText +=`Invalid US number: ${input.value}.`;
    return;
} 
else {
    alert("Please provide a phone number");
    return;
}
}

check.addEventListener("click", () => {
    validPhoneNumber(input.value)
    input.value = "";
});

clear.addEventListener("click", () => {
    result.innerText = "";
    input.value = "";
});

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        validPhoneNumber(input.value)
        input.value = "";  
    }
})