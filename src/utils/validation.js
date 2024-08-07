import is from 'is_js'

export default function validateControl(value, validation) {
    if (!validation) {
        return true
    }
    let isValid = true
    if (validation.required) {
        isValid = value.trim() !== '' && isValid
    }

    if (validation.email) {
        isValid = is.email(value.trim()) && isValid
    }

    if (validation.minLength) {
        isValid = (value.length >= validation.minLength) && isValid
    }

    return isValid
}