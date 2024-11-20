import React, { useState } from 'react';
import DisplayComponent from './DisplayComponent';
import FormOperations from './FormOperations';

const Receipt = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    calendar: '',
    address: '',
    diagnosed: ''
  });

  // Handle form submission and update the formData state
  const handleFormSubmit = (newData) => {
    setFormData(newData);
  };

  return (
    <div className="container mx-auto p-4">
     
      {/* Pass handleFormSubmit to FormOperations as a prop */}
      <FormOperations onSubmit={handleFormSubmit} />

      {/* Display the form data after submission */}
      {formData.name && formData.phone && formData.calendar && formData.address && formData.diagnosed ? (
        <DisplayComponent formData={formData} />
      ) : (
        <p className="text-gray-500">Please fill in the form above.</p>
      )}
    </div>
  );
};

export default Receipt;
