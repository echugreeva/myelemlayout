import {useState,createContext,useContext} from'react'
import { addToLocalStorage, getFromLocalStorage } from '../helpers/localStorage'
import {  Button, Form, Input, Radio } from 'antd';
import BotCreationForm1 from './BotCreationForm1'
import BotCreationForm2 from './BotCreationForm2'
import { AppContext } from '../App';

export const FormContext = createContext();

const BotTwoStepForm =()=>{
    const [data, setData] = useState({});
    const [step, setStep] = useState(1);
    const [inputs, setInputs] = useState('')
    const {setToggle, toggle} =useContext(AppContext)
  
    const handleNextStep = (data)=>{
        setData(data);
        setStep(step + 1);
    }
    
    ;
  
    const handlePrevStep = (data)=>{
        setData(data);
        setStep(step - 1);
    }
  
    const formSubmit = (e) => {
        e.preventDefault()
        let bots = getFromLocalStorage('bots');
        bots.push({...inputs, status:'loading', pages:'14', address: 'mynewsite.com', image: 'https://images.pexels.com/photos/673648/pexels-photo-673648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', created: '15-06-2023',})
        addToLocalStorage('bots', bots)
        setToggle(toggle+1)

    }

    const ButtonStyle = {
        backgroundColor: '#040080',
        color: '#46F2B6',
        padding: '12px 24px',
        gap: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:'0',
        fontWeight: '500'
        
      }

    const h2Style = {
        textAlign: 'center',
        fontFamily: 'DM Sans'
        
    }
  
    return (
    <FormContext.Provider value = {{inputs, setInputs}}>
      <div>
        <h2 style={h2Style}> Step {step} of 2</h2>
        {step === 1 && <BotCreationForm1 
        // data={data} 
        onSuccess={handleNextStep} />}
        
  
        {step === 2 && (
          <BotCreationForm2
            // data={data}
            // onSuccess={handleSubmit}
            onBack={handlePrevStep}
          />
        
        )}
        
        {
            step<2 &&<Button style={ButtonStyle} onClick={()=>{
            
                setStep(step+1)}}>Next</Button>
        }
        
        
      </div>
      {
        step===2 && <Button style={ButtonStyle} onClick={(e)=> {
            formSubmit(e)
        }}>Submit </Button>
      }
      </FormContext.Provider>
    );
  }
  
  export default BotTwoStepForm