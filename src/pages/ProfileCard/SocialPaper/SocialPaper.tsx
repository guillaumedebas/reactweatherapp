import React, { ReactNode } from 'react';
import { Paper, PaperProps } from '@mui/material';

interface SocialPaperProps extends PaperProps {
  children: ReactNode;
}

const SocialPaper: React.FC<SocialPaperProps> = ({ children, ...paperProps }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        maxWidth: 345,
        padding: 6,
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: '10px',
        ...paperProps.sx, 
      }}
      {...paperProps}
    >
      {children}
    </Paper>
  );
};

export default SocialPaper;
