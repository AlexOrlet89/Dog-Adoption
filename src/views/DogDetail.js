import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { deleteDog, getDogById } from '../services/DogList';
import Navbar from './Navbar';

export default function DogDetail({ currentUser }) {
  const params = useParams();
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogById(params.id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  });

  if (loading) return <div className="loader"> Loading Dog</div>;

  const EditHandler = async () => {
    history.push(`/dog/${dog.id}/edit`);
  };
  const DeleteHandler = async () => {
    await deleteDog(dog.id);
    history.push(`/`);
  };

  return (
    <div>
      <Navbar />
      <p></p>
      <p></p>
      <h2>{dog.name}</h2>
      <h2>{dog.breed}</h2>
      <h2>{dog.age}</h2>
      <h2>{dog.bio}</h2>
      <h2>{dog.image}</h2>
      <div>
        {currentUser && <button onClick={EditHandler}>Edit</button>}
        {currentUser && <button onClick={DeleteHandler}>Delete</button>}
        {/* <button
          onClick={() => {
            if (currentUser) {
              deleteDog(dog.id);
              history.push(`/`);
            } else {
              window.alert(`no! you're not admin!`);
            }
          }}
        >
          Delete
        </button> */}
        {/* <button
          onClick={() => {
            if (currentUser) {
              history.push(`/dog/${dog.id}/edit`);
            } else {
              window.alert(`no! you're not admin!`);
            }
          }}
        >
          Edit
        </button> */}
        <button
          onClick={() => {
            history.push(`/`);
          }}
        >
          Back Home
        </button>
        <div></div>
      </div>
    </div>
  );
}
