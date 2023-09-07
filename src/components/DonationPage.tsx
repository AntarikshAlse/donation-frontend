import React, { useState } from 'react';
import { addDonation } from '../api';
import { redirect, useNavigate } from 'react-router-dom';

const DonationPage: React.FC<{ userId: number }> = ({ userId }) => {
  const [amount, setAmount] = useState<number>(0);
  const [donateTo, setDonatee] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  let navigate = useNavigate();
  const handleDonation = async () => {
    try {
        let response = await addDonation({ userId, amount, donateTo , userName});
        if(response.status === 201){
            alert('Donation added successfully');
            setAmount(0);
            setDonatee('');
          return navigate('/');

        }
    } catch (error) {
        console.log('Error adding donation:',(error as Error).message);
    }
  };

  return (
    <div>
      <h1>Make a Donation</h1>
      <label >Donation Amount</label>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />&nbsp;
      <label >Donatee Name</label>
      <input
        type="text"
        placeholder="Enter donatee Name"
        value={donateTo}
        onChange={(e) => setDonatee(String(e.target.value))}
      />&nbsp;
      <label >Donor Name</label>
      <input
        type="text"
        placeholder="Enter Donor Name"
        value={userName}
        onChange={(e) => setUserName(String(e.target.value))}
      />&nbsp;
      <button style={{backgroundColor:"green"}} onClick={handleDonation}>Donate</button>
    </div>
  );
};

export default DonationPage;