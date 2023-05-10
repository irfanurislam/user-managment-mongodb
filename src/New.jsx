import React, { useEffect, useState } from 'react';

const New = () => {

const [users,setUser] = useState([])

useEffect(() =>{
    fetch('http://localhost:5000/users')
    .then(res =>res.json())
    .then(data => {
        setUser(data)
    })
},[])

const handleAddUser = (e) =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value

    const user = {name,email}

    console.log(name,email)
    console.log(user)

    fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
            "content-type": "application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const newUser = [...users,data]
        setUser(newUser)
          form.reset()
    })
}





    return (
        <div>
            <h2>test management</h2>
            <h2>test management {users.length}</h2>
           
           <form onSubmit={handleAddUser}>
            <label htmlFor="">name</label>
            <input type="text" name='name' />
            <br />
            <label htmlFor="">email</label>
            <input type="email" name='email' />
            <br />
           <br />
            <input type="submit" value=" add user" />
           </form>


            <div>
                {
                    users.map(user => <p key={user.id}>{user.id}:{user.name} : {user.email}</p>)
                }

            </div>
        </div>
    );
};

export default New;