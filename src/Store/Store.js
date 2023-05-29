import { configureStore, createSlice } from "@reduxjs/toolkit";



const moviesSlice = createSlice({
    name: 'movies',
    initialState: [],
    reducers: {
        setData: (state, action) => {
            return action.payload;
          },
          addMovie: (state, action) => {
            state.push(action.payload);
          },
          updateMovie: (state, action) => {
            const { id, data } = action.payload;

            const movieToUpdate = state.find((movie) => movie.id === id);
            if (movieToUpdate) {
              Object.assign(movieToUpdate, data);
            }
          },
          deleteMovie: (state, action) => {
            const id = action.payload;
            return state.filter((movie) => movie.id !== id);
          },
        }
    

    


})


const store = configureStore({
    reducer: moviesSlice.reducer
})

export const moviesActions = moviesSlice.actions

export default store