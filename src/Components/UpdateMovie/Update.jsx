import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { moviesActions } from '../../Store/Store';


const Update = () => {
 const dispatch =  useDispatch()
 const navigate = useNavigate();

 const {movieID} = useParams()
 const [updatedData,setUpdatedData] =  useState({
    original_language:"",
    original_title:"",
    overview:"",
    poster_path:""

    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setUpdatedData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(moviesActions.updateMovie({ id: movieID, data: updatedData }));
        setUpdatedData({
            original_language:"",
            original_title:"",
            overview:"",
            poster_path:""
        });
        navigate("/")
      };
    return (
        <form onSubmit={handleSubmit}>
        <label>Movie Name</label>
        <input type='text' name='original_title' value={updatedData.original_title} onChange={handleChange} />
        <label>Overview</label>
        <input type='text'  name='overview' value={updatedData.overview} onChange={handleChange} />
        <label>Language</label>
        <input type='text'  name='original_language' value={updatedData.original_language} onChange={handleChange}/>
        <label>Image Link</label>
        <input type='text' name='poster_path' value={updatedData.poster_path} onChange={handleChange} />
        <input type='submit' value="Update Movie"/>
    </form>
    );
}

export default Update;
