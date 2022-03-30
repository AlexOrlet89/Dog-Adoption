import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { deleteDog, getDogById } from '../services/DogList';

export default function DogDetail() {
  const params = useParams();
  const [dog, setDog] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogById(params.id);
      setDog(data);
    };
    fetchData();
  });
  return (
    <div>
      <p></p>
      <p></p>
      <h2>{dog.name}</h2>
      <h2>{dog.breed}</h2>
      <h2>{dog.age}</h2>
      <h2>{dog.bio}</h2>
      <h2>{dog.image}</h2>
      <div>
        <button
          onClick={() => {
            deleteDog(dog.id);
            history.push(`/`);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            history.push(`/dog/${dog.id}/edit`);
          }}
        >
          Edit
        </button>
        <div></div>
      </div>
    </div>
  );
}
