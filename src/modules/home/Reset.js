import { React, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset_password } from "../../context/actions/user";
import { inputFieldMsg } from "../../config/Constants";
import { toast } from "react-toastify";

function Reset(props) {
    let navigate = useNavigate();
    const ref_email = useRef(null);
    const dispatch = useDispatch();
    const [emailError, setEmailerror] = useState(false);
    const [submitBlock, setSubmitBlock] = useState(true);
    const handleSubmit = (e) => {
        let email = ref_email.current?.value;
        e.preventDefault();
    };
    return (
        <>
            <main className="main">
                <div className="container container--centered">
                    <h1>Forgot Password?</h1>

                    <p className="prompt">
                        Enter your Email Address to verify your account. We will
                        email you instructions to reset your password.
                    </p>

                    <form
                        className="form form--centered"
                        onSubmit={handleSubmit}
                    >
                        <div className="form-control form-control--no-label">
                            <label className="form-control__label">Email</label>
                            <input
                                type="email"
                                className="form-control__input form-control__input--centered"
                                ref={ref_email}
                                placeholder="Email Address"
                                onChange={(e) => setEmailerror(false)}
                            />
                            {emailError ? (
                                <div className="form-control__error">
                                    {emailError}
                                </div>
                            ) : null}
                        </div>
                        <div className="form-control form-control--actions">
                            <button className="btn" type="submit">
                                Reset Password
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <div className="top-left"></div>
            <div className="bottom-left"></div>
            <div className="top-right"></div>
        </>
    );
}

export default Reset;
