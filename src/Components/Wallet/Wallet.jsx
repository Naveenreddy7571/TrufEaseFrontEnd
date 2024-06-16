import React, { useState } from 'react';
import './Wallet.css';

function Wallet() {
    const [amount, setAmount] = useState('');
    const [walletBalance, setWalletBalance] = useState(0);
    const [isValid, setIsValid] = useState(true); 

    function AddMoneyToWallet() {
        if (!isNaN(amount)) { 
            setWalletBalance((prevBalance) => prevBalance + Number(amount));
            setIsValid(true); 
        } else {
            setIsValid(false); 
        }
    }

    return (
        <div id="wallet-container" className="container">
            <div className="my-wallet">
                <h1>My Wallet</h1>
                <p><b>&#8377; {walletBalance}</b></p>
            </div>
            <div className="add-money-wallet">
                <h5>Add Money in wallet</h5>
                <label htmlFor='amount'>Amount</label>
                <input 
                    id="amount" 
                    name='amount' 
                    value={amount} 
                    placeholder='Enter Money here.....'
                    onChange={(e) => {
                        const val = e.target.value;
                        setAmount(val);
                        setIsValid(!isNaN(val)); 
                    }}
                />
                {!isValid && <p>Please enter only numbers.</p>} 
                <button onClick={AddMoneyToWallet}>Update Wallet</button>
            </div>
        </div>
    );
}

export default Wallet;
