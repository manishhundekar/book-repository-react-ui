import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ManualEditBook from './ManualEditBook';
import DeleteBook from './DeleteBook';


export default function Book(props) {

  var book = props.details

  return (
    <Card sx={{ maxWidth: 450 , maxHeight: 500 }} style={{marginTop : "10px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {book.title.charAt(0).toUpperCase()}
          </Avatar>
        }
        title= {book.title}
        subheader= {book.authors[0]}
      />
      <CardMedia
        component="img"
        height="194"
        image= {book.imageLinks.thumbnail}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align='justify' style={{height : 70}}>
        {book.description}
        </Typography>
        <Typography variant="h6" color="text.secondary" align='justify' style={{fontWeight : 600}}>
        Price: ₹{book.price}.00
        </Typography>
        <Typography variant="h6" color="text.secondary" align='justify' style={{fontWeight : 600}}>
        Quantity: {book.quantity}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ManualEditBook details={book}/>
        <DeleteBook />
      </CardActions>
    </Card>
  );
}
