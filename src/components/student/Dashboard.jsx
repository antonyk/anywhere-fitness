import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ClassesList from './ClassesList'
import ClassSearch from './ClassSearch'
import ClassesFilter from './ClassesFilter'
// dummy data
import { getClasses } from '../../data/sample'

export default function Dashboard() {
  const dispatch = useDispatch()
  const classes = useSelector(state => state.classes.list)

  useEffect(() => {
    // load classes and push into state
    // dispatch({ type: 'CLASSES_FETCHING', payload: true })
    dispatch({ type: 'CLASSES_LIST_UPDATE', payload: getClasses() })
    // dispatch({ type: 'CLASSES_FETCHING', payload: false })
  }, [])

  function registerClass(id) {
    dispatch({ type: 'ACCOUNT_CLASS_REGISTER', payload: id })
  }

  return (
    <div>
      <h2>
        User Dashboard
      </h2>
      <h3>
          Search for Classes
      </h3>
      <section>
        <div>
          <ClassSearch />
        </div>
        <div>
          <ClassesFilter />
        </div>
        <div>
          <ClassesList classes={classes} registerClass={registerClass} />
        </div>
      </section>
    </div>
  )
}