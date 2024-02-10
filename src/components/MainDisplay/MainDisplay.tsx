import React from 'react';
import { Container } from '@mui/material';

interface MainDisplayProps {
  content: React.ReactNode;
}

function MainDisplay({ content }: MainDisplayProps) {
  return (
    <Container
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {content}
    </Container>
  );
}

export default MainDisplay;
