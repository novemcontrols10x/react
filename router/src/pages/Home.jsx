import { useState } from "react"
import { users } from "../data"
import { Link, useNavigate } from 'react-router-dom'



export default function Home() {
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const handleSubmit = () => {
        //   logic
        console.log(2 + 2)
        let result = 2 + 2
        if (result) {
            navigate('/email', { state: "abc" })
        }
    }


    return (
        <>
            <h1>
                welcome to Home page
            </h1>
            <p>this is the routes</p>

            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleSubmit}>submit</button>
            <ul>

                {
                    users.map((item) => {
                        return (
                            <>
                                <li key={item.id}>
                                    <Link to={`./user/${item.id}`} state={{
                                        name: item.name
                                    }}>{item.name}</Link>
                                </li>
                            </>
                        )
                    })
                }

            </ul>



        </>
    )
}