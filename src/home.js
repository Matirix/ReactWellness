import axios from "axios";
import { useQuery } from "react-query";
import { useState, useEffect, useRef} from "react";

const Home = () => {
    const [currentInput, setInput] = useState(null)
    const [accountName, setAccountName] = useState(null)
    const usertext = useRef(null);
    const {isLoading, error, data} = useQuery("users", fetchUser)

    const setUserInput = () => {
        // console.log("usertext " + usertext.current.value)
        (!usertext.current.value.length) ? setInput(1) : setInput(usertext.current.value)
        // console.log(usertext.current.value)
    }
    //Retrieve
    async function fetchUser() {
        console.log(currentInput)
        console.log("Working from fetchping")
        const user = await axios.get('/users',
        {params: 
            {name: currentInput}
        }
        ).then(res => res.data[0])
        console.log(user)
        return user
    }

    // For Error
    if (error) return <h1> Error {error.message}, try again!</h1>
    // For Loading
    if (isLoading) return <h1> Loading </h1>
    // console.log(data)



    return ( 
        <div className="home">
            <h1 className="title">Search Database for Account </h1>
            <div className="userfield">
                <label htmlFor="search">Search Pokemon Here!</label>
                <input ref={usertext} type="text" id="textsearch"/>
                <button onClick={setUserInput} className="setUserInput">Search!</button>
            </div>
    
            <button onClick={fetchUser}>Click me</button>
            {data && 
                <div className="accounts">
                <p className="accountname">{data.username} - {data.type}</p>    
            </div>
            }

        </div>
     );
}
 
export default Home;