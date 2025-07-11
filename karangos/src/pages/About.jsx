import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import foto from '../assets/vintage-cars.png';

export default function About() {
  const [likes, setLikes] = useState(
    () => Number(window.localStorage.getItem('likes')) || 0
  );

  
  const [info, setInfo] = useState('');
  useEffect(() => {
    window.localStorage.setItem('likes', likes);
  }, [likes]);


  useEffect(() => {
  const url = `${import.meta.env.VITE_API_BASE}/sobre/1`;
  console.log(" Buscando info em:", url);

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao buscar dados da API");
      }
      return response.json();
    })
    .then(data => {
      console.log(" Dados recebidos:", data);
      setInfo(data.info);
    })
    .catch(error => {
      console.error("Erro ao buscar info:", error);
      setInfo("Não foi possível carregar o conteúdo.");
    });
}, []);

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Sobre o Projeto Karangos
      </Typography>

      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          sx={{ height: 190 }}
          image={foto}
          title="Vintage Cars"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sobre o Projeto Karangos
          </Typography>

        
          <Typography variant="body2" color="text.secondary">
            {info || 'Carregando...'}
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
