import { React, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Close from '../../../src/assets/images/icon_close_modal.svg';
import ConfirmIcon from '../../assets/images/icon_confirm.svg';
import './Login.scss';

function Login(props) {
	const dispatch = useDispatch();
	const ref_email = useRef(null);
	const ref_pass = useRef(null);
	const [loginError, setLoginError] = useState(false);
	const [readonlyEmail, setReadonlyEmail] = useState(true);
	const [readonlyPass, setReadonlyPass] = useState(true);
	const [confirmModal, setConfirmModal] = useState(false);

	useEffect(() => {
		
	}, []);

	const handleClose = () => {
		props.handleClose()
	}
	// let navigate = useNavigate();

	const handleSubmit = (val, e) => {
		e.preventDefault();
	}

	return (
		<>
			<div className="modal modal--active" id="groupPromoteMember">
				<div className='modal__dialog'>
					<div className="modal__content">
						<button type="button" className="btn btn--icon btn--close-modal" data-action="closeModal" onClick={handleClose}>
							<img src={Close} alt="Close" />
						</button>
						<div className="modal__header">
							<h3>Log In or Create Account</h3>
						</div>
						<div className="modal__body">
							<div className='modal-auth-content'>

								{
									props.loginBidCC ? <p>Paying by credit/debit card requires that you log in to your existing account or set up an account. </p> : null
								}


								<form className="form" onSubmit={(e) => handleSubmit(false, e)} autoComplete="off">
									<input type="password" id="prevent_autofill" className="stealthy" style={{ display: "none" }} tabIndex="-1" />

									<div className="form-control form-control--no-label">
										<label className="form-control__label">Email</label>
										<input type="text"
											className="form-control__input"
											placeholder="Email"
											name="userEmail"
											ref={ref_email}
											autoFocus
											defaultValue={props.tokenUser ? props.tokenUser : ""}
											onFocus={() => handleInput("email")}
											onBlur={() => handleBlur("email")}
											autoComplete={"off"}
											readOnly={readonlyEmail}
											onChange={() => setLoginError(false)} />
									</div>
									<div className="form-control form-control--no-label">
										<label className="form-control__label">Password</label>
										<input type="text"
											className="form-control__input"
											// id="txtPassword"
											name="userPassword"
											readOnly={readonlyPass}
											onFocus={() => handleInput("pass")}
											onBlur={() => handleBlur("pass")}
											placeholder="Password"
											ref={ref_pass}
											autoComplete={"off"}
											onChange={() => setLoginError(false)}
											onKeyPress={(e) => handleKeyPress(e)} />
									</div>
									<div className="login_links">
										<div className='forgot-wrap'>
											<div className='error-wrap'>{loginError ? <div className="form-control__error">
												{loginError}
											</div> : null}</div>
											<div className='forgotpassword' onClick={handleResetRedirection}>Forgot Password</div></div>

										<div className='resend-link' >
											<span onClick={handleResendActivation}>Resend email to activate account?</span>
										</div>
									</div>

									<div className='form-control--actions login-btn-wrap'>

										<div className='login-action-btn-wrp'><button type='submit' className="btn">Log In</button></div>
									</div>
									<div className='login-bottom'>

										<hr className='divider' />
										<div className='form-control--actions'>
											<p>Don't have an account?</p>
											<div className='login-action-btn-wrp'><button type='button' className="btn btn-purple" onClick={handleRedirect}>Create Account</button></div>
										</div>
									</div>

								</form>

							</div>


						</div>
					</div>
				</div>
			</div>

			{confirmModal ?
				<div className="modal modal--active" id="modalRemoveListForSale">
					<div className="modal__dialog">
						<div className="modal__content">
							<button
								type="button"
								className="btn btn--icon btn--close-modal"
								onClick={() => setConfirmModal(false)}
							>
								<img src={Close} alt="Close" />
							</button>
							{/* <div className="modal__header">
								<h3>Confirm Log In</h3>
							</div> */}
							<div className="modal__body">
								<p className="text-center">
									<img src={ConfirmIcon} alt="Confirm" />
									<br />
									Your session is still active on another browser/device. Are you sure you want to terminate your existing session and continue with new session?
								</p>
							</div>
							<div className="modal__actions">
								<button
									type="button"
									className="btn btn--remove btn--small"
									onClick={(e) => handleSubmit(true, e)}
								>
									Yes
								</button>
								<button
									type="button"
									className="btn btn--secondary btn--small"
									onClick={() => setConfirmModal(false)}
								>
									No
								</button>
							</div>
						</div>
					</div>
				</div> : null}

		</>);
}

export default Login;