import React from 'react';
import { Paper, Typography, Button, Stack, Avatar } from '@mui/material';
import { GitHub, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

interface ProfileCardProps {
  imageUrl?: string;
  name: string;
  location?: string;
  description?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageUrl,
  name,
  location,
  description,
  githubUrl,
  linkedinUrl,
  twitterUrl,
  instagramUrl
}) => {
  return (
    <Paper elevation={4} sx={{ maxWidth: 345, padding: 6, backgroundColor: '#333', color: '#fff', borderRadius: '10px' }}>
      <Stack direction="column" spacing={2} alignItems="center">
        {imageUrl && (
          <Avatar
            src={imageUrl}
            alt={name}
            sx={{ width: 80, height: 80 }}
          />
        )}
        <Typography variant="h5">{name}</Typography>
        {location && (
          <Typography variant="body2" fontWeight='bold' color='#BADA55'>{location}</Typography>
        )}
        {description && (
          <Typography variant="body1" fontStyle="italic">
            {description}
          </Typography>
        )}
        {githubUrl && (
          <Button
            variant="contained"
            startIcon={<GitHub />}
            component="a"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            sx={{ textTransform: 'none', padding: '10px', backgroundColor: '#444', '&:hover': { backgroundColor: '#555' }, borderRadius: '10px' }}
          >
            GitHub
          </Button>
        )}
        {linkedinUrl && (
          <Button
            variant="contained"
            startIcon={<LinkedIn />}
            component="a"
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            sx={{ textTransform: 'none', padding: '10px', backgroundColor: '#444', '&:hover': { backgroundColor: '#555' }, borderRadius: '10px' }}
          >
            LinkedIn
          </Button>
        )}
        {twitterUrl && (
          <Button
            variant="contained"
            startIcon={<Twitter />}
            component="a"
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            sx={{ textTransform: 'none', padding: '10px', backgroundColor: '#444', '&:hover': { backgroundColor: '#555' }, borderRadius: '10px' }}
          >
            Twitter
          </Button>
        )}
        {instagramUrl && (
          <Button
            variant="contained"
            startIcon={<Instagram />}
            component="a"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            sx={{ textTransform: 'none', padding: '10px', backgroundColor: '#444', '&:hover': { backgroundColor: '#555' }, borderRadius: '10px' }}
          >
            Instagram
          </Button>
        )}
      </Stack>
    </Paper>
  );
};

export default ProfileCard;
