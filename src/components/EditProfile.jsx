/* eslint-disable react/prop-types */
import { useState } from 'react';
import { updateUserInfo } from '../utils/apiHandler';

function EditProfile({ userInfo, onSave }) {
  const [firstName, setFirstName] = useState(userInfo.firstName);
  const [lastName, setLastName] = useState(userInfo.lastName);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserInfo({ firstName, lastName });
      onSave({ firstName, lastName });
    } catch (error) {
      console.error('Error updating user info:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="edit-profil-container">
        <div className="edit-profil">
          <label htmlFor="firstname">FirstName</label>
          <input
            type="text"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="edit-profil">
          <label htmlFor="lastname">LastName</label>
          <input
            type="text"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={() => onSave(null)}>Cancel</button>
    </form>
  );
}

export default EditProfile;
