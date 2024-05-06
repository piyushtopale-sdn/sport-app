// return the token from the local storage
export const getToken = () => {
    return localStorage.getItem('token') || null;
}

// remove the token and user from the session storage
export const removeToken = sessionStorage.removeItem("token");

export const restructureId = (str="", limit = 8) => {
    var first = str.substring(0, limit).replace(/\w{3}$/gi, '...');
    var last = str.substr(str.length - 5);
    return (str.length < limit) ? str : first + last;
    //eg. console.log(truncate("Helloi3h453n535n3m5n", 9))
}

export function console(str1 = null, str2 = null) {
    if (process.env.REACT_APP_ENV === "local") window.console.log(str1, str2)
}

