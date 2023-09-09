import { useState } from "react"
import { useEffect } from "react"
import User from "./User";

export default function Usereffect () {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);
    return(
        <>
            {
                users.map(user => <User user={user}></User>)
            }
        </>
    )
}