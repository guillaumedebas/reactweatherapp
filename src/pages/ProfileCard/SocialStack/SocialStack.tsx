// SocialStack.tsx
import React, { ReactNode } from 'react';
import { Stack, StackProps } from '@mui/material';

interface SocialStackProps extends StackProps {
  children: ReactNode;
}

const SocialStack: React.FC<SocialStackProps> = ({ children, ...stackProps }) => {
  return (
    <Stack
      direction="column" 
      spacing={2} 
      alignItems="center" 
      {...stackProps}
    >
      {children}
    </Stack>
  );
};

export default SocialStack;
