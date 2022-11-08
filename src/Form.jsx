import { useState } from "react"
import { Link } from "react-router-dom"

const Form = () => {
    const [Name, setName] = useState('')
    const [City, setCity] = useState('')
    const [Job, setJob] = useState('')
    const [IsLoading, setIsLoading] = useState(false)

    const URL = "http://localhost:9090/tracer"
    const Submit = (e) => {
        e.preventDefault()

        const newAlumni = { Name, City, Job }
        
        setIsLoading(true)

        fetch(URL, {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newAlumni)
        })
        .then((res) => { return res.json() })
        .then((data) => {
            if (data.meta.code === 400) {
                alert(data.data)
                setIsLoading(false)
            }else{
               alert(data.meta.status) 
               setIsLoading(false)
            }
        })

    }


    return (<>
        <form style={{ textAlign: "center", marginTop: "40px" }} onSubmit={Submit}>
            <label>Name</label> <br />
            <input type="text" required onChange={(e) => setName(e.target.value)} />

            <br />
            <br />

            <label>City</label><br />
            <input type="text" required onChange={(e) => setCity(e.target.value)} />

            <br />
            <br />

            <label>Job</label><br />
            <input type="text" required onChange={(e) => setJob(e.target.value)} />

            <br />
            <br />

            {!IsLoading && <button type="submit">Submit</button>}
            {IsLoading && <button type="submit" disabled>Loading...</button>}
            <br />
            <br />
            <Link to="/map">GO TO MAP</Link>
        </form>
    </>);
}

export default Form;