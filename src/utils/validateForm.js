export function validateForm(formControls) {
    let isValid = true
    for (let key in formControls) {
        isValid = formControls[key].valid && isValid
    }
    return isValid
}