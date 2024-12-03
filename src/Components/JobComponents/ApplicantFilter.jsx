import { Box, TextField, Checkbox, Accordion, AccordionDetails, AccordionSummary, FormControlLabel, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRef } from 'react';

function ApplicantFilter({ setDrawer, width, display, outline }) {
    let exp = useRef(0), skills = useRef([]), deg = useRef(0), companies = useRef([]), status = useRef(false);

    function resetRefs() {
        exp.current = 0;
        skills.current = [];
        deg.current = 0;
        companies.current = [];
        status.current = false;
    }

    return <Box width={width} bgcolor='white' outline={outline} display={display}>
        <Accordion sx={{ width: '100%' }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '1.25em' }}>
                Experience
            </AccordionSummary>
            <AccordionDetails>
                <Box>
                    <Box>
                        <FormControlLabel label="Intern" control={<Checkbox />} onChange={() => { exp.current = Math.max(exp.current, 1); }} />
                        <FormControlLabel label="Early" control={<Checkbox />} onChange={() => { exp.current = Math.max(exp.current, 2); }} />
                    </Box>
                    <Box>
                        <FormControlLabel label="Mid" control={<Checkbox />} onChange={() => { exp.current = Math.max(exp.current, 3); }} />
                        <FormControlLabel label="Advanced" control={<Checkbox />} onChange={() => { exp.current = Math.max(exp.current, 4); }} />
                    </Box>
                    <Box>
                        <FormControlLabel label="Director+" control={<Checkbox />} onChange={() => { exp.current = Math.max(exp.current, 5); }} />
                    </Box>
                </Box>
            </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: '100%' }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '1.25em' }}>
                Skills & qualifications
            </AccordionSummary>
            <AccordionDetails>
                <TextField label="Skills e.g. C++" variant="filled" fullWidth={true} onChange={(e) => {
                    let value = e.currentTarget.value;
                    skills.current = value.split(/[\s,.]/).filter(s => s.length > 0 && /[a-zA-Z]+/.test(s)).toLowerCase();
                }} />
            </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: '100%' }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '1.25em' }}>
                Degree
            </AccordionSummary>
            <AccordionDetails>
                <Box>
                    <Box>
                        <FormControlLabel label="Pursuing Degree" control={<Checkbox />} onChange={() => { deg.current = Math.max(deg.current, 1); }} />
                        <FormControlLabel label="Associate" control={<Checkbox />} onChange={() => { deg.current = Math.max(deg.current, 2); }} />
                    </Box>
                    <Box>
                        <FormControlLabel label="Bachelors" control={<Checkbox />} onChange={() => { deg.current = Math.max(deg.current, 3); }} />
                        <FormControlLabel label="Masters" control={<Checkbox />} onChange={() => { deg.current = Math.max(deg.current, 4); }} />
                    </Box>
                    <Box>
                        <FormControlLabel label="Ph.D." control={<Checkbox />} onChange={() => { deg.current = Math.max(deg.current, 5); }} />
                    </Box>
                </Box>
            </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: '100%' }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '1.25em' }}>
                Organizations
            </AccordionSummary>
            <AccordionDetails>
                <TextField label="Company e.g. Google" variant="filled" fullWidth={true} onChange={(e) => {
                    let value = e.currentTarget.value;
                    companies.current = value.split(/[\s,.]/).filter(s => s.length > 0 && /[a-zA-Z]+/.test(s)).toLowerCase();
                }} />
            </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: '100%' }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '1.25em' }}>
                Show selected appicants
            </AccordionSummary>
            <AccordionDetails>
                <Checkbox onChange={(e) => {
                    status.current = e.currentTarget.checked;
                }} />
            </AccordionDetails>
        </Accordion>
        <Box sx={{ marginLeft: '1em', marginTop: '5em', marginBottom: '1em' }}>
            <Button variant='contained' onClick={() => { setDrawer(false); resetRefs(); }}>Filter</Button>
            <Button variant='contained' onClick={() => { setDrawer(false); resetRefs(); }} sx={{ marginLeft: '1em' }}>Reset</Button>
        </Box>
    </Box>
}

export default ApplicantFilter;