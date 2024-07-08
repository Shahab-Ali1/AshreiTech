import React, { useEffect, useState } from 'react';
import "../AdmissionEnquiery/AdmissionEnquiery.css";
import "./RegisterYourself.css"
import { FormControl, InputLabel, Select, TextField } from '@mui/material/node';
import { codeError, getMethod } from '../../../utils/services';
const INITIAL_STATE = {
    paymentNo: "",
    paymentType: "",
}
const dowpdownData = [
    { Id: 1, stxt: "value1" },
    { Id: 2, stxt: "value2" },
    { Id: 3, stxt: "value3" }
]
export const MakePayment = (props) => {
    const [formData, setFormData] = useState({ ...INITIAL_STATE });
    const [paymentData, setPaymentData] = useState([]);
    useEffect(() => {
        payemtMode();
    }, [])
    const payemtMode = () => {
        try {
            getMethod("lov/v2/list/FOCCU")
                .then((data) => {
                    if (data) {
                        setPaymentData(data?.Data);
                    }
                })
                .catch(error => {
                    codeError(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    const handleFormData = (event) => {
        if (!event) {
            return
        }
        const { name, value, } = event?.target;
        setFormData((prevField) => ({
            ...prevField,
            [name]: value,
        }));
    }



    return (
        <>
            <div className="background">
                <div className="form-container" style={{
                    borderStyle: 'solid',
                    borderWidth: '6px',
                    borderImage: 'linear-gradient(to bottom, #D0B62B, #E3AE2E, #008F71, #7C2916, #D0B62C, #053750)',
                    borderImageSlice: 1,
                    borderRadius: '10px',
                }}>
                    <form>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <TextField
                                    name="paymentNo"
                                    value={formData?.paymentNo || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Payment No"
                                    size="small"
                                />
                            </div>
                            <div className='col-lg-6'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Payment Type</InputLabel>
                                    <Select
                                        name="paymentType"
                                        value={formData?.paymentType || ""}
                                        onChange={handleFormData}
                                        native
                                        label="Payment Type"
                                        inputProps={{
                                            name: 'paymentType',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={0}></option>
                                        {
                                            paymentData && paymentData?.map((Val, index) => {
                                                return (<option key={index} value={Val.Id}>{Val.stxt}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-lg-12 d-flex justify-content-end'>
                                <button type="button" className="generateBtn">Generate</button>
                            </div>
                        </div>

                        <div className='row mt-5'>
                            <div className='col-lg-12 d-flex justify-content-end'>
                                <button className='buttonClass mr-2' onClick={(event) => props?.handleChange(event, 0)}> &#8249; Previous</button>
                                <button type='submit' className='buttonClass' onClick={(event) => props?.handleChange(event, 2)}> Next &#8250;</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
