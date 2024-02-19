// SocialDescription.tsx
import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

const SocialDescription: React.FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <Typography variant="body1" fontStyle="italic" {...props}>
      {children}
    </Typography>
  );
};

export default SocialDescription;
