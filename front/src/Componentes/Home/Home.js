import './Home.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Home = () => {
    const [validacion, setValidacion] = useState(false)
    const [user, setUser] = useState({})
    const handlerInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const hadleSubmit = (e) => {
        e.preventDefault()
        
        fetch("http://localhost:3001/register", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                console.log(response)
                setValidacion(response.userExist)

            })
            .catch(error => console.error('Error:', error))
    }
    return (
        <div  >
            {validacion &&
                <div>
                    usuario existe
                </div>}
            <form onSubmit={hadleSubmit}>
                <input onChange={handlerInputChange} name="name" type="text" placeholder='nombre'></input>
                <input onChange={handlerInputChange} name="password" type="text" placeholder='password'></input>
                <button type='submit' >registrar</button>
            </form>
        </div>

    )
}
export default Home





