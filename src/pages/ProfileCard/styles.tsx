import React from 'react';
import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import { Typography, TypographyProps } from '@mui/material';
import { Button, ButtonProps } from '@mui/material';
import { GitHub } from '@mui/icons-material';


interface GitHubButtonProps extends ButtonProps {
  githubUrl: string;
}

export const GitHubButton = styled(
  React.forwardRef<HTMLDivElement, GitHubButtonProps>(
    ({ githubUrl, ...props }, ref) => (
      <Button
        ref={ref}
        variant="contained"
        startIcon={<GitHub />}
        component="a"
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        fullWidth
        sx={{
          textTransform: 'none',
          padding: '10px',
          color: '#fff',
          backgroundColor: '#444',
          '&:hover': { backgroundColor: '#555' },
          borderRadius: '10px',
          ...props.sx,
        }}
        {...props}
      />
    )
  )
)({});



export const StyledAvatar = styled(Avatar)(() => ({
  width: 80,
  height: 80,
}));

export const NameTypography = styled(
  React.forwardRef<HTMLDivElement, TypographyProps>(function NameTypography(props, ref) {
    return <Typography ref={ref} variant="h5" {...props} />;
  })
)({

});

export const LocationTypography = styled(
  React.forwardRef<HTMLDivElement, TypographyProps>((props, ref) => <Typography ref={ref} variant="body2" {...props} />)
)({
  fontWeight: 'bold',
  color: '#BADA55',
});

export const DescriptionTypography = styled(
  React.forwardRef<HTMLDivElement, TypographyProps>((props, ref) => <Typography ref={ref} variant="body1" {...props} />)
)({
  fontStyle: 'italic',
});