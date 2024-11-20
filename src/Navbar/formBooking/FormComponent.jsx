
import React, { useState } from 'react';

const FormComponent = ({ onSubmit }) => {
  // Local state to manage form fields
  const [title, setTitle] = useState({
    name: '',
    phone: '',
    calendar: '',
    address: '',
    diagnosed: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTitle((prevTitle) => ({
      ...prevTitle,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
  
    e.preventDefault(); // Prevent the form from submitting by default
    
    // Destructure the values from the title state
    const { name, phone, calendar, address, diagnosed } = title;
  
    // Check if any of the fields are empty
    if (name === '' || phone === '' || calendar === '' || address === '' || diagnosed === '') {
      // If any field is empty, show an error message or handle the error
     alert('Please fill in all fields');
      return; // Stop the function here and prevent the form from being submitted
    }
  
    // If all fields are valid, proceed with form submission logic
    alert('Form submitted with values:', { name, phone, calendar, address, diagnosed });
    // onSubmit(title);
    // Pass form data to the parent component (App)
    onSubmit(title);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={title.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border"
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={title.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border"
        />
      </div>
      <div>
        <label>Calendar</label>
        <input
          type="date"
          name="calendar"
          value={title.calendar}
          onChange={handleChange}
          className="w-full px-4 py-2 border"
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={title.address}
          onChange={handleChange}
          className="w-full px-4 py-2 border"
        />
      </div>
      <div>
        <label>Diagnosed</label>
        <input
          type="text"
          name="diagnosed"
          value={title.diagnosed}
          onChange={handleChange}
          className="w-full px-4 py-2 border"
        />
      </div>

      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
