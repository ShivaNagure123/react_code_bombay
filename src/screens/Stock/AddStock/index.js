import React, { useState } from 'react'
import { Layout } from '../../../config/routes';
import PageHeader from '../../../components/PageHeader';
import Form from '../../../components/Form';
import LabelledInput, { LabelledInputTypeText, LabelledInputTypeNumber,
LabelledInputTypeReset, LabelledInputTypeSubmit } from '../../../components/LabelledInput';
import LabelledTextArea from '../../../components/LabelledTextArea';
import StockData from '../constants';
import stockManagementAPIs from '../../../services/stock.service';
import Notify from '../../../components/Notify';



const FeedStock = () => {
    const [values, setValues] = useState({});
    const [stockType,setStockType] = useState('');

    const generateType4Options = () => {
        const menuItemsHTML = [];
        StockData.StockTypes.stockType4.forEach(((data, idx) => {
            menuItemsHTML.push(<option value={data.key}>{data.value}</option>);
        }));
        return menuItemsHTML;

    };
    const generateType3Options = () => {
        const menuItemsHTML = [];
        StockData.StockTypes.statusType.forEach(((data, idx) => {
            menuItemsHTML.push(<option value={data.key}>{data.value}</option>);
        }));
        return menuItemsHTML;
        
    };
    const generateOptions = () => {
        const menuItemsHTML = [];
        if(stockType === 'looms'){
            StockData.StockTypes.loomsType.forEach(((data, idx) => {
                menuItemsHTML.push(<option value={data.key}>{data.value}</option>);
            }));
            return menuItemsHTML;
        }
        else if (stockType === 'dobby'){
            StockData.StockTypes.dobbyType.forEach(((data, idx) => {
                menuItemsHTML.push(<option value={data.key}>{data.value}</option>);
            }));
            return menuItemsHTML;
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        
        const responseData = stockManagementAPIs.addStock(values);
        responseData.then((res)=>{
            console.log(res.data)
            if (res.data.msg) {
                Notify.success('Data added Successfully!..', 'top-center');
            }
            else {
                Notify.error('Something went wrong!..', 'top-right');
            }
        });
        
    }
    const handleChange = (e) => {
        const { name } = e.target;
        const { value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const stockTypeDependancy = (e) => {
        setStockType(e.target.value)
    };
    return (
        <Layout>
            <main id='addStockContainer'>
                <PageHeader title='Stock' placeholder='Stock > Feed-Stock' />
                <div className='flex-break'></div>
                <div className='addStockContainer'>
                    <p className='title-xLarge'>Stock Entry Form</p>
                    <div className='flex-break'></div>
                    <Form id="stockForm" onSubmit={(e) => handleSubmit(e)}>
                        <div className='col-1'>
                            <div className='formInputContainer'>
                                <LabelledInput id='stockName'
                                    type={LabelledInputTypeText} label='Stock name :'
                                    breakColumn={true}
                                    placeholder='Enter Stock name'
                                    onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className='formInputContainer SelectField'>
                                <label className='form-label title'>Qty Type :</label>
                                <select className='form-input body-small' name='qtyType' onChange={(e) => handleChange(e)} required>
                                    <option value='' selected>Select Qty Type</option>
                                    <option value='piece'>Piece</option>
                                    <option value='set'>Set</option>
                                </select>                                
                            </div>
                        </div>    
                        <div className='col-1'>
                            <div className='formInputContainer'>
                                <LabelledInput id='qty'
                                    type={LabelledInputTypeNumber} label='Quantity :'
                                    breakColumn={true}
                                    placeholder='Enter Quantity'
                                    onChange={(e) => handleChange(e)} />
                            </div>
                            <div className='formInputContainer SelectField'>
                                <label className='form-label title'>Stock Type-1 :</label>
                                <select className='form-input body-small' name='stockType1' onChange={(e) => {
                                    handleChange(e)
                                    stockTypeDependancy(e)
                                }} required>
                                    <option value='' selected>Select Stock Type-1</option>
                                    <option value='looms'>Looms</option>
                                    <option value='dobby'>Dobby</option>
                                    <option value='nutsbolts'>Nuts & Bolts</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-1'>
                            <div className='formInputContainer SelectField'>
                                <label className='form-label title'>Stock Type-2 :</label>
                                <select className='form-input body-small' name='stockType2' onChange={(e) => handleChange(e)} required>
                                    <option value='' selected>Select Stock Type-2</option>
                                    {generateOptions()}
                                </select>
                            </div>
                            <div className='formInputContainer SelectField'>
                                <label className='form-label title'>Stock Type-3 :</label>
                                <select className='form-input body-small' name='stockType3' onChange={(e) => handleChange(e)}>
                                    <option value='' selected>Select Stock Type-3</option>
                                    {generateType3Options()}
                                </select>
                            </div>
                        </div>
                        <div className='col-1'>
                            <div className='formInputContainer SelectField'>
                                <label className='form-label title'>Stock Type-4 :</label>
                                <select className='form-input body-small' name='stockType4' onChange={(e) => handleChange(e)} required>
                                    <option value='' selected>Select Stock Type-4</option>
                                    {generateType4Options()}
                                </select>
                            </div>
                            <div className='formInputContainer SelectField'>
                                <label className='form-label title'>Status:</label>
                                <select className='form-input body-small' name='status' onChange={(e) => handleChange(e)} required>
                                    <option value='' selected>Select Status</option>
                                    <option value='new'>New</option>
                                    <option value='used'>Used</option>
                                    
                                </select>
                            </div>
                        </div>
                        <div className='col-1'>
                            <div className='formInputContainer SelectField'>
                                <LabelledInput id='initialPriceRange'
                                    type={LabelledInputTypeNumber} label='Price Range :'
                                    breakColumn={true}
                                    placeholder='From'
                                    onChange={(e) => handleChange(e)} />
                                <LabelledInput id='endPriceRange'
                                    type={LabelledInputTypeNumber} label=''
                                    breakColumn={true}
                                    placeholder='To'
                                    onChange={(e) => handleChange(e)} />
                            </div>
                            <div className='formInputContainer SelectField'>
                                <LabelledTextArea id='note' 
                                    placeholder='Write your message...' 
                                    required={true} breakColumn={true} 
                                    label='Note :'  
                                    onChange={(e) => handleChange(e)} />
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='formButtonContainer'>
                                <LabelledInput id='reset'
                                    type={LabelledInputTypeReset} label=''
                                    value='Reset'
                                    breakColumn={false}
                                    placeholder='' />
                                <LabelledInput id='submit'
                                    type={LabelledInputTypeSubmit} label=''
                                    value='Submit'
                                    breakColumn={false}
                                    placeholder='' />
                            </div>
                        </div>
                    </Form>
                </div>
            </main>
        </Layout>
    )
}

export default FeedStock;
