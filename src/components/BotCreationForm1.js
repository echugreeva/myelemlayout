import { useState, useEffect, useContext } from 'react'
import { addToLocalStorage, getFromLocalStorage } from '../helpers/localStorage'
import { Button, Form, Input, Radio, ColorPicker, Select } from 'antd';
import { FormContext} from './BotTwoStepForm';
import UploadInput from './Upload';
const { TextArea } = Input;

const BotCreationForm1 = () => {

    const { inputs, setInputs } = useContext(FormContext);

    const handleChange = (name, value) => {
        setInputs(values => ({ ...values, [name]: value }))
        console.log(value, inputs)
    }


    return (

        <Form layout={'vertical'}

            style={{
                maxWidth: '600px',
            }}
             >
            <h2>Create new bot</h2>
            <h3>Identity</h3>
            <p>Chatbot appearance</p>

            <Form.Item label="Bot avatar">
                <UploadInput/>
            </Form.Item>
            <Form.Item label="Bot name">
                <Input placeholder="bot name"
                    type="text"
                    name="name"
                    value={""}
                    onChange={(event)=> {handleChange('name', event.target.value)}}
                />
            </Form.Item>
            <Form.Item label="Bot color theme">
                <ColorPicker 
                onChange={(value)=>{handleChange('color', value)}}
                // onChange={(event)=>{
                //     const value = event.target.value;
                //     setInputs(values => ({ ...values, color: value }))
                // }}
                />
            </Form.Item>
            <Form.Item label="Language">
                <Select
                    defaultValue="english"
                    // style={{
                    //     width: 120,
                    // }}
                    onChange={(value)=>{handleChange('language', value)}}
                    options={[
                        {
                            value: 'english',
                            label: 'english',
                        },
                        {
                            value: 'french',
                            label: 'french',
                        },
                        {
                            value: 'german',
                            label: 'german',
                        },
                    ]}
                />
            </Form.Item>
            <p>Chatbot bubble</p>
            <Form.Item label="Bot Icon">
                <UploadInput uploaded={(value)=>{console.log('uploaded', value)}} />
            </Form.Item>
            <Form.Item label="Position">
                <Select
                    
                    defaultValue="Botton right"
                    style={{
                        width: 120,
                    }}
                    onChange={(value)=>{handleChange('position', value)}}
                    // onChange={(event)=>{
                    //     const value = event.target.value;
                    //     setInputs(values => ({ ...values, position: value }))
                    // }}
                    options={[
                        {
                            value: 'botton left',
                            label: 'Botton left',
                        },
                        {
                            value: 'top left',
                            label: 'Top left',
                        },
                        {
                            value: 'top right',
                            label: 'Top right',
                        },
                    ]}
                />
            </Form.Item>





            <p>Advanced</p>
            <Form.Item label="Custom CSS">
                <TextArea rows={4}
                onChange={(event)=> {handleChange('custom', event.target.value)}}
                ></TextArea>
            </Form.Item>



        </Form>


    )
}



export default BotCreationForm1