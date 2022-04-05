import { checkError, client } from './client';

export async function fetchDogs() {
  const response = await client.from('dogs').select('*');
  // console.log(checkError(response));
  return checkError(response);
}

export async function createDog(name, breed, bio, image, age) {
  const response = await client.from('dogs').insert([{ name, breed, bio, image, age }]);
  // console.log(checkError(response));
  return checkError(response);
}
export async function getDogById(id) {
  const response = await client.from('dogs').select(`*`).match({ id: id }).single();
  // console.log(response);
  return checkError(response);
}
export async function updateDog(id, name, breed, bio, image, age) {
  const response = await client.from('dogs').update({ name, breed, bio, image, age }).eq('id', id);
  // console.log(response);
  return checkError(response);
}
export async function deleteDog(id) {
  const response = await client.from('dogs').delete().eq('id', id);
  // console.log(response);
  return checkError(response);
}
