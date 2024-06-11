import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectToken } from '../features/counter/authSlice';
import argentBankLogo from '../img/argentBankLogo.png'

const urlUserInfo = "http://localhost:3001/api/v1/user/profile"

function Header() {
  const token = useSelector(selectToken);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {

    const fetchUserInfo = async () => {
      try {
        const response = await axios.post(urlUserInfo, {}, {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        setUserInfo(response.data.body);
      } catch (error) {
        setError(error);
      }
    };

    fetchUserInfo();
  }, [token]);

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
     
      {token ?( 
      <div>
          <a className="main-nav-item" href="/profile">
            <i className="fa fa-user-circle"></i>
            {userInfo ? userInfo.firstName : 'User'}
          </a>
          <a className="main-nav-item" href="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        </div>
        ) : ( 
        <div>
        <a className="main-nav-item" href="/signin">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>)}
    </nav>
  )
}

export default Header