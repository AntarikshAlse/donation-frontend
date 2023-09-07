import React, { useEffect, useState } from 'react';
import { getDonations, getThankYouMessage } from '../api';
import { useNavigate } from 'react-router-dom';

interface Donation{
    userId: number;
    userName:string;
    amount: number;
    donateTo: string;
}
const HomePage: React.FC<{ userId: number }> = ({ userId }) => {
  const [donations, setDonations] = useState([]);
  const [thankYouMessage, setThankYouMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const fetchDonations = async () => {
    try{
        let resp: any = await getDonations(userId);
        let data = await resp.data; 
        setDonations(data);
    }catch(err){
        console.log('Error while fetching donations:', (err as Error).message);
    }

  }
  const fetchThankYouMessage = async () => {
    try{
        let resp: any = await getThankYouMessage(userId);
        let data = await resp.data; 
        setThankYouMessage(data);
    }catch(err){
        console.log('Error while fetching thank you message:',(err as Error).message);
    }
  }
  useEffect(() => { 
    fetchDonations();
    fetchThankYouMessage();
  }, [userId]);

  return (
    <div>
      <h1>Donation History</h1> <button onClick={()=>navigate('/donate')}>Donate</button>
      <ul>
        {donations.map((donation: Donation) => (
          <li key={donation.userId}>{`Amount: ${donation.amount} donated to ${donation.donateTo}`}</li>
        ))}
      </ul>
      {thankYouMessage && <p>{thankYouMessage}</p>}
    </div>
  );
};
export default HomePage;