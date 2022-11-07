import { useState } from "react"
import { Link } from "react-router-dom"

const Form = () => {
    const [Name, setName] = useState('')
    const [City, setCity] = useState('')
    const [Job, setJob] = useState('')

    const URL = "http://localhost:9090/tracer"
    const Submit = (e) => {
        e.preventDefault()
        const newAlumni = { Name, City, Job }


        fetch(URL, {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newAlumni)
        })
        .then((res) => { return res.json() })
        .then((data) => {
            if (data.meta.code === 400) {
                alert(data.data)
            }else{
               alert(data.meta.status) 
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

            <button type="submit">Submit</button>
            <br />
            <br />
            <Link to="/map">GO TO MAP</Link>
        </form>
    </>);
}

export default Form;