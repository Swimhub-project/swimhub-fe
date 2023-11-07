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

  function SignUp() {
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
            <h1>Create a Swimhub Account</h1>
                <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="fullname" 
                            placeholder="your full name"
                            value={inputs.username || ""} 
                            onChange={handleChange}
                            aria-label="enter full name"
                            required
                        />
                        <input 
                            type="email" 
                            name="enter email" 
                            placeholder="email"
                            value={inputs.email || ""} 
                            onChange={handleChange}
                            aria-label="enter email"
                            required
                        />
                        <input 
                            type="text" 
                            name="choose password" 
                            placeholder="password"
                            value={inputs.password || ""} 
                            onChange={handleChange}
                            aria-label="enter password"
                            required
                        />
                        <input 
                            type="text" 
                            name="password" 
                            placeholder="repeat password"
                            value={inputs.password || ""} 
                            onChange={handleChange}
                            aria-label="repeat password"
                            required
                        />
                        <label>
                        <input 
                            className="checbox"
                            type="checkbox"
                            name="terms-checkbox"
                            // onChange={}
                            />
                            I agree to the terms and conditions
                        </label>
                        <input className="submit" type="submit" />
                </form>
                </div>
            <NakedLink to='/login'>Already have an account? Sign in here</NakedLink>
        </main>
        </Layout>
    )
}
export default SignUp