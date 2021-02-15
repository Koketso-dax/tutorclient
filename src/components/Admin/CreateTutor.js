import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import * as Constants from './Constants'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CreateTutor() {
  const classes = useStyles();

  const handleCreate = async (event) => {
    event.preventDefault();
    let userName = event.target.email.value.split();
    let password = event.target.password.value.split();
    let role = "Tutor";

    await axios.post(Constants.GET_USERS_QUERY, {
      query: `mutation{
          createUser(string:"${userName}",string:"${password}",string:"${role}"){
              topic
          }
      }`, variables: {
        moduleName: userName,
        password: password,
        role: role
      }


    })
  }

  //code to submit form to backend 





  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h3">
          Create Tutor
        </Typography>
        <form className={classes.form} onSubmit={handleCreate}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                id="email"
                label="Email Address"
                name="email"

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                name="password"
                label="Password"
                type="password"
                id="password"

              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create Tutor
          </Button>
          <Grid container justify="flex-end">
          </Grid>
        </form>
      </div>

    </Container>
  );
}

