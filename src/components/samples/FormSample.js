import React, { useState } from 'react'
import styles from './formSample.module.css'

const FormSample = () => {
  return (

<div className={container}>
  <form>
    <div className={formRow}>
      <h4>Account</h4>
    <div className={inputGroup}>
      <input type="text" value={firstName} placeholder="First Name"/>
    </div>
      <div className={inputGroup}>
        <input type="email" placeholder="hello Adress"/>
      </div>
      <div className={inputGroup}>
        <input type="password" placeholder="Password"/>
      </div>
    </div>
    <div className={formRow}>
      <div className={colHalf}>
        <h4>Date of Birth</h4>
      <div className={inputGroup}>
          <div className={colThird}>
            <input type="text" placeholder="DD"/>
          </div>
          <div className={colThird}>
            <input type="text" placeholder="MM"/>
          </div>
          <div className={colThird}>
            <input type="text" placeholder="YYYY"/>
          </div>
        </div>
      </div>
      <div className={colHalf}>
        <h4>Gender</h4>
      <div className={inputGroup}>
          <input id="gender-male" type="radio" name="gender" value="male"/>
          <label for="gender-male">Male</label>
          <input id="gender-female" type="radio" name="gender" value="female"/>
          <label for="gender-female">Female</label>
        </div>
      </div>
    </div>
    <div className={formRow}>
      <h4>Payment Details</h4>
    <div className={inputGroup}>
        <input id="payment-method-card" type="radio" name="payment-method" value="card" checked="true"/>
      <label for="payment-method-card"><span>Credit Card</span></label>
        <input id="payment-method-paypal" type="radio" name="payment-method" value="paypal"/>
      <label for="payment-method-paypal"> <span>Paypal</span></label>
      </div>
      <div className={inputGroup}>
        <input type="text" placeholder="Card Number"/>
      </div>
      <div className={colHalf}>
        <div className={inputGroup}>
          <input type="text" placeholder="Card CVC"/>
        </div>
      </div>
      <div className={colHalf}>
        <div className={inputGroup}>
          <select>
            <option>01 Jan</option>
            <option>02 Jan</option>
          </select>
          <select>
            <option>2015</option>
            <option>2016</option>
          </select>
        </div>
      </div>
    </div>
    <div className={formRow}>
      <h4>Terms and Conditions</h4>
    <div className={inputGroup}>
        <input id="terms" type="checkbox"/>
        <label for="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
      </div>
    </div>
  </form>
</div>

  )
}

export default FormSample
