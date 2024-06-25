import React, { useEffect, useState } from 'react';
import "./AdmissionEnquiery.css";
import { Checkbox, FormControl, FormControlLabel, InputLabel, Select, TextField } from '@mui/material/node';
import { PostMethod, codeError, formatDate, getMethod } from '../../../utils/services';
// import { ToastContainer } from 'react-toastify';
// import { Toaster, Toastersuccess } from '../../Toaster';

const INITIAL_STATE = {
    fname: "",
    lname: "",
    father: "",
    email: "",
    cnicno: "",
    city: "",
    courseCategory: "",
    courses: "",
    stdStatus: "",
    whatsappno: "",
    gender: "",
    cellno: "",
    lasteducation: "",
    // dob: "",
    dob: formatDate(new Date()),
    ownlaptop: false,
    zakat: false,
}
export const AdmissionEnquiry = (props) => {
    const [formData, setFormData] = useState({ ...INITIAL_STATE })
    const [errors, setErrors] = useState({});
    const [Cities, setCities] = useState([]);
    const [courseCategory, setCourseCategory] = useState([]);
    const [courses, setCourses] = useState([]);
    const [stdStatus, setStdStatus] = useState([]);
    const [genderData, setGenderData] = useState([]);
    const [EntityId, setEntityId] = useState(0)

    useEffect(() => {
        getCity();
        getCourseCategory();
        getGender();
        getStudentStatus();
        //getCourses();
    }, [])
    const getCity = () => {
        try {
            getMethod("city")
                .then((data) => {
                    if (data) {
                        setCities(data);
                    }
                })
                .catch(error => {
                    codeError(error);
                });
        } catch (error) {
            console.log(error);
        }
    };

    const getCourseCategory = () => {
        try {
            getMethod("lov/v2/list/COTY")
                .then((data) => {
                    if (data) {
                        setCourseCategory(data?.Data);
                    }
                })
                .catch(error => {
                    codeError(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    const getCourses = (city, coursecat) => {
        try {
            // getMethod("FOAdmEnquiry/V2/CourseExtend/164/79594/1112")
            getMethod(`FOAdmEnquiry/V2/CourseExtend/164/${city}/${coursecat}`)
                .then((data) => {
                    if (data) {
                        setCourses(data?.Data);
                    }
                })
                .catch(error => {
                    codeError(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    const getStudentStatus = () => {
        try {
            getMethod("lov/v2/list/STUS")
                .then((data) => {
                    if (data) {
                        setStdStatus(data?.Data);
                    }
                })
                .catch(error => {
                    codeError(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

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



    const handleFormData = (event) => {
        if (!event) {
            return
        }
        const { name, value, type } = event?.target;
        setErrors({})
        if (type === "checkbox") {
            setFormData((prevField) => ({
                ...prevField,
                [name]: event.target.checked,
            }));
        }
        else if (name === "cellno" || name === "whatsappno") {
            const digits = value.replace(/\D/g, '');

            let formattedValue = '';
            if (digits.length > 0) {
                formattedValue = digits.slice(0, 4);
            }
            if (digits.length > 4) {
                formattedValue += '-' + digits.slice(4, 11);
            }

            setFormData((prevData) => ({
                ...prevData,
                [name]: formattedValue,
            }));
        }
        else if (name === "courseCategory"){
            debugger
            getCourses(formData.city, value)
            setFormData((prevField) => ({
                ...prevField,
                [name]: value,
            }));
        }
        else {
            setFormData((prevField) => ({
                ...prevField,
                [name]: value,
            }));
        }
        if (name === "courses") {
            let row = courses.find(x => x.id === Number(value))
            setEntityId(row.entityid)
        }
    }

    const emailValidation = (event) => {
        if (!event) {
            return;
        }
        const { value, name } = event.target;
        if (value?.trim() === "") {
            return;
        }
        if (isValidEmail(value)) {
            setFormData((prevField) => ({
                ...prevField,
                [name]: value,
            }));
        }
        else {
            // Toaster("Please Insert Valid Email", "error");
            setFormData((prevField) => ({
                ...prevField,
                [name]: "",
            }));
        }

    }


    const clickSubmit = () => {

        let isValid = RequiredFields();
        if(!isValid) {
            return false;
        }
        
        let bb = {
            "Data": {
                "FOAdmEnquirydtls": [
                    {
                        "lineindex": 1,
                        //   "courseid": formData.courses,
                        "courseid": +formData.courses,
                        "genderid": formData.gender,
                        "childname": formData.fname + formData.lname,
                        "studentstatus": formData.stdStatus,
                        "ownlaptop": formData.ownlaptop,
                        "whatsappno": formData.whatsappno,
                        "email": formData.email,
                        "cellno": formData.cellno,
                        "lasteducation": formData.lasteducation,
                        "dob": "2000-06-20"
                    }
                ],
                //   "noofchild": 1,
                "enquiryno": null,
                "enquirydate": new Date().toISOString(),
                "relationtypeid": 11,
                "name": formData.father,
                "address": "..",
                "phone": null,
                "cellno": formData.cellno,
                "email": null,
                "entityid": EntityId,
                "sourcetypeid": 3651,
                "description": null,
                "assignto": 64046,
                "followupdate": null,
                "nextfollowup": null,
                "note": null,
                "resptypeid": null,
                "statusid": null,
                "followup": null,
                "id": null,
                "batchid": 14751,
                "testdate": null,
                "picktime": null,
                "droptime": null,
                "imageid": null
            },
            "DataAddon": {},
            "ReturnObject": true
        }

        PostMethod("FOAdmEnquiry/v2/", bb)
            .then((data) => {
                if (data) {
                    // Toastersuccess("File Saved Successfully");
                    alert("File Saved Successfully")
                    setFormData({ ...INITIAL_STATE });
                }
            })
            .catch(error => {
                // Toaster(error.message, "error");
                codeError(error);
            });

    }

    function isValidEmail(email) {
        // Define the regular expression for a valid email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Test the email against the regex
        return emailRegex.test(email);
    }

    const RequiredFields = () => {
        try {
            let validationErrors = {}
            if (!formData.fname) {
                validationErrors.fname = 'First Name is required';
            }
            if (!formData.lname) {
                validationErrors.lname = 'Last Name is required';
            }
            if (!formData.father) {
                validationErrors.father = 'Guardian is required';
            }
            if (!formData.email) {
                validationErrors.email = 'Email is required';
            }
            if (!formData.cnicno) {
                validationErrors.cnicno = 'CNIC is required';
            }
            if (!formData.city) {
                validationErrors.city = 'City is required';
            }
            if (!formData.courseCategory) {
                validationErrors.courseCategory = 'Course Category is required';
            }
            if (!formData.courses) {
                validationErrors.courses = 'Courses is required';
            }
            if (!formData.stdStatus) {
                validationErrors.stdStatus = 'Student Status is required';
            }
            if (!formData.whatsappno) {
                validationErrors.whatsappno = 'WhatsApp No is required';
            }
            if (!formData.gender) {
                validationErrors.gender = 'Gender is required';
            }
            if (!formData.cellno) {
                validationErrors.cellno = 'Cell No is required';
            }
            if (!formData.lasteducation) {
                validationErrors.lasteducation = 'Last Education No is required';
            }
           
            if (!formData.dob) {
                validationErrors.dob = 'Date of birth is required';
            }
            setErrors(validationErrors);
            if (Object.keys(validationErrors).length !== 0) {
                return false;
            }
            else{
                return true;
            }
        } catch (error) {
            codeError(error);
        }
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
                        <h2 className="text-center">Enquiry Form</h2>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <TextField
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="First Name"
                                    size="small"
                                    name="fname"
                                    onChange={handleFormData}
                                    value={formData?.fname || ""}
                                    error={!!errors.fname}
                                    // helperText={errors.fname || ''}
                                    InputProps={{
                                        style: { Margin: "0px" }
                                    }}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <TextField
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Last Name"
                                    size="small"
                                    name="lname"
                                    value={formData?.lname || ""}
                                    error={!!errors.lname}
                                    // helperText={errors.lname || ''}
                                    onChange={handleFormData}
                                />
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg-6'>
                                <TextField
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Father’s/Guardian Name"
                                    size="small"
                                    name="father"
                                    value={formData?.father || ""}
                                    error={!!errors.father}
                                    onChange={handleFormData}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <TextField
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Email"
                                    size="small"
                                    name="email"
                                    value={formData?.email || ""}
                                    onChange={handleFormData}
                                    onBlur={emailValidation}
                                    error={!!errors.email}
                                    // helperText={errors.email || ''}
                                />
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg-6'>
                                <TextField
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="CNIC"
                                    size="small"
                                    name="cnicno"
                                    value={formData?.cnicno || ""}
                                    onChange={handleFormData}
                                    error={!!errors.cnicno}
                                    inputProps={{ maxLength: 15 }}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Preferred City</InputLabel>
                                    <Select
                                        name="city"
                                        error={!!errors.city}
                                        style={{ width: "100%" }}
                                        className="w-100"
                                        onChange={handleFormData}
                                        value={formData?.city || ""}
                                        native
                                        label="Preferred City"
                                        inputProps={{
                                            name: 'city',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={""}></option>
                                        {
                                            Cities && Cities?.map((Val, index) => {
                                                return (<option key={index} value={Val.Id}>{Val.citystxt}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-lg-6'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Course Category</InputLabel>
                                    <Select
                                        name="courseCategory"
                                        error={!!errors.courseCategory}
                                        onChange={handleFormData}
                                        value={formData?.courseCategory || ""}
                                        native
                                        label="Course Category"
                                        inputProps={{
                                            name: 'courseCategory',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={""}></option>
                                        {
                                            courseCategory && courseCategory?.map((Val, index) => {
                                                return (<option key={index} value={Val.Id}>{Val.stxt}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-lg-6'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Courses</InputLabel>
                                    <Select
                                        disabled={formData?.city === "" || formData.courseCategory === ""}
                                        name="courses"
                                        error={!!errors.courses}
                                        onChange={handleFormData}
                                        value={formData?.courses || ""}
                                        native
                                        label="Courses"
                                        inputProps={{
                                            name: 'courses',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={0}></option>
                                        {
                                            courses && courses?.map((Val, index) => {
                                                return (<option key={index} value={Val.id}>{Val.name}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-lg-6'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Student Status</InputLabel>
                                    <Select
                                        name="stdStatus"
                                        error={!!errors.stdStatus}
                                        onChange={handleFormData}
                                        value={formData?.stdStatus || ""}
                                        native
                                        label="Student Status"
                                        inputProps={{
                                            name: 'stdStatus',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={0}></option>
                                        {
                                            stdStatus && stdStatus.map((Val, index) => {
                                                return (<option key={index} value={Val.Id}>{Val.stxt}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-lg-6'>
                                <TextField
                                    name="whatsappno"
                                    error={!!errors.whatsappno}
                                    onChange={handleFormData}
                                    value={formData?.whatsappno || ""}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="WhatsApp Number"
                                    size="small"
                                    inputProps={{ maxLength: 12 }}
                                />
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-lg-6'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
                                    <Select
                                        name="gender"
                                        error={!!errors.gender}
                                        onChange={handleFormData}
                                        value={formData?.gender || ""}
                                        native
                                        label="Gender"
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
                            <div className='col-lg-6'>
                                <TextField
                                    name="cellno"
                                    error={!!errors.cellno}
                                    onChange={handleFormData}
                                    value={formData?.cellno || ""}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Mobile Number"
                                    size="small"
                                    inputProps={{ maxLength: 12 }}
                                />
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-lg-6'>
                                <TextField
                                    name="lasteducation"
                                    error={!!errors.lasteducation}
                                    onChange={handleFormData}
                                    value={formData?.lasteducation || ""}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Last Education"
                                    size="small"
                                />
                            </div>
                            <div className='col-lg-6'>
                                <TextField
                                    name="dob"
                                    onChange={handleFormData}
                                    value={formData?.dob || ""}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Date Of Birth"
                                    size="small"
                                    error={!!errors.dob}
                                    type="date"
                                    // helperText={errors.dob || ''}
                                />
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-lg-6'>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="zakat"
                                            checked={formData?.zakat}
                                            onClick={handleFormData}
                                        />
                                    }
                                    label="Financial Aid/ Zakat"
                                    sx={{ '& .MuiFormControlLabel-label': { fontSize: 12 } }}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="ownlaptop"
                                            checked={formData?.ownlaptop}
                                            onClick={handleFormData}
                                        />
                                    }
                                    label="Do you have your own laptop?"
                                    sx={{ '& .MuiFormControlLabel-label': { fontSize: 12 } }}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 d-flex justify-content-center'>
                                <button type="button" className="actionBtn" onClick={clickSubmit}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <ToastContainer /> */}
        </>
    )
}
