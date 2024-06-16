import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, selectUser, setUser } from '../features/counter/authSlice';
import { useNavigate } from 'react-router-dom';
import EditProfile from '../components/EditProfile';

const urlUserInfo = "http://localhost:3001/api/v1/user/profile";

const User = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  // const [userInfo, setUserInfo] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/signin')
    }
    const fetchUserInfo = async () => {
      try {
        const response = await axios.post(urlUserInfo, {}, {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        dispatch(setUser(response.data.body))
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  const handleCancel = () => setEditing(false);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{user?.firstName} {user?.lastName}!</h1>
          {editing ? (
            <EditProfile cancel={handleCancel} />
          ) : (
            <button className="edit-button" onClick={() => setEditing(true)}>Edit Name</button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
  );
};

export default User;
