import React from 'react';

export default function DogForm() {
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          breed:
          <input type="text" name="breed" />
        </label>
        <label>
          bio:
          <input type="text" name="bio" />
        </label>
        <label>
          image:
          <input type="text" name="image" />
        </label>
        <label>
          image:
          <input type="number" name="age" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
