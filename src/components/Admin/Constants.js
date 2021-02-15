export const GRAPHQL_API_URL = 'http://localhost:4000';

export const GET_USERS_QUERY = `
query{
    users{
      userName
      id
    }
  }`;

export const REMOVE_USERS_MUTATION = `
    mutation($id:ID!)
     {
    removeUser(id:$id)
}`;

export const CREATE_TUTOR_MUTATION = `
mutation($userName:String!,$password:String!,$role:String){
    createUser(userName:$userName,password:$password,role:"Tutor"){
      id
      userName
    }
  }`;

export const CREATE_STUDENT_MUTATION = `
  mutation($userName:String!,$password:String!,$role:String){
      createUser(userName:$userName,password:$password,role:"Tutor"){
        id
        userName
      }
    }`;
