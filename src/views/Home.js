import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { fetchDogs } from '../services/DogList';

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
      <Link to="/new">
        <p>Admin click here to add new dog</p>
      </Link>
      <div>
        {dogs.map((dog) => (
          <Link key={dog.id} to={`/dog/${dog.id}`}>
            <p>{dog.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
