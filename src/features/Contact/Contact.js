import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import Link from '@mui/material/Link';

const Contact = () => {
  return (
    <Container>
      <Card
        maxwidth="lg"
        sx={{
          background: '#fd0',
          borderRadius: 19,
          border: 3,
          boxShadow: 3,
          marginBottom: 2,
        }}
      >
        <Typography align="center" variant="h1" bgcolor="blue[500]">
          Contact Us
          <Divider
            variant="variant"
            component="div"
            sx={{ border: 3, marginBottom: 2 }}
          />
          <Stack direction="row" spacing={2}>
            <Container>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                  border: 3,
                  boxShadow: 3,
                  marginBottom: 2,
                  marginLeft: 10,
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Rafael Diaz" sx={{ bgcolor: blue[500] }}>
                      RD
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Rafael Diaz"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          <ListItem
                            button
                            key="Email"
                            component="a"
                            href="mailto:Rdiaz010@ucr.edu"
                          >
                            Rdiaz010@ucr.edu
                          </ListItem>
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Nikolai Quintos" sx={{ bgcolor: blue[500] }}>
                      NQ
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Nikolai Quintos"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          <ListItem
                            button
                            key="Email"
                            component="a"
                            href="mailto:NikolaiQ@hotmail.com"
                          >
                            NikolaiQ@hotmail.com
                          </ListItem>
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Ricardo Do Zio" sx={{ bgcolor: blue[500] }}>
                      RZ
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Ricardo Do Zio"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          <ListItem
                            button
                            key="Email"
                            component="a"
                            href="mailto:Ricardodizio@gmail.com"
                          >
                            Ricardodizio@gmail.com
                          </ListItem>
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Cristian Fernandez"
                      sx={{ bgcolor: blue[500] }}
                    >
                      CF
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Cristian Fernandez"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          <ListItem
                            button
                            key="Email"
                            component="a"
                            href="mailto:Cristian.fernandez123@yahoo.com"
                          >
                            Cristian.fernandez123@yahoo.com
                          </ListItem>
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Jeffrey Chee" sx={{ bgcolor: blue[500] }}>
                      JC
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Jeffrey Chee"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          <ListItem
                            button
                            key="Email"
                            component="a"
                            href="mailto:Jeffy.chee@gmail.com"
                          >
                            Jeffy.chee@gmail.com
                          </ListItem>
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </Container>
            <Container>
              <Card
                sx={{
                  maxWidth: 345,
                  border: 3,
                  boxShadow: 3,
                  marginLeft: 10,
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="https://uploads-ssl.webflow.com/602de49caf8f40020c998341/613bbff3a8682805929feb29_fallin-background-front-p-1600.png"
                  alt="Fallin Hackathon 2022"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Fallin Hackathon 2022
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Online vets hackathon 🇺🇸 tech for ukraine 🇺🇦
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    href="https://www.fallin.today/"
                    size="medium"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Container>
          </Stack>
        </Typography>
      </Card>
    </Container>
  );
};

export default Contact;
