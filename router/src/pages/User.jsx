import { useLocation, useParams } from "react-router-dom"
import { users } from "../data"



export default function User() {

    const param = useParams()
    const location = useLocation()

    const id = parseInt(param.id)
    
    const user = users.find((item) => { return id === item.id })

    console.log(location)

    return (
        <>
            <p>welcome to {id} user's Page</p>
            <h1> Name - {user.name}</h1>
            <p>Bio - {user.bio}</p>
        </>
    )
}


