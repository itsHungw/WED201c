function Validator(option) {
    var formElement = document.querySelector(option.form);
    var validate = function (inputElement, rule) {
        var value = inputElement.value;
        var errorMessage = rule.test(value);
        var errorElement = inputElement.parentElement.querySelector(option.errorSelector);
        if (errorMessage) {
            errorElement.classList.add('invalid');
            errorElement.innerText = errorMessage;
            inputElement.classList.add('invalid-input');
        } else {
            errorElement.innerText = "";
            errorElement.classList.remove('invalid');
            inputElement.classList.remove('invalid-input');
        }
    }

    if (formElement) {
        option.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule)
                }

                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(option.errorSelector);
                    errorElement.innerText = "";
                    errorElement.classList.remove('invalid');
                    inputElement.classList.remove('invalid-input');
                }
            }
        })
    }

}

Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            if (value.trim()) {
                return undefined;
            } else
                return message || "Error: Empty! Try again"
        }
    }
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (emailRegex.test(value)) {
                return undefined

            } else
                return "Error: This must be email! Try again"

        }
    }
}

Validator.isLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            
            if (value.length >= min) {
                return undefined
            } else
                return message || "Error: value lenght at least " +min +" character";
        }
    }
}
Validator.isPasswordTheSame = function (selector, getOriginPassword, message) {
    return {
        selector: selector,
        test: function (value) {
            
            if (value === getOriginPassword()) {
                return undefined
            } else
                return message || "Value conformation different with value above!";
        }
    }
}
