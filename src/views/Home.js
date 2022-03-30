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
      setDogs(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div className="loader"> Loading Doggies</div>;

  return (
    <div>
      <Navbar currentUser={currentUser} />
      {currentUser ? <div>Welcome, Admin {currentUser}</div> : <div>ADOPT A DOG TODAY!</div>}
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
