import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

function JobCard({ info, jobDesc, setDrawer2 }) {
    function getExperience() {
        if (info.requiredExperience === 1) {
            return "Intern";
        } else if (info.requiredExperience === 2) {
            return "Early";
        } else if (info.requiredExperience === 3) {
            return "Mid";
        } else if (info.requiredExperience === 4) {
            return "Advanced";
        } else if (info.requiredExperience === 5) {
            return "Director+";
        }
        return "No experience required";
    }

    function getDegree() {
        if (info.reqDegree === 1) {
            return "Pursuing Degree";
        } else if (info.reqDegree === 2) {
            return "Associate";
        } else if (info.reqDegree === 3) {
            return "Bachelors";
        } else if (info.reqDegree === 4) {
            return "Masters";
        } else if (info.reqDegree === 5) {
            return "Ph.D.";
        }
        return "No Degree required";
    }

    return (
        <Card
            onClick={() => {
                jobDesc.current = info;
                setDrawer2(true);
            }}
            sx={{ marginBottom: '1em', cursor: 'pointer', display: 'flex', gap: '1em', alignItems: 'center', padding: '1em' }}
        >
            <CardMedia
                component="img"
                image={'https://www.facebook.com/techcorpec/'} // Fallback for missing logo
                alt={info.orgName}
                sx={{ width: 100, height: 100, borderRadius: '50%' }}
            />
            <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" gutterBottom>
                    {info.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {info.orgName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Location: {info.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Experience Level: {getExperience()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Degree Required: {getDegree()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Deadline: {new Date(info.deadline).toLocaleDateString()}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default JobCard;
