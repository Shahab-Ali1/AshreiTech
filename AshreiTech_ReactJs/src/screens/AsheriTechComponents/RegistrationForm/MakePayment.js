import React, { useEffect, useState } from 'react';
import "../AdmissionEnquiery/AdmissionEnquiery.css";
import { Checkbox, FormControl, FormControlLabel, InputLabel, Select, TextField } from '@mui/material/node';
const INITIAL_STATE = {
    fname: "",
    lname: "",
}
export const MakePayment = (props) => {
    const [formData, setFormData] = useState({ ...INITIAL_STATE })
    


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
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="First Name"
                                    size="small"
                                    name="fname"
                                />
                            </div>
                            <div className='col-lg-6'>
                                <TextField
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Last Name"
                                    size="small"
                                    name="lname"
                                />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
