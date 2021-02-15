import React from 'react';
import axios from 'axios';
import * as Constants from '../Admin/Constants'

function Tutor() {

    const createSession = async (e) => {
        e.preventDefault();
        var moduleName = e.target.moduleName.value.toString();
        var topic = e.target.topic.value.toString();
        var date = Date.parse(e.target.sessionDate.value);

        await axios.post(Constants.GET_USERS_QUERY, {
            query: `mutation{
                createSession(string:"${moduleName}",Date:"${date}",string:"${topic}"){
                    topic
                }
            }`, variables: {
                moduleName: moduleName,
                Date: date,
                topic: topic
            }


        })
    }
    return (
        <div>
            <form onSubmit={createSession}>
                <label>
                    Name:
                <input type="text" name="moduleName" />
                </label>
                <label>
                    Topic:
                <input type="text" name="topic" />
                </label>
                <label>
                    Date:
                <input type="date" name="sessionDate" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Tutor;