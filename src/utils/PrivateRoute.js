import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../features/counter/authSlice';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = useSelector(selectToken);

  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/error" />
        )
      }
    />
  );
};

export default PrivateRoute;
