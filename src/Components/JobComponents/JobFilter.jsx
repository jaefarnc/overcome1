import { Accordion, AccordionDetails, AccordionSummary, Box, TextField, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function JobFilter({ setDrawer, width, display, filters, setFilters }) {
    return (
        <Box bgcolor='white' paddingBottom='1em' width={width} display={display} outline='1px solid black'>
            <Accordion sx={{ width: '100%' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '1.25em' }}>
                    Location
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        label="Preferred location (e.g., Bangalore)"
                        variant="filled"
                        fullWidth
                        value={filters.location}
                        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    />
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ width: '100%' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '1.25em' }}>
                    Experience
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        label="Required experience (years)"
                        variant="filled"
                        type="number"
                        fullWidth
                        value={filters.experience}
                        onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                    />
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ width: '100%' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '1.25em' }}>
                    Degree
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        label="Degree level (e.g., 1 for Pursuing, 2 for Associate)"
                        variant="filled"
                        type="number"
                        fullWidth
                        value={filters.degree}
                        onChange={(e) => setFilters({ ...filters, degree: e.target.value })}
                    />
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ width: '100%' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '1.25em' }}>
                    Organization
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        label="Organization name (e.g., TechCorp)"
                        variant="filled"
                        fullWidth
                        value={filters.organization}
                        onChange={(e) => setFilters({ ...filters, organization: e.target.value })}
                    />
                </AccordionDetails>
            </Accordion>

            <Box sx={{ marginLeft: '1em', marginTop: '5em' }}>
                <Button
                    variant='contained'
                    onClick={() => setDrawer(false)}
                >
                    Apply
                </Button>
                <Button
                    variant='contained'
                    onClick={() => {
                        setFilters({
                            location: '',
                            experience: '',
                            degree: '',
                            organization: '',
                        });
                        setDrawer(false);
                    }}
                    sx={{ marginLeft: '1em' }}
                >
                    Reset
                </Button>
            </Box>
        </Box>
    );
}

export default JobFilter;
