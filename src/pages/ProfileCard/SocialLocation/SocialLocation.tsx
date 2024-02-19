// SocialLocation.tsx
import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

const SocialLocation: React.FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <Typography variant="body2" fontWeight="bold" color="#BADA55" {...props}>
      {children}
    </Typography>
  );
};

export default SocialLocation;