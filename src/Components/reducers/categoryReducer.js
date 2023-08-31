import { createSlice } from '@reduxjs/toolkit';

const categoryReducer = createSlice({
    name: 'products',
    reducers: {

        addCategory(state,action){
            state.push(action.payload);
        },
        updateCategory(state,action){
            const { id, updatedCategory } = action.payload;
            const categoryIndex = state.findIndex(category => category.id === id);
            if (categoryIndex !== -1) {
                state[categoryIndex] = updatedCategory;
            }
        },
        deleteCategory: (state, action) => {
            const categoryId = action.payload;
            return state.filter(category => category.id !== categoryId);
          },

    }
});
export const { addCategory, updateCategory, deleteCategory } = categoryReducer.actions;

export default categoryReducer.reducer;