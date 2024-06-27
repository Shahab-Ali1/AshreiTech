import React from 'react';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { AdmissionEnquiry } from '../../screens/AsheriTechComponents/AdmissionEnquiery/AdmissionEnquiery';

export default function TabsComponent() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper square>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                centered
                onChange={handleChange}
            >
                <Tab label="Student" sx={{ margin: '0 20px', textTransform: "capitalize" }} />
                <Tab label="Trainer" sx={{ margin: '0 20px', textTransform: "capitalize" }} />
                <Tab label="Sponsor" sx={{ margin: '0 20px', textTransform: "capitalize" }} />
            </Tabs>
            {value === 0 && <AdmissionEnquiry />}
            {value === 1 && <TabContent2 />}
            {value === 2 && <TabContent3 />}
        </Paper>
    );
}

const TabContent1 = () => {
    return <div>Content for Tab 1</div>;
};

const TabContent2 = () => {
    return <div>Content for Tab 2</div>;
};

const TabContent3 = () => {
    return <div>Content for Tab 3</div>;
};