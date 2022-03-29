import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createDog, getDogById } from '../services/DogList';

export default function DogForm({
  name,
  setName,
  breed,
  setBreed,
  bio,
  setBio,
  image,
  setImage,
  age,
  setAge,
}) {
  const params = useParams();
  const [dog, setDog] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogById(params.id);
      setDog(data);
    };
    fetchData();
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (params.id) {
            //updateDog
          }

          createDog(name, breed, bio, image, age);
          console.log('clicked');
        }}
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={dog.name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          breed:
          <input
            type="text"
            name="breed"
            value={dog.breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <label>
          bio:
          <input type="text" name="bio" value={dog.bio} onChange={(e) => setBio(e.target.value)} />
        </label>
        <label>
          image:
          <input
            type="text"
            name="image"
            value={dog.image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          image:
          <input
            type="number"
            name="age"
            value={dog.age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
