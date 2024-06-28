import React from 'react'
import { FormControl, InputLabel, Select, TextField } from '@mui/material/node'
import "./RegisterYourself.css"

const dowpdownData = [
    { Id: 1, stxt: "value1" },
    { Id: 2, stxt: "value2" },
    { Id: 3, stxt: "value3" }
]

export const RegisterYourself = (props) => {

    return (
        <>
            {/* <div className='tabsSpace background'> */}
            <div className='Form_container'>
                <div className='content'>
                    <div className='col-lg-9'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <TextField
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Registration No"
                                    size="small"
                                    name="fname"
                                    InputProps={{
                                        style: { Margin: "0px" }
                                    }}
                                />
                            </div>
                            <div className='col-lg-3'>
                                <TextField
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Registration Date"
                                    size="small"
                                    name="fname"
                                    InputProps={{
                                        style: { Margin: "0px" }
                                    }}
                                />
                            </div>
                            <div className='col-lg-3'>
                                <TextField
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Prospectus No"
                                    size="small"
                                    name="fname"
                                    InputProps={{
                                        style: { Margin: "0px" }
                                    }}
                                />
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg-3'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Admission Register*</InputLabel>
                                    <Select
                                        name="stdStatus"
                                        // error={!!errors.stdStatus}
                                        // onChange={handleFormData}
                                        // value={formData?.stdStatus || ""}
                                        native
                                        label="Admission Register*"
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
                                    <InputLabel htmlFor="outlined-age-native-simple">Course*</InputLabel>
                                    <Select
                                        name="stdStatus"
                                        // error={!!errors.stdStatus}
                                        // onChange={handleFormData}
                                        // value={formData?.stdStatus || ""}
                                        native
                                        label="Course*"
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
                            {/* <div className='col-lg-3'>
                                <div className='d-flex justify-content-center'>
                                    <button type="button" className="imgUploadBtn">Upload Image</button>
                                </div>
                            </div> */}
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg-6'>
                                <TextField
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Name*"
                                    size="small"
                                    name="fname"
                                    InputProps={{
                                        style: { Margin: "0px" }
                                    }}
                                />
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg-3'>
                                <TextField
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Date Of Birth*"
                                    size="small"
                                    type="date"
                                    value={new Date()}
                                />
                            </div>
                            <div className='col-lg-3'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Gender*</InputLabel>
                                    <Select
                                        name="stdStatus"
                                        // error={!!errors.stdStatus}
                                        // onChange={handleFormData}
                                        // value={formData?.stdStatus || ""}
                                        native
                                        label="Gender*"
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
                            </div>
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
                            <button type='submit' className='buttonClass' onClick={()=> props?.handleChange(null,1)}> Next</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
