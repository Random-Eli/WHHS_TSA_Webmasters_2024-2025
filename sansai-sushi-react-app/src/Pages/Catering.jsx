import React, { useState } from "react";
import './Catering.css';

function Catering() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [people, setPeople] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleAddressChange = (e) => setAddress(e.target.value);
    const handleDateChange = (e) => setDate(e.target.value);
    const handleTimeChange = (e) => setTime(e.target.value);
    const handlePeopleChange = (e) => setPeople(e.target.value);

    return (
        <div>
            <div className="mt-5">
            <h1 className="text-center">
                CATERING
            </h1>
            <div className="d-flex justify-content-center">
                <div className="p-3 m-0 border-0 bd-example">
                    <form>
                        <div className="row g-2">
                            <div className="col-md">
                                <div className="form-floating mb-4">
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
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-md">
                                <div className="form-floating mb-4">
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
                            </div>
                        </div>

                        <div className="form-floating mb-4">
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

                        <div className="row g-4">
                            <div className="col">
                                <div className="form-floating mb-4">
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="floatingInputDate"
                                        placeholder="1/1/25"
                                        value={date}
                                        onChange={handleDateChange}
                                    />
                                    <label htmlFor="floatingInputDate">Delivery Date</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating mb-4">
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
                            <div className="col">
                                <div className="form-floating mb-4">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="floatingInputPeople"
                                        placeholder="0"
                                        value={people}
                                        onChange={handlePeopleChange}
                                    />
                                    <label htmlFor="floatingInputPeople">Event Size</label>
                                </div>
                            </div>
                        </div>

                        <div className="row g-5">
                            <div className="col-md">
                                <div className="form-floating mb-4">
                                    <select className="form-select" id="floatingSelectGrid">
                                        <option value="1">Debit Card</option>
                                        <option value="2">Credit Card</option>
                                        <option value="3">PayPal</option>
                                    </select>
                                    <label htmlFor="floatingSelectGrid">Payment Method</label>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="form-floating mb-4">
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
                            </div>
                        </div>
                        <div className="row g-6">
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-dark btn-lg w-25 mx-auto">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Catering;