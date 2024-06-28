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
                    <div className='row'>
                        <div className='col-lg-3'>
                            <TextField
                                className="w-100"
                                id="outlined-controlled"
                                label="First Name"
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
                                label="First Name"
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
                                label="First Name"
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
                                <InputLabel htmlFor="outlined-age-native-simple">Student Status</InputLabel>
                                <Select
                                    name="stdStatus"
                                    // error={!!errors.stdStatus}
                                    // onChange={handleFormData}
                                    // value={formData?.stdStatus || ""}
                                    native
                                    label="Student Status"
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
                                <InputLabel htmlFor="outlined-age-native-simple">Student Status</InputLabel>
                                <Select
                                    name="stdStatus"
                                    // error={!!errors.stdStatus}
                                    // onChange={handleFormData}
                                    // value={formData?.stdStatus || ""}
                                    native
                                    label="Student Status"
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
                        <div className='col-lg-6'>
                            <TextField
                                className="w-100"
                                id="outlined-controlled"
                                label="First Name"
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
                                label="Date Of Birth"
                                size="small"
                                type="date"
                            />
                        </div>
                        <div className='col-lg-3'>
                            <FormControl variant="outlined" size="small" className='w-100'>
                                <InputLabel htmlFor="outlined-age-native-simple">Student Status</InputLabel>
                                <Select
                                    name="stdStatus"
                                    // error={!!errors.stdStatus}
                                    // onChange={handleFormData}
                                    // value={formData?.stdStatus || ""}
                                    native
                                    label="Student Status"
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
                                <InputLabel htmlFor="outlined-age-native-simple">Student Status</InputLabel>
                                <Select
                                    name="stdStatus"
                                    // error={!!errors.stdStatus}
                                    // onChange={handleFormData}
                                    // value={formData?.stdStatus || ""}
                                    native
                                    label="Student Status"
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
                                <InputLabel htmlFor="outlined-age-native-simple">Student Status</InputLabel>
                                <Select
                                    name="stdStatus"
                                    // error={!!errors.stdStatus}
                                    // onChange={handleFormData}
                                    // value={formData?.stdStatus || ""}
                                    native
                                    label="Student Status"
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
                                <InputLabel htmlFor="outlined-age-native-simple">Student Status</InputLabel>
                                <Select
                                    name="stdStatus"
                                    // error={!!errors.stdStatus}
                                    // onChange={handleFormData}
                                    // value={formData?.stdStatus || ""}
                                    native
                                    label="Student Status"
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
                                <InputLabel htmlFor="outlined-age-native-simple">Student Status</InputLabel>
                                <Select
                                    name="stdStatus"
                                    // error={!!errors.stdStatus}
                                    // onChange={handleFormData}
                                    // value={formData?.stdStatus || ""}
                                    native
                                    label="Student Status"
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
            </div>
        </>
    )
}
