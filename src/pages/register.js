import React, { useState } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import './register.css';

const countries = [
  '', 'United States', 'Canada', 'United Kingdom', 'India', 'Australia', 'Other'
];
const courses = [
  '', 'METCS634', 'METCS665', 'METCS673', 'METCS682'
];
const paymentMethods = [
  '', 'Credit Card', 'Debit Card'
];

function RegisterPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    contact: '',
    country: '',
    course: '',
    payment: '',
    card: '',
    expiry: '',
    cvv: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleReset = () => {
    setForm({
      firstName: '', lastName: '', email: '', password: '', address: '', contact: '', country: '', course: '', payment: '', card: '', expiry: '', cvv: ''
    });
    setSubmitted(false);
    setMessage('');
    setMessageType('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Check for any missing required fields
    const missing = Object.keys(form).some(field => !form[field]);
    if (missing) {
      setMessage('Please fill out all required fields.');
      setMessageType('error');
      return;
    }
    setMessage('Registration successful!');
    setMessageType('success');
    setForm({
      firstName: '', lastName: '', email: '', password: '', address: '', contact: '', country: '', course: '', payment: '', card: '', expiry: '', cvv: ''
    });
    setSubmitted(false);
  };

  const error = field => submitted && !form[field];

  return (
    <main>
    <Header />
    <div className="register-page">
      <div className="register-header">
        <div className="container register-header-inner">
          <h1 className="register-title">Welcome to Agile Solutions</h1>
        </div>
      </div>
      <div className="container register-intro">
        <div className="register-subtitle">
          Register to access our comprehensive Agile training and coaching resources.
        </div>
        <form className="register-form" onSubmit={handleSubmit} autoComplete="off">
          <label className="register-label">First Name
            <input className={`register-input${error('firstName') ? ' register-error' : ''}`} name="firstName" type="text" placeholder="Enter your first name" value={form.firstName} onChange={handleChange} required />
          </label>
          <label className="register-label">Last Name
            <input className={`register-input${error('lastName') ? ' register-error' : ''}`} name="lastName" type="text" placeholder="Enter your last name" value={form.lastName} onChange={handleChange} required />
          </label>
          <label className="register-label">Email
            <input className={`register-input${error('email') ? ' register-error' : ''}`} name="email" type="email" placeholder="Enter your email" value={form.email} onChange={handleChange} required />
          </label>
          <label className="register-label">Password
            <input className={`register-input${error('password') ? ' register-error' : ''}`} name="password" type="password" placeholder="Create a password" value={form.password} onChange={handleChange} required />
          </label>
          <label className="register-label">Mailing Address
            <textarea className={`register-input register-textarea${error('address') ? ' register-error' : ''}`} name="address" placeholder="Enter your address" value={form.address} onChange={handleChange} required />
          </label>
          <label className="register-label">Contact No.
            <input className={`register-input${error('contact') ? ' register-error' : ''}`} name="contact" type="text" placeholder="Enter your contact number" value={form.contact} onChange={handleChange} required />
          </label>
          <label className="register-label">Country.
            <select className={`register-input register-select${error('country') ? ' register-error' : ''}`} name="country" value={form.country} onChange={handleChange} required>
              {countries.map(c => <option key={c} value={c}>{c || 'Enter your Country'}</option>)}
            </select>
          </label>
          <label className="register-label">Courses
            <select className={`register-input register-select${error('course') ? ' register-error' : ''}`} name="course" value={form.course} onChange={handleChange} required>
              <option value="">Select a course</option>
              {courses.filter(c => c).map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </label>
          <label className="register-label">Payment Method
            <select className={`register-input register-select${error('payment') ? ' register-error' : ''}`} name="payment" value={form.payment} onChange={handleChange} required>
              {paymentMethods.map(m => <option key={m} value={m}>{m || 'Select payment method'}</option>)}
            </select>
          </label>
          <label className="register-label">Card Number
            <input className={`register-input${error('card') ? ' register-error' : ''}`} name="card" type="text" placeholder="Enter card number" value={form.card} onChange={handleChange} required />
          </label>
          <div className="register-row">
            <label className="register-label register-label-half">Expiry Date
              <input className={`register-input${error('expiry') ? ' register-error' : ''}`} name="expiry" type="text" placeholder="MM/YY" value={form.expiry} onChange={handleChange} required />
            </label>
            <label className="register-label register-label-half">CVV
              <input className={`register-input${error('cvv') ? ' register-error' : ''}`} name="cvv" type="text" placeholder="CVV" value={form.cvv} onChange={handleChange} required />
            </label>
          </div>
          <div className="register-btn-row">
            <button type="button" className="register-btn register-btn-reset" onClick={handleReset}>Reset</button>
            <button type="submit" className="register-btn register-btn-submit" style={{ marginLeft: 'auto' }}>Register</button>
          </div>
          {message && (
            <div className={`register-message ${messageType === 'success' ? 'register-message-success' : 'register-message-error'}`}>{message}</div>
          )}
        </form>
      </div>
      <Footer />
    </div>
    </main>
  );
}

export default RegisterPage; 