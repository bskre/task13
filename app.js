const hasMinimumLength = (password) =>
    password.length >= 8

const hasNumber = (password) =>
    /\d/.test(password)

const hasUppercaseLetter = (password) =>
    /[A-ZА-ЯЁ]/.test(password)

const getFailedRules = (password) =>
    [hasMinimumLength(password)?'':"minimum length",
     hasNumber(password)?'':"number",
     hasUppercaseLetter(password)?'':"uppercase letter"].filter(
        rules => rules != ''
     )

function validatePassword(password) {
    const failedRules = getFailedRules(password)
    return {
        valid: failedRules == [],
        failedRules: failedRules
    }
}

console.log(validatePassword('hello'));
console.log(validatePassword('Hello123'));
console.log(validatePassword('hello123'));
console.log(validatePassword('HELLOABC'));