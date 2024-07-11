const length = document.getElementById("length");
const includenumbers = document.getElementById("includenumbers");
const includelowercase = document.getElementById("includelowercase");
const includeuppercase = document.getElementById("includeuppercase");
const includesymbols = document.getElementById("includesymbols");
const output = document.getElementById("password");

const numbers = "0123456789";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%^&*_+,.;'/";

function generatepassword() {
    // Prevent the form from submitting
    

    let all = "";
    let password = "";

    if (includenumbers.checked) {
        all += numbers;
    }
    if (includelowercase.checked) {
        all += lowercase;
    }
    if (includeuppercase.checked) {
        all += uppercase;
    }
    if (includesymbols.checked) {
        all += symbols;
    }

    if (all.length === 0) {
        output.textContent = "Please select at least one character type.";
        return;
    }

    for (let i = 0; i < length.value; i++) {
        let index = Math.floor(Math.random() * all.length);
        password += all[index];
    }

    output.textContent = password;
}
