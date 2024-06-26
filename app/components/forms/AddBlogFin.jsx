'use client';
import { useRef } from 'react';
import Button from '../../../app/ui/Buttons';
import { addBlog } from '../../../actions/action';

function AddBlogFin() {
  const formRef = useRef(null);
  const addBlogHandler = async (formData) => {
    try {
      const newBlog = await addBlog(formData);

      // Store the blog data in localStorage
      const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
      blogs.push(newBlog);
      localStorage.setItem('blogs', JSON.stringify(blogs));
      // Clear the form input values
      formRef.current.reset();
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };
  return (
    <form
      ref={formRef}
      action={addBlogHandler}
      className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md"
    >
      <h2 className="text-2xl text-black font-semibold mb-6">
        Create a New Blog Post
      </h2>

      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-600"
        >
          Upload Image Link
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          className="mt-1 p-2 w-full border text-gray-600 rounded-md"
          placeholder="Enter imageUrl"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-600"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="mt-1 p-2 w-full border text-gray-600 rounded-md"
          placeholder="Enter title"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-600"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          className="mt-1 p-2 text-gray-600 w-full border rounded-md"
          placeholder="Enter description"
        ></textarea>
      </div>

      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-600"
        >
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          className="mt-1 p-2 text-gray-600 w-full border rounded-md"
          placeholder="Enter category"
        />
      </div>

      <Button label={'Add Blog'} color={'green'} />
    </form>
  );
}

export default AddBlogFin;
