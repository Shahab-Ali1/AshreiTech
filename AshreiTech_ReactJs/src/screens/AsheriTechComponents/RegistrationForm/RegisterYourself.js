import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, Select, TextField } from '@mui/material/node'
import "./RegisterYourself.css"
import { codeError, formatDate, getMethod } from '../../../utils/services'

const dowpdownData = [
    { Id: 1, stxt: "value1" },
    { Id: 2, stxt: "value2" },
    { Id: 3, stxt: "value3" }
]

const INITIAL_STATE = {
    regNo: "",
    regDate: formatDate(new Date()),
    admReg: "",
    course: "",
    name: "",
    dob: "",
    gender: "",
    fname: "",
    cellno:"",
    whatsappno:"",
    email:"",
    lasteducation:"",
}

export const RegisterYourself = (props) => {
    const [formData, setFormData] = useState({ ...INITIAL_STATE });
    const [genderData, setGenderData] = useState([]);
    useEffect(() => {
        loadData();
        getGender();
    }, [])
    const handleFormData = (event) => {
        if (!event) {
            return
        }
        debugger;
        const { name, value, } = event?.target;
        setFormData((prevField) => ({
            ...prevField,
            [name]: value,
        }));
    }
    /* load Initial Data from Api */
    const loadData = () => {
        try {
            debugger;
            // FOAdmEnquiry/V2/EnquiryChildren/{entityid}/{enquiryid}
            let Id = getIdFromUrl()
            getMethod(`FOAdmEnquiry/V2/EnquiryChildren/9119/${Id}`)
                .then((data) => {
                    debugger;
                    if (data?.IsSuccess) {
                        let obj = data.Data[0];
                        setFormData((prevField) => ({
                            ...prevField,
                            "name": obj.childname,
                            "course": obj.coursestxt,
                            "gender": obj.genderid,
                            "fname": obj.fname,
                            "cellno": obj.cellno,
                            "whatsappno": obj.whatsappno,
                            "email": obj.email,
                            "lasteducation": obj.lastedu,
                            "dob": formatDate(obj.dob),
                        }));
                    }
                })
                .catch(error => {
                    debugger;
                    codeError(error);
                });
        } catch (error) {
            console.log(error);
        }
    };
    const getGender = () => {
        try {
            getMethod("lov/v2/list/GTYPE")
                .then((data) => {
                    if (data) {
                        setGenderData(data?.Data);
                    }
                })
                .catch(error => {
                    codeError(error);
                });
        } catch (error) {
            console.log(error);
        }
    }
    const getIdFromUrl = () => {
        // Get the hash part of the URL
        const hash = window.location.hash;

        // Remove the leading # and the / at the start
        const hashPath = hash.substring(2); // This removes "#/"

        // Split the remaining part by '?' to get the path and ID
        const parts = hashPath.split('?');

        // Extract the ID which is the second part
        const id = parts[1] ? parts[1].split('/')[0] : null;

        return id;
    };
    return (
        <>
            {/* <div className='tabsSpace background'> */}
            <div className='Form_container'>
                <div className='content'>
                    <div className='col-lg-12'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <TextField
                                    name="regDate"
                                    value={formData?.regDate || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Registration Date"
                                    size="small"
                                    format="DD/MM/YYYY"
                                    disabled
                                    InputProps={{
                                        style: { Margin: "0px" }
                                    }}
                                />

                            </div>
                            <div className='col-lg-4'>
                                <TextField
                                    disabled
                                    name="name"
                                    value={formData?.name || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Name*"
                                    size="small"
                                    InputProps={{
                                        style: { Margin: "0px" }
                                    }}
                                />
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg-4'>
                                <TextField
                                    disabled
                                    name="fname"
                                    value={formData?.fname || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Father’s/Guardian Name"
                                    size="small"
                                />
                            </div>
                            <div className='col-lg-4'>
                                <TextField
                                    disabled
                                    name="course"
                                    value={formData?.course || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Course"
                                    size="small"
                                    InputProps={{
                                        style: { Margin: "0px" }
                                    }}
                                />
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg-4'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Gender*</InputLabel>
                                    <Select
                                        disabled
                                        name="gender"
                                        value={formData?.gender || ""}
                                        onChange={handleFormData}
                                        native
                                        label="Gender*"
                                        inputProps={{
                                            name: 'gender',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={0}></option>
                                        {
                                            genderData && genderData?.map((Val, index) => {
                                                return (<option key={index} value={Val.Id}>{Val.stxt}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-lg-4'>
                                <TextField
                                    disabled
                                    name="dob"
                                    value={formData?.dob || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Date Of Birth*"
                                    size="small"
                                    // type="date"
                                    format="DD/MM/YYYY"
                                />
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg-4'>
                                <TextField
                                    disabled
                                    name="cellno"
                                    value={formData?.cellno || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Cell No"
                                    size="small"
                                />
                            </div>
                            <div className='col-lg-4'>
                            <TextField
                                    disabled
                                    name="whatsappno"
                                    value={formData?.whatsappno || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="WhatsApp Number"
                                    size="small"
                                />
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg-4'>
                                <TextField
                                    disabled
                                    name="email"
                                    value={formData?.email || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Email"
                                    size="small"
                                />
                            </div>
                            <div className='col-lg-4'>
                            <TextField
                                    disabled
                                    name="lasteducation"
                                    value={formData?.lasteducation || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Last Education"
                                    size="small"
                                />
                            </div>
                        </div>

                        <div className='row mt-5'>
                        <div className='col-lg-8 d-flex justify-content-end'>
                            <button type='submit' className='buttonClass' onClick={() => props?.handleChange(null, 1)}> Next</button>
                        </div>
                    </div>

                    </div>


                    {/* <div className='row mt-5'>
                        <div className='col-lg-7 ml-n4 d-flex justify-content-end'>
                            <button type='submit' className='buttonClass' onClick={() => props?.handleChange(null, 1)}> Next</button>
                        </div>
                    </div> */}

                </div>
            </div>
        </>
    )
}
