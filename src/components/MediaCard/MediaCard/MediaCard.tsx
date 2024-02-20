import { CardMedia, Chip } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import img from '../../../assets/img/weathersun.webp'

export default function MediaCard() {
    return (
        <Card sx={{
            maxWidth: 345,
            borderRadius: 3,
            backgroundColor: '#fafafa',
            boxShadow: '10px 10px 0px rgba(0, 25, 25, 1)',
            border: '1px solid #000000',
        }}>
            <CardMedia
                component="img"
                height="140"
                image={img}
                alt="Media"
                sx={{ // Appliquez ici les styles supplémentaires si nécessaire
                    width: '90%', // Assurez-vous que l'image couvre la largeur de la carte
                    borderRadius: '20px',
                    padding: '1rem', // Arrondit les coins supérieurs
                }}
            />
            <CardContent>
                <Chip label="Learning" sx={{
                    fontSize: '1rem',
                    height: 'auto',
                    padding: '0.5rem 0.3rem',
                    backgroundColor: '#ffcc00', // ou toute autre couleur de fond désirée
                    color: 'black', // ou toute autre couleur de texte désirée
                    fontWeight: 'bold',
                    borderRadius: '4px' // ou '16px' pour des bords plus arrondis
                }} />
                <Typography
                    sx={{
                        mb: 1.5,
                        color: '#000'
                    }}
                    color="text.secondary"
                >
                    Published 21 Dec 2023
                </Typography>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ color: '#000000' }}
                >
                    HTML & CSS foundations
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: '#4a4a4a'
                    }}
                >
                    These languages are the backbone of every website, defining structure, content, and presentation.
                </Typography>
            </CardContent>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14, color: '#787878' }}
                    color="text.secondary"
                    gutterBottom
                >
                    Greg Hooper
                </Typography>
            </CardContent>
        </Card>
    );
}
