export const validatePassword = (value) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[{}()*&^%$#@!~.`])[A-Za-z\d@{}()*&^%$#!~.`]{8,}$/.test(value);
}

export const validateEmail = (value) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
}

export const alphaNumericString = (value) => {
    return /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/.test(value)
}