import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { fetchDogs } from '../services/DogList';
import Navbar from './Navbar';

export default function Home({ currentUser }) {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      console.log(data);
      setDogs(data);
      setLoading(false);
    };
    fetchData();
  }, [dogs]);

  if (loading) return <div className="loader"> Loading Doggies</div>;

  return (
    <div>
      <div>
        {currentUser ? <h1>{`Welcome, Admin ${currentUser}`}</h1> : <h1>ADOPT A DOG TODAY!</h1>}
      </div>
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
