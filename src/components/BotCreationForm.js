import {useState, useEffect,useContext} from 'react'
import { addToLocalStorage, getFromLocalStorage } from '../helpers/localStorage'
import {  Button, Form, Input, Radio } from 'antd';
import AppContext from '../App';

const BotCreationForm = () => {
    const [success, setSuccess] = useState(false)


    const [inputs, setInputs] = useState({});
    const {show, setShow,chosen,setChosen} = useContext(AppContext)

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const formSubmit = (e) => {
        e.preventDefault()
        let bots = getFromLocalStorage('bots');
        bots.push({...inputs, id: 'dfdrf'})
        addToLocalStorage('bots', bots)
        setChosen(null)


        
        setSuccess(true)
    }

    useEffect(()=> {
        setSuccess(false)
    },[])

    if (success){
        return (
            <div>
                <p>Your bot is ready!</p>
                <p>embed this code:</p>
                <p>blabablbalablab</p>
            </div>
        )
    }
    else 
    {
         return (
       
            <Form
                
                
                style={{
                    maxWidth: '600px',
                }}
            >
                
                <Form.Item label="bot name">
                    <Input placeholder="bot name" 
                     type="text" 
                     name="name" 
                     value={inputs.name || ""} 
                     onChange={handleChange}
                     />
                </Form.Item>
                <Form.Item label="greeting">
                    <Input placeholder="input placeholder" 
                    
                    type="text" 
                     name="greeting" 
                     value={inputs.greeting || ""} 
                     onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" onClick={(e)=>{formSubmit(e)}}>Submit</Button>
                </Form.Item>
            </Form>
          
        
    )
    }
   
}

export default BotCreationForm