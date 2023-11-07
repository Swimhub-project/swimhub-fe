import Layout from "../../components/Layout";
import { useState } from "react";
import '../../styles/components/credentials.css'
import Logo from '../../assets/swimhubfull.webp'
import { NakedLink } from "../../components/Links";

interface FormInputs {
    username: string;
    email: string;
    password: string;
  }

  function Login() {
    const [inputs, setInputs] = useState<FormInputs>({
      username: "",
      email: "",
      password: "",
    });

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
      const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(inputs);
      }
    return (
        <Layout>
            <main className="credential-main">
                <div className="credential-container">
                <img src={Logo} alt="" />
            <h1>Log Into Your Account</h1>
                <form onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="enter email"
                            value={inputs.email || ""} 
                            onChange={handleChange}
                            aria-label="enter email"
                            required
                        />
                        <input 
                            type="text" 
                            name="password" 
                            placeholder="enter password"
                            value={inputs.password || ""} 
                            onChange={handleChange}
                            aria-label="enter password"
                            required
                        />
                        <label>
                        <input 
                            type="checkbox"
                            name="stayLoggedIn"
                            // onChange={}
                            />
                            Keep me logged in
                        </label>
                        <NakedLink to='/'>Forgot your password?</NakedLink>
                        <input className="submit" type="submit" />
                </form>
                </div>
            <NakedLink to='/signup'>Don't have an account? Create one here</NakedLink>
        </main>
        </Layout>
    )
}
export default Login