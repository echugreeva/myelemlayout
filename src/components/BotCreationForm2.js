import { useState, useEffect, useContext } from 'react'
import { addToLocalStorage, getFromLocalStorage } from '../helpers/localStorage'
import { Button, Form, Input, Radio, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { FormContext} from './BotTwoStepForm'

const BotCreationForm2 = () => {


    const {inputs, setInputs} = useContext(FormContext);

    // const [valueRadio, setValueRadio] = useState(1);
    // const onChangeRadio = (e) => {
    //     console.log('radio checked', e.target.value);
    //     setValueRadio(e.target.value);
    // };

    const handleChange = (name, value) => {
        setInputs(values => ({ ...values, [name]: value }))
        console.log(value, inputs)
    }

    // const formSubmit = (e) => {
    //     e.preventDefault()
    //     let bots = getFromLocalStorage('bots');
    //     bots.push(inputs)
    //     addToLocalStorage('bots', bots)

    // }


    return (

        <Form className='myForm'layout={'vertical'}


            style={{
                maxWidth: '600px',
            }}
        >
            <h2>Create new bot</h2>
            <h3>Settings</h3>


            <Form.Item label="Data sources">
                <Radio.Group 
                onChange={(value)=>{handleChange('datasource', value)}}
                // onChange={onChangeRadio} value={valueRadio}
                >
                    <Radio value={'url'}>URL</Radio>
                    <Radio value={'file'}>File</Radio>
                    <Radio value={'ytb'}>Youtube</Radio>
                    
                </Radio.Group>
            </Form.Item>



            <Form.Item label="Urls to include">
                <Input placeholder="example.url.com"
                    type="text"
                    name="url-include"
                    value={""}

                    onChange={(event)=> {handleChange('include', event.target.value)}}
                />
            </Form.Item>
            <Form.Item label="Urls to include">
                <TextArea rows={3} placeholder="example.url.com"
                    type="text"
                    name="url-exclude"
                    value={""}

                    onChange={(event)=> {handleChange('exclude', event.target.value)}}
                />
            </Form.Item>
        
            <Form.Item label="Bot goal">
                <Select

                    defaultValue="Customer support"
                    style={{
                        width: 120,
                    }}
                    onChange={(value)=>{handleChange('goal', value)}}
                    // onChange={(event)=>{
                    //     const value = event.target.value;
                    //     setInputs(values => ({ ...values, language: value }))
                    // }}
                    options={[
                        {
                            value: 'customer support',
                            label: 'Customer support',
                        },
                        {
                            value: 'sales',
                            label: 'Sales',
                        },
                        {
                            value: 'therapist',
                            label: 'therapist',
                        },
                    ]}
                />
            </Form.Item>
            <Form.Item label="Greeting message">
                <Input placeholder="Hi! How can I assist?"
                    type="text"
                    name="greeting"
                    // value={inputs.greeting || ""}
                    value={""}
                    onChange={(event)=> {handleChange('greeting', event.target.value)}}
                />
            </Form.Item>
           
            <Form.Item label="Response behavior">
                <Radio.Group 
                // onChange={onChangeRadio} value={valueRadio}
                onChange={(value)=>{handleChange('behavior', value)}}
                >
                    <Radio value={'short'}>Short</Radio>
                    <Radio value={'normal'}>Normal</Radio>
                    <Radio value={'elaborate'}>Elaborate</Radio>
                    
                </Radio.Group>
            </Form.Item>

        </Form>


    )
}

export default BotCreationForm2