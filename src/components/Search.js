import React from 'react';

const Search = ({
    setSearchInput,
    searchCategory,
    setSearchCategory
}) => {

    const searchInputHandler = (event) =>{
        setSearchInput(event.target.value);
    }

    return(
        <div className='search d-flex flex-row mb-3'>
            <input className="form-control w-25 mr-3" placeholder='search' onChange={searchInputHandler}/>
            <div className='dropdown'>
                <button className='btn btn-secondary dropdown-toggle' type="button" 
                   id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true"
                   aria-expanded="false">
                    {searchCategory}
                </button> 
                <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                    <button className='dropdown-item' type="button" onClick={()=> setSearchCategory('title')}>Title</button>
                    <button className='dropdown-item'  type="button" onClick={()=> setSearchCategory('location')} >Location</button>
                    <button className='dropdown-item' type="button" onClick={()=> setSearchCategory('description')} >Description</button>
                </div>
            </div>
        </div>
    )
}

export default Search;