import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { createDog, updateDog } from '../services/DogList';

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
  const history = useHistory();

  const formSubmitter = async (e) => {
    e.preventDefault();
    if (params.id) {
      updateDog(params.id, name, breed, bio, image, age);
      history.push(`/dog/${params.id}`);
    } else {
      window.alert(`${name}!! Welcome to the Alchemy Adoption Center`);
      createDog(name, breed, bio, image, age);
      history.push(`/`);
    }
  };

  return (
    <div>
      <form onSubmit={formSubmitter}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          breed:
          <input
            type="text"
            name="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <label>
          bio:
          <input type="text" name="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
        </label>
        <label>
          image:
          <input
            type="text"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          image:
          <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
