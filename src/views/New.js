import React, { useState } from 'react';
import DogForm from '../components/DogForm';

export default function New() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [age, setAge] = useState(null);

  return (
    <div>
      <DogForm
        name={name}
        setName={setName}
        breed={breed}
        setBreed={setBreed}
        bio={bio}
        setBio={setBio}
        image={image}
        setImage={setImage}
        age={age}
        setAge={setAge}
      />
    </div>
  );
}
