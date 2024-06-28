import React from 'react';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { RegisterYourself } from './RegisterYourself';
import "./RegisterYourself.css"

export const RegistrationForm = (props) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    onChange={handleChange}
                >
                    <Tab label="Register Yourself" sx={{ margin: '0 20px', textTransform: "capitalize" }} className='no-outline' />
                    <Tab label="Make Payment" sx={{ margin: '0 20px', textTransform: "capitalize" }} className='no-outline' />
                    <Tab label="Proceed" sx={{ margin: '0 20px', textTransform: "capitalize" }} className='no-outline' />
                </Tabs>
                {value === 0 && <RegisterYourself />}
                {value === 1 && <TabContent2 />}
                {value === 2 && <TabContent3 />}
            </Paper>
        </>
    )
}
const TabContent2 = () => {
    return <div>Content for Tab 2</div>;
};

const TabContent3 = () => {
    return <div>Content for Tab 3</div>;
};