import React from 'react';
import { createDog } from '../services/DogList';

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
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createDog(name, breed, bio, image, age);
          console.log('clicked');
        }}
      >
        <label>
          Name:
          <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          breed:
          <input type="text" name="breed" onChange={(e) => setBreed(e.target.value)} />
        </label>
        <label>
          bio:
          <input type="text" name="bio" onChange={(e) => setBio(e.target.value)} />
        </label>
        <label>
          image:
          <input type="text" name="image" onChange={(e) => setImage(e.target.value)} />
        </label>
        <label>
          image:
          <input type="number" name="age" onChange={(e) => setAge(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
