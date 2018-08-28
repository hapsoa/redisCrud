// put delete jquery : method

const API = {
  createUser: val => $.post('/a/user', val),
  deleteUser: val => $.post('/a/user', val),
  getUser: val => $.post('/a/user', val),
  updateUser: val => $.post('/a/user', val),
  getUsers: () => $.get('/');
}

async function test() {
  const ret = await API.createUser('a');


  console.log(ret);

}

test();