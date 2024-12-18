import React from 'react';
import { useSelector } from 'react-redux';

function UserProfile() {
  const user = useSelector((state) => state.user); 

  return (
    <div>
      <h2>User Profile</h2>
      <p>Title: {user.title}</p>
      <p>Price: {user.price}</p>
      <p>Summary: {user.summary}</p>
      {/* <p>photo: {user.file}</p> */}
    </div>
  );
}

export default UserProfile;
