import React from 'react'
import { useSelector } from 'react-redux'
import './Workers.css'

const workers = () => {
  const workersData = useSelector(state => (state))

  console.log(workersData)
  return (
    <>
      <div className='container'>
          <p className='title'>Workers</p>
          <p className='total'>Total: {workersData.workersData.total}</p>
          <div className='workers'>
            {
              workersData.workersData.workers.map(worker => (
                <div className='card'>
                  <p>Name: {worker.name}</p>
                  <p>Age: {worker.age}</p>
                  <p>Job: {worker.job}</p>
                  <p>Salary: {worker.salary}</p>
                  <img src={worker.image} width={200} alt="" />
                </div>
              ))
            }
          </div>
      </div>
    </>
  )
}

export default workers