import React, { useState } from "react";

function Catering() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleAddressChange = (e) => setAddress(e.target.value);
    const handleDateChange = (e) => setDate(e.target.value);
    const handleTimeChange = (e) => setTime(e.target.value);  // Fixed here

    return (
        <div className="p-3 m-0 border-0 bd-example m-0 border-0">
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="floatingInputName"
                    placeholder="name"
                    value={name}
                    onChange={handleNameChange}
                />
                <label htmlFor="floatingInputName">Client Name</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="floatingInputPhone"
                    placeholder="999-999-9999"
                    value={phone}
                    onChange={handlePhoneChange}
                />
                <label htmlFor="floatingInputPhone">Client Phone Number</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    type="email"
                    className="form-control"
                    id="floatingInputEmail"
                    placeholder="name@example.com"
                    value={email}
                    onChange={handleEmailChange}
                />
                <label htmlFor="floatingInputEmail">Client Email Address</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="floatingInputAddress"
                    placeholder="Delivery Address"
                    value={address}
                    onChange={handleAddressChange}
                />
                <label htmlFor="floatingInputAddress">Delivery Address</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    type="date"
                    className="form-control"
                    id="floatingInputDate"
                    placeholder="1/1/2025"
                    value={date}
                    onChange={handleDateChange}
                />
                <label htmlFor="floatingInputDate">Delivery Date</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    type="time"
                    className="form-control"
                    id="floatingInputTime"
                    placeholder="00:00"
                    value={time}
                    onChange={handleTimeChange} 
                />
                <label htmlFor="floatingInputTime">Delivery Time</label>
            </div>
        </div>
    );
}

export default Catering;