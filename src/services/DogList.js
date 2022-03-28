import { checkError, client } from './client';

export async function fetchDogs() {
  const response = await client.from('dogs').select('*');
  console.log(checkError(response));
  return checkError(response);
}
