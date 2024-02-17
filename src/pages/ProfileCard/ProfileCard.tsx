import { Paper, Typography, Button, Stack, Avatar } from '@mui/material';
import { GitHub, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import img from '../../assets/img/weathersun.webp'


const ProfileCard = () => {
    return (
        <Paper elevation={4} sx={{ maxWidth: 345, padding: 6, backgroundColor: '#333', color: '#fff', borderRadius: '10px' }}>
            <Stack direction="column" spacing={2} alignItems="center">
                <Avatar
                    src={img}
                    alt="Guillaume Debas"
                    style={{ width: 80, height: 80 }}
                />
                <Typography variant="h5" >Guillaume Debas</Typography>
                <Typography variant="body2" fontWeight='bold' color='#BADA55'>Arras, France</Typography>
                <Typography variant="body1" fontStyle="italic">
                    "Front-end developer and more."
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<GitHub />}
                    component="a"
                    href="https://github.com/guillaumedebas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    sx={{ textTransform: 'none', padding: '10px', backgroundColor: '#444', '&:hover': { backgroundColor: '#555' }, borderRadius: '10px' }}
                >
                    GitHub
                </Button>
                <Button
                    variant="contained"
                    startIcon={<LinkedIn />}
                    component="a"
                    href="https://www.linkedin.com/in/guillaume-debas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textTransform: 'none', padding: '10px', backgroundColor: '#444', '&:hover': { backgroundColor: '#555' }, borderRadius: '10px' }}
                    fullWidth
                >
                    LinkedIn
                </Button>
                <Button
                    variant="contained"
                    startIcon={<Twitter />}
                    component="a"
                    href="https://github.com/guillaumedebas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    sx={{ textTransform: 'none', padding: '10px', backgroundColor: '#444', '&:hover': { backgroundColor: '#555' }, borderRadius: '10px' }}
                >
                    Twitter
                </Button>
                <Button
                    variant="contained"
                    startIcon={<Instagram />}
                    component="a"
                    href="https://github.com/guillaumedebas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textTransform: 'none', padding: '10px', backgroundColor: '#444', '&:hover': { backgroundColor: '#555' }, borderRadius: '10px' }}
                    fullWidth>
                    Instagram
                </Button>
            </Stack>
        </Paper>
    );
};

export default ProfileCard;
