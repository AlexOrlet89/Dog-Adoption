import React from 'react';
import { fetchDogs } from './services/DogList';

export default function Home() {
  fetchDogs();
  return <div>ADOPT A DOG TODAY!</div>;
}
