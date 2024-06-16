/* eslint-disable react/prop-types */
import { useState } from 'react';
import { updateUserInfo } from '../utils/apiHandler';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, setUser } from '../features/counter/authSlice';

function EditProfile({ cancel }) {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userInfo = await updateUserInfo({ firstName, lastName });
      dispatch(setUser(userInfo.user))
    } catch (error) {
      console.error('Error updating user info:', error);
    }
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="edit-profil-container">
        <div className="edit-profil">
          <label htmlFor="firstname">FirstName</label>
          <input
            type="text"
            id="firstname"
            value={firstName}
            placeholder={user?.firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="edit-profil">
          <label htmlFor="lastname">LastName</label>
          <input
            type="text"
            id="lastname"
            value={lastName}
            placeholder={user?.lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={() => cancel()}>Cancel</button>
    </form>
  );
}

export default EditProfile;
