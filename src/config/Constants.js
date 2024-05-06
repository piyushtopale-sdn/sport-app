import React from "react";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
export const message = {
    loginSuccess: "You are successfully logged in.",
    logoutSuccess: "You are successfully logged out.",
    signUpSuccess: "Account has been created successfully.",
    // resetSuccess: "Password updated successfully.",
    passwordResetSuccess: "Your password was successfully changed.",
    listRemoved: "Listing was removed.",
};

export const inputFieldMsg = {
    emailRequired: "Please enter email.",
    validEmail: "Please enter valid email.",
    fnameRequired: "Please enter first name.",
    lnameRequired: "Please enter last name.",
    passwordRequired: "Please enter password.",
    invalidPassword:
        "Please enter a password with min 8 characters with one uppercase, one lowercase, one number and one special character.",
    passwordNotMatched: "Password and Confirm Password does not match.",
    countryCodeRequired: "Select Country Code.",
    mobileRequired: "Please enter mobile.",
    invalidMobile: "Please enter valid mobile.",
    invalidCardNumber: "Please insert valid card number.",
    invalidCardName: "Please enter name.",
    invalidCardExpiryDate: "Please enter valid credit card expiry date.",
    invalidCvc: "Please enter valid CVC number.",
    countryRequired: "Please select country.",
    districtRequired: "Please select district.",
    cityRequired: "Please enter city.",
    line1Required: "Please fill out address information.",
    postalRequired: "Please enter postal code.",

    fieldRequired: "This field is required.",
    allFieldRequired: "All fields are mandatory.",
    InvalidDetails: "Please enter valid details.",
    aucEndDate: "Auction should not end before start",
    aucStartTime: "Auction time should not be old",
    oldNewSamePass: "Your new password is same as your old password. Please try another password.",
    cardLastNameRequired: "Must include Last Name"
};

export const toast_error = {
    hideProgressBar: true,
    closeButton: false,
    position: toast.POSITION.TOP_CENTER,
    icon: <Icon icon="bx:error-circle" />,
};

export const toast_success = {
    hideProgressBar: true,
    closeButton: false,
    position: toast.POSITION.TOP_CENTER,
    icon: <Icon icon="ep:circle-check" />,
};

export const toast_warning = {
    hideProgressBar: true,
    closeButton: false,
    position: toast.POSITION.TOP_CENTER,
    icon: <Icon icon="clarity:warning-line" />,
};
