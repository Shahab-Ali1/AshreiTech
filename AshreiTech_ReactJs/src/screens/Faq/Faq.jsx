// src/components/Faq.js
import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import departmentsFaq from "../../constant"
import style from "./style.module.css"

const Faq = () => {
const {faq_container,faq_heading}=style
    return (
        <div className={`row justify-content-center mb-5 ${faq_container}`} style={{width:"90%",margin:"auto"}} >
            <div className='col-md-10 col-12 mb-5 '>
            <Typography className={faq_heading} >Frequently Asked Questions</Typography>

                        {
                            departmentsFaq.map((faqItem) => (
                                <Accordion key={faqItem?.id} 
                                  style={{background:"#D9D9D9",marginBottom:20,padding:"20px 10px 20px 10px",borderRadius:40,display:'flex',justifyContent:"center",flexDirection:"column"}}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{ color: 'white',fontSize:40 }} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        // style={{background:"#D9D9D9",marginBottom:20,borderRadius:5}}
                                    >
                                        <Typography sx={{ fontWeight: 'bold' }}>{faqItem?.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <span style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: faqItem?.answer }} ></span>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))
                        }
            </div>
        </div>
    );
};

export default Faq;
