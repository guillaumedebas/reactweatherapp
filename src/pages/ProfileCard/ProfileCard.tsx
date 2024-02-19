import React from 'react';
import SocialAvatar from './SocialAvatar/SocialAvatar';
import SocialName from './SocialName/SocialName';
import SocialLocation from './SocialLocation/SocialLocation';
import SocialDescription from './SocialDescription/SocialDescription';
import SocialButton from './SocialButton/SocialButton';
import SocialPaper from './SocialPaper/SocialPaper';
import SocialStack from './SocialStack/SocialStack';
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
    <SocialPaper>
     <SocialStack>
        {imageUrl && <SocialAvatar imageUrl={imageUrl} name={name} />}
        <SocialName>{name}</SocialName>
        {location && <SocialLocation>{location}</SocialLocation>}
        {description && <SocialDescription>{description}</SocialDescription>}
        {githubUrl && <SocialButton url={githubUrl} icon={<GitHub />}>GitHub</SocialButton>}
        {linkedinUrl && <SocialButton url={linkedinUrl} icon={<LinkedIn />}>LinkedIn</SocialButton>}
        {twitterUrl && <SocialButton url={twitterUrl} icon={<Twitter />}>Twitter</SocialButton>}
        {instagramUrl && <SocialButton url={instagramUrl} icon={<Instagram />}>Instagram</SocialButton>}
      </SocialStack>
    </SocialPaper>
  );
};

export default ProfileCard;
