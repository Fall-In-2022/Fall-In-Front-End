import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default function BasicCard(props) {
  return (
    <React.Fragment>
      {props.reportData.length > 0 && <h2 style={{ margin: '3rem' }}>News</h2>}
      <Grid container spacing={3}>
        {props.reportData.slice(0, 6).map((item, index) => (
          <Grid item xs={4} key={index}>
            <Card style={{ margin: '3rem', height: 350 }}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button href={item.link} target="_blank" size="small">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
