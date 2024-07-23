'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { set } from 'zod';
import toast from 'react-hot-toast';

type UpdateButtonProps = {
  id: string; // Assuming each row has a unique ID
  updatePayload?: any;
  isLoading?: boolean; // The data to be updated
  // Define onClick as a function that takes no arguments and returns void
  onClick?: () => void;
};

const UpdateButton: React.FC<UpdateButtonProps> = ({ id, updatePayload, onClick, isLoading }) => {
    
  const handleUpdate =  async() => {
    try {
      await axios.patch(`/api/parliamentary/${id}`, updatePayload);
      
      toast.success('Update successful')
      // Optionally, refresh the data in CollatePage or show a success message
    
    } catch (error) {
      console.error('Error updating data', error);
      // Optionally, handle error (e.g., show an error message)
      toast.error('Error Updating')
    }
  };

  return (
    <button onClick={onClick} type="submit" disabled={isLoading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Update
    </button>
  );
};

export default UpdateButton;