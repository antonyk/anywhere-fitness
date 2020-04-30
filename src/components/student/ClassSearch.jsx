import React, { useState } from 'react'
import { useDispatch } from 'react-redux';


export default function ClassSearch() {
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    dispatch({ type: 'CLASSES_SEARCH_UPDATE', payload: searchVal })
  }
  function resetHandler(e) {
    e.preventDefault();
    setSearchVal('');
    dispatch({ type: 'CLASSES_LIST_RESET' })
  }

  return (
    <>

    <form onSubmit={submitHandler} >

      <label htmlFor="search">
        <input name='search' type="search" id='search' className='' 
          placeholder='Search for Classes or Instructors' value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)} />
      </label>

      <button className="btn btn-outline-success">Apply</button>
      <button className="btn btn-outline-success" onClick={resetHandler} >Reset</button>

    </form>

    </>
  )
}