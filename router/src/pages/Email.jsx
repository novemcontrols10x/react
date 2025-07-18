import { useLocation } from "react-router-dom"

export default function Email() {
    const location = useLocation()

    console.log(location)
    return (
        <>
            <h1>this is email page</h1>
            <p>{location.state}</p>
        </>
    )
}