// SocialName.tsx
import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

const SocialName: React.FC<TypographyProps> = ({ children, variant = "h5", ...props }) => {
  return (
    <Typography variant={variant} {...props}>
      {children}
    </Typography>
  );
};

export default SocialName;
