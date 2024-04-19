import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../utils/config';
import { Button, Container, Table } from 'reactstrap';

const AdminUser = () => {
  const [adminUsers, setAdminUsers] = useState([]);
  const [regularUsers, setRegularUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllUsers = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch(`${BASE_URL}/users`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        // Filter users based on their role
        const adminUsers = data.data.filter(user => user.role === 'admin');
        const regularUsers = data.data.filter(user => user.role === 'user');
        setAdminUsers(adminUsers);
        setRegularUsers(regularUsers);
      } else {
        console.error(data.message);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  const deluser = async (id) => {
    try {
      const token = localStorage.getItem('accessToken'); // Retrieve token from localStorage
      console.log('pressed');
      
      const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      });
  
      // Check if the response status is OK (200)
      if (response.ok) {
        // If successful, reload the user list
        getAllUsers();
      } else {
        // If not successful, log the error
        console.error('Failed to delete user:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  
  
  return (
    <div >
      {/* <h2>Admin Users</h2> */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Container >
          <h3>Admin Users</h3>
          <Table borderless className='text-left'>
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Name</th>
                <th>Email</th>
                {/* Add more table headers if needed */}
              </tr>
            </thead>
            <tbody>
              {adminUsers.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  {/* Render more user data if needed */}
                </tr>
              ))}
            </tbody>
          </Table>
          <h3>Regular Users</h3>
          <Table borderless className='text-left'>
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Name</th>
                <th>Email</th>
                {/* Add more table headers if needed */}
              </tr>
            </thead>
            <tbody>
              {regularUsers.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td><Button className='btn-warning'>update</Button></td>
                  <td><Button className='btn-danger' onClick={()=>deluser(user._id)}>Delete</Button></td>
                  {/* Render more user data if needed */}
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </div>
  );
};

export default AdminUser;
