// SocialAvatar.tsx
import React from 'react';
import { Avatar } from '@mui/material';

interface SocialAvatarProps {
  imageUrl?: string;
  name: string;
}

const SocialAvatar: React.FC<SocialAvatarProps> = ({ imageUrl, name }) => {
  return (
    <Avatar
      src={imageUrl}
      alt={name}
      sx={{ width: 80, height: 80 }}
    />
  );
};

export default SocialAvatar;