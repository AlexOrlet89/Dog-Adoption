import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchDogs } from './services/DogList';

export default function Home() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
    };
    fetchData();
  }, []);

  console.log(dogs);

  return (
    <div>
      <div>ADOPT A DOG TODAY!</div>
      <div>
        {dogs.map((dog) => (
          <p key={dog.id}>{dog.name}</p>
        ))}
      </div>
    </div>
  );
}
