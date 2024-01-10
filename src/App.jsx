import { useState } from 'react'
import './App.css'
import { data } from './data'

function App() {

  const [searchTerm, setSearchTerm] = useState('')
  
  console.log(searchTerm);

  const handleChange = (e) => {
    e.preventDefault;
    setSearchTerm(e.target.value)
  }
  return (
    <>
      <h1 style={{color: 'green'}}>Search App</h1>
      <input className='input'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      /> 
      <div className='table-container'>
      <table border="1">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((item) => {
            return searchTerm.toLowerCase === ''? item : item.first_name && item.last_name && item.email.toLowerCase().includes(searchTerm);
          }) .map((person) => (
            <tr key={person.id}>
              <td>{person.first_name}</td>
              <td>{person.last_name}</td>
              <td>{person.email}</td>
            </tr>
))}
        </tbody>
      </table>
      </div>
    </>
  )
  }



export default App
