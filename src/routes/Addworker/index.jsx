import React from 'react'
import { useState } from 'react'
import defaultimg from '../Addworker/default.webp'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './Addworker.css'
import { addWorkers } from '../../redux/workersSlice'

const addworker = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [job, setJob] = useState('')
  const [salary, setSalary] = useState('')
  const [image, setImage] = useState('')

  const worker = (e) => {
    e.preventDefault()
    if (name === '' || age === '' || job === '' || salary === '' || image === '') {
      alert('all fields are required')
    } else {
      e.preventDefault()
      // dispatch({ type: 'ADD', worker: { name, age, job, salary, image } })
      dispatch( addWorkers({ name, age, job, salary, image }))
      setName('')
      setAge('')
      setJob('')
      setSalary('')
      setImage('')
      navigate('/')
    }
  }

  return (
    <>
      <div className='container'>
        <p className='title'>Add worker</p>
        <div className='addworker'>
          <form className='add' onSubmit={worker}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)} />
            <input type="number" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
            <input type="url" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
            <button type='submit'>Submit</button>
          </form>
          <img src={image === '' ? defaultimg : image} width={200} alt="" />
        </div>
      </div>
    </>
  )
}

export default addworker