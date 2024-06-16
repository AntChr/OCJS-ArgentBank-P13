import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken, selectUser, clearToken } from '../features/counter/authSlice';
import argentBankLogo from '../img/argentBankLogo.png'

function Header() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser)
  const dispatch = useDispatch()


  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      {token ? (
        <div>
          <Link className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i>
            {user ? user.firstName : 'User'}
          </Link>
          <Link className="main-nav-item" to="/" onClick={() => dispatch(clearToken())}>
          <i className="fa-solid fa-right-from-bracket"></i>
            Sign Out
          </Link>
        </div>
      ) : (
        <div>
          <Link className="main-nav-item" to="/signin">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>)}
    </nav>
  )
}

export default Header