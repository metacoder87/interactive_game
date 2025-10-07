import { useState, useEffect } from 'react';
import { storageService } from '../services/storageService';

interface PlayerProfile {
  name: string;
  // Add more profile settings here later
}

const GUEST_PROFILE: PlayerProfile = {
  name: 'Guest',
};

export const usePlayerProfile = () => {
  const [profile, setProfile] = useState<PlayerProfile>(() =>
    storageService.get('playerProfile', GUEST_PROFILE)
  );

  useEffect(() => {
    storageService.set('playerProfile', profile);
  }, [profile]);

  const updateProfile = (newProfile: Partial<PlayerProfile>) => {
    setProfile(p => ({ ...p, ...newProfile }));
  };

  return { profile, updateProfile };
};
