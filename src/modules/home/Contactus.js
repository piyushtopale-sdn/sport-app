import { React, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { contact_admin } from '../../context/actions/user';
import { useSelector } from 'react-redux';
import { inputFieldMsg } from '../../config/Constants';

function ContactUs() {
  
    
    const handlSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <main className="main">
                <div className="container container--overlay">
                    <h1>Contact Us</h1>
                    <form className="form spacer" onSubmit={handlSubmit}>
                        <div className="form-group">
                            <div className="form-control">
                                <label className="form-control__label" htmlFor="firstName">First Name</label>
                                <input type="text" className="form-control__input" id="firstName" defaultValue={user ? user.first_name : ""} ref={ref_fname} />
                            </div>
                            <div className="form-control">
                                <label className="form-control__label" htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control__input" id="lastName" defaultValue={user ? user.last_name : ""} ref={ref_lname} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-control">
                                <label className="form-control__label" htmlFor="email">Email</label>
                                <input type="email" className="form-control__input" defaultValue={user ? user.email : ""} id="email" ref={ref_email} />
                            </div>
                            <div className="form-control">
                                <label className="form-control__label" htmlFor="mobilePhone" >Mobile Phone</label>
                                <div className='form-control-group'>
                                    <div className='flex-shrink-0'>
                                        <select className="form-control__select" defaultValue={user ? `${user.country_code}` : "+1"} ref={ref_code}>
                                            {countries && countries.length && countries.map((p, index) => {
                                                return (<option key={index} value={`+${p.phonecode}`}>{`${p.sortname} (+${p.phonecode})`}</option>)
                                            })
                                            }
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="number" id="mobilePhone" defaultValue={user ? user.mobile : ""} maxLength={10} className="form-control__input" onKeyPress={(e) => e.target.value.length > 9 ? e.preventDefault() : ""} ref={ref_mob} />
                                    </div>
                                </div>
                                {error.err_mob ? <div className="form-control__error">
                                    {inputFieldMsg.passwordRequired}
                                </div> : null}
                                {/* <input type="text" className="form-control__input" maxLength={10} id="mobilePhone" ref={ref_mob} /> */}
                            </div>
                        </div>

                        <div className="form-control form-control--wide">
                            <label className="form-control__label" htmlFor="message">Message</label>
                            <textarea className="form-control__input" id="message" rows="5"
                                placeholder="Enter your message" ref={ref_message}></textarea>
                        </div>
                        {error ? <div className="form-control__error">
                            {inputFieldMsg.allFieldRequired}
                        </div> : null}
                        <div className="form-control--actions">
                            <button type='submit' className="btn">Send to Support</button>
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
export default ContactUs;