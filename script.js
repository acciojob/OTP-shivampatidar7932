//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
            const otpContainer = document.getElementById("otpContainer");

            for (let i = 0; i < 6; i++) {
                const inputField = document.createElement("input");
                inputField.type = "text";
                inputField.maxLength = 1;
                inputField.classList.add("code");
                inputField.addEventListener("input", handleInput);
                inputField.addEventListener("keydown", handleBackspace);
                otpContainer.appendChild(inputField);
            }

            function handleInput(event) {
                const currentInput = event.target;
                const nextInput = currentInput.nextElementSibling;

                if (nextInput && currentInput.value !== "") {
                    nextInput.focus();
                }
            }

            function handleBackspace(event) {
                const currentInput = event.target;
                const previousInput = currentInput.previousElementSibling;

                if (event.key === "Backspace" && currentInput.value === "" && previousInput) {
                    previousInput.focus();
                }
            }
        });