import React, { useState } from 'react';
import { usePlayerProfile } from '../hooks/usePlayerProfile';
import '../styles/PlayerProfile.css';

const PlayerProfile: React.FC = () => {
  const { profile, updateProfile } = usePlayerProfile();
  const [name, setName] = useState(profile.name);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSave = () => {
    updateProfile({ name });
  };

  return (
    <div className="player-profile">
      <h2>Player Profile</h2>
      <div className="profile-field">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default PlayerProfile;
