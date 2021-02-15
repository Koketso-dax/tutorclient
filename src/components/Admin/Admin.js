import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { IconButton, ListItem } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import * as Constants from './Constants';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CreateTutor from './CreateTutor';




function Admin() {
  const [data, setData] = useState({ users: [] });
  useEffect(() => {
    //API CALLS
    const fetchData = async () => {
      const queryResult = await axios.post(
        Constants.GRAPHQL_API_URL, {
        query: Constants.GET_USERS_QUERY
      });
      const result = await queryResult.data.data;
      setData({ users: result.users })
    }
    fetchData();
  })

  const removeUser = async (id) => {

    await axios.post(
      Constants.GRAPHQL_API_URL, {
      query: `mutation{
          removeUser(id:"${id}")
        }`,
      variables: {
        id: id
      }
    });


  }
  return (
    <div style={{ display: '-ms-flexbox' }}>
      <div style={{ margin: "auto", width: 800 }}>
        <Paper>
          <List>
            {data.users.map(user => (
              <ListItem
                key={user.id}
                dense
                button
              >
                <ListItemText primary={user.userName} />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Delete" onClick={() => removeUser(user.id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
        <CreateTutor />
      </div>
    </div>
  );

}

export default Admin;