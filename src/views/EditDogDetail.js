import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DogForm from '../components/DogForm';
import { getDogById } from '../services/DogList';

export default function EditDogDetail() {
  const params = useParams();
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [age, setAge] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogById(params.id);
      setName(data.name);
      setBreed(data.breed);
      setBio(data.bio);
      setImage(data.image);
      setAge(data.age);
    };
    fetchData();
  }, []);

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
      <button
        onClick={() => {
          history.push(`/`);
        }}
      >
        Back Home
      </button>
    </div>
  );
}
