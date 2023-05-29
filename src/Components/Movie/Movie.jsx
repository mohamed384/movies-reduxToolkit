import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { moviesActions } from '../../Store/Store';




const Movie = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
    return (
       <>
        {state.map(movie => {
            return (                    
                <Card sx={{ width: 345 }} style={{boxShadow:"5px 5px 13px 0px rgba(0,0,0,0.75)"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={"https://image.tmdb.org/t/p/w500/" + movie.poster_path }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.original_title} 
          <br/>
          <span style={{fontSize:"14px", fontFamily:'monospace', color:"#777"}}>{movie.original_language.toUpperCase()}</span> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to={`/${movie.id}/update`}>Update</Link></Button>
        <Button size="small"><Link to={`/${movie.id}`}>Details</Link></Button>
       <Button size="small" onClick={() =>{dispatch(moviesActions.deleteMovie(movie.id))}} >Delete</Button>

      </CardActions>
        
             </Card>
            )

        })}
          </>
         
    )
  
        
     
}
 


export default Movie;

/**/
