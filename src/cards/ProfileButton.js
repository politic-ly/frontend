import React from 'react';

const ProfileButton = ({imgPath}) => {
    return (
      <div className="profile-button-container">
        <img src={imgPath} />
      </div>
    );
  }
  
  export default ProfileButton;
  