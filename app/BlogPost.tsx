'use client';
import { useState } from 'react';

export default function BlogPost() {
  const [formIsOpen, setFormIsOpen] = useState(false);
  return (
    <main>
      <h1>Welcome to My Blog</h1>
      {formIsOpen === false ? (
        <button onClick={() => setFormIsOpen(true)}>New Post</button>
      ) : (
        <div>
          <form>
            <input name="date" placeholder="DATE" />
            <input name="title" placeholder="TITLE" />
            <input name="text" placeholder="TEXT" />
            <button>Create</button>
          </form>
          <button onClick={() => setFormIsOpen(!formIsOpen)}>Cancel</button>
        </div>
      )}
    </main>
  );
}
