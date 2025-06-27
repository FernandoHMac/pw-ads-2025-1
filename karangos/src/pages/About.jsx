import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import foto from '../assets/Eu.jpg.jpeg'; 

export default function About() {
  const [likes, setLikes] = React.useState(
    () => Number(window.localStorage.getItem('likes')) || 0
  );

  React.useEffect(() => {
    window.localStorage.setItem('likes', likes);
  }, [likes]);

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Sobre o autor
      </Typography>

      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={foto}
          title="selfie"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Fernando Machado
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sou estudante de Análise e Desenvolvimento de Sistemas na Fatec Franca. 
            Atualmente, trabalho como desenvolvedor front-end na empresa Karangos, 
            onde tenho a oportunidade de aplicar meus conhecimentos em React e JavaScript. 
            Também sou apaixonado por tecnologia, música,animes e jogos.
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            variant="contained" 
            color="secondary" 
            startIcon={<FavoriteIcon />}
            onClick={() => setLikes(likes + 1)}
          >
            Curtir ({likes})
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
