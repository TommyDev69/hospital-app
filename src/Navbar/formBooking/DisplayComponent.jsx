import React from 'react';


const DisplayComponent = ({ formData }) => {
    console.log("DisplayComponent received formData:", formData);
  return (
    <div className="mt-4 p-4 border rounded-md">
      <h2 className="text-xl mb-2">Submitted Data</h2>
      <div>
        <strong>Name:</strong> {formData.name}
      </div>
      <div>
        <strong>Phone:</strong> {formData.phone}
      </div>
      <div>
        <strong>Calendar:</strong> {formData.calendar}
      </div>
      <div>
        <strong>Address:</strong> {formData.address}
      </div>
      <div>
        <strong>Diagnosed:</strong> {formData.diagnosed}
      </div>
    </div>
  );
};

export default DisplayComponent;
