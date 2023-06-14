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
        bots.push(inputs)
        addToLocalStorage('bots', bots)
        setToggle(toggle+1)

    }
  
    return (
    <FormContext.Provider value = {{inputs, setInputs}}>
      <div>
        <h2>Step {step} of 2</h2>
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
            step<2 &&<Button onClick={()=>{
            
                setStep(step+1)}}>Next</Button>
        }
        
        
      </div>
      {
        step===2 && <Button onClick={(e)=> {
            formSubmit(e)
        }}>Submit </Button>
      }
      </FormContext.Provider>
    );
  }
  
  export default BotTwoStepForm