import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Table() {
  const [users, setUsers] = useState([]);
  const [sortDirection, setSortDirection] = useState('asc');
  const rederUserdata = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => setUsers(response.data)).catch(err => {
      console.error("Error while calling API",err);
  });
  } 
  useEffect(()=>{
    rederUserdata();
  },[])
  const sortByName = (direction)=> {
    
    const sortedUsers = [...users].sort((a, b) => {
      if (direction === 'asc') {
        setSortDirection("desc");
        return a.name.localeCompare(b.name);
      } else {
        setSortDirection("asc");
        return b.name.localeCompare(a.name);
      }
    });
    setUsers(sortedUsers);
  }

  const sortByCity = (direction)=> {
    
    const sortedUsers = [...users].sort((a, b) => {
      if (direction === 'asc') {
        setSortDirection("desc");
        return a.address.city.localeCompare(b.address.city);
      } else {
        setSortDirection("asc");
        return b.address.city.localeCompare(a.address.city);
      }
    });
    setUsers(sortedUsers);
  }
  return (
    <div className="table-component mt-30">
      <header>
      <h3>User Details</h3>
      </header>
      <section>
      <table className='mt-30'>
              <thead>
                <tr>
                <th onClick={() => sortByName(sortDirection)}>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th onClick={() => sortByCity(sortDirection)}>City</th>
                <th>Zip Code</th>
                <th>Contact</th>
                <th>Company Name</th>
                <th>Website</th>
                </tr>
              </thead>
              <tbody id="table-bind">
                {users.map((user)=>{
                  return (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.address.city}</td>
                      <td>{user.address.zipcode}</td>
                      <td>{user.phone}</td>
                      <td>{user.company.name}</td>
                      <td>{user.website}</td>
                    </tr>
                  )
                })}
        </tbody>
        </table>
        </section>
    </div>
  )
}

export default Table