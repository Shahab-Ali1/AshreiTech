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
}

export const RegisterYourself = (props) => {
    const [formData, setFormData] = useState({ ...INITIAL_STATE });
    const [genderData, setGenderData] = useState([]);
    useEffect(() => {
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
            // api/FOAdmEnquiryV2/EnquiryChildren/{entityid}/{enquiryid}
            getMethod("FOAdmEnquiryV2/EnquiryChildren/{9119}/{enquiryid}")
                .then((data) => {
                    debugger;
                    if (data) {
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
    return (
        <>
            {/* <div className='tabsSpace background'> */}
            <div className='Form_container'>
                <div className='content'>
                    <div className='col-lg-9'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <TextField
                                    name="regNo"
                                    value={formData?.regNo || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Registration No"
                                    size="small"
                                    InputProps={{
                                        style: { Margin: "0px" }
                                    }}
                                />
                            </div>
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
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg-4'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Admission Register*</InputLabel>
                                    <Select
                                        name="admReg"
                                        value={formData?.admReg || ""}
                                        onChange={handleFormData}
                                        native
                                        label="Admission Register*"
                                        inputProps={{
                                            name: 'admReg',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={0}></option>
                                        {
                                            dowpdownData && dowpdownData.map((Val, index) => {
                                                return (<option key={index} value={Val.Id}>{Val.stxt}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-lg-4'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Course*</InputLabel>
                                    <Select
                                        name="course"
                                        value={formData?.course || ""}
                                        onChange={handleFormData}
                                        native
                                        label="Course*"
                                        inputProps={{
                                            name: 'course',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={0}></option>
                                        {
                                            dowpdownData && dowpdownData.map((Val, index) => {
                                                return (<option key={index} value={Val.Id}>{Val.stxt}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                            {/* <div className='col-lg-3'>
                                <div className='d-flex justify-content-center'>
                                    <button type="button" className="imgUploadBtn">Upload Image</button>
                                </div>
                            </div> */}
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg-8'>
                                <TextField
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
                                    name="dob"
                                    value={formData?.dob || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Date Of Birth*"
                                    size="small"
                                    type="date"
                                    format="DD/MM/YYYY"
                                />
                            </div>
                            <div className='col-lg-4'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Gender*</InputLabel>
                                    <Select
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
                            {/* <div className='col-lg-3'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Blood Group</InputLabel>
                                    <Select
                                        name="stdStatus"
                                        // error={!!errors.stdStatus}
                                        // onChange={handleFormData}
                                        // value={formData?.stdStatus || ""}
                                        native
                                        label="Blood Group"
                                        inputProps={{
                                            name: 'stdStatus',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={0}></option>
                                        {
                                            dowpdownData && dowpdownData.map((Val, index) => {
                                                return (<option key={index} value={Val.Id}>{Val.stxt}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div> */}
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg-3'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Nationality</InputLabel>
                                    <Select
                                        name="stdStatus"
                                        // error={!!errors.stdStatus}
                                        // onChange={handleFormData}
                                        // value={formData?.stdStatus || ""}
                                        native
                                        label="Nationality"
                                        inputProps={{
                                            name: 'stdStatus',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={0}></option>
                                        {
                                            dowpdownData && dowpdownData.map((Val, index) => {
                                                return (<option key={index} value={Val.Id}>{Val.stxt}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-lg-3'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Religion</InputLabel>
                                    <Select
                                        name="stdStatus"
                                        // error={!!errors.stdStatus}
                                        // onChange={handleFormData}
                                        // value={formData?.stdStatus || ""}
                                        native
                                        label="Religion"
                                        inputProps={{
                                            name: 'stdStatus',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={0}></option>
                                        {
                                            dowpdownData && dowpdownData.map((Val, index) => {
                                                return (<option key={index} value={Val.Id}>{Val.stxt}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-lg-3'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Status</InputLabel>
                                    <Select
                                        name="stdStatus"
                                        // error={!!errors.stdStatus}
                                        // onChange={handleFormData}
                                        // value={formData?.stdStatus || ""}
                                        native
                                        label="Status"
                                        inputProps={{
                                            name: 'stdStatus',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={0}></option>
                                        {
                                            dowpdownData && dowpdownData.map((Val, index) => {
                                                return (<option key={index} value={Val.Id}>{Val.stxt}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3'></div>

                    <div className='row mt-5'>
                        <div className='col-lg-7 ml-n4 d-flex justify-content-end'>
                            <button type='submit' className='buttonClass' onClick={() => props?.handleChange(null, 1)}> Next</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
