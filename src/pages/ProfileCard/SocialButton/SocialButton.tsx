// SocialButton.tsx
import React, { ReactNode } from 'react';
import { Button, ButtonProps, SvgIconProps } from '@mui/material';

interface SocialButtonProps extends ButtonProps {
  url: string;
  icon: React.ReactElement<SvgIconProps>;
  children: ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ url, icon, children, ...buttonProps }) => {
  return (
    <Button
      variant="contained"
      startIcon={icon}
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      fullWidth
      sx={{
        textTransform: 'none',
        padding: '10px',
        backgroundColor: '#444',
        '&:hover': { backgroundColor: '#555' },
        borderRadius: '10px',
        ...buttonProps.sx, 
      }}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

export default SocialButton;
