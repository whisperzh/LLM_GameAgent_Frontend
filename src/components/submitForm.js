import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


export default function SubmitForm() {

    const [state, setState] = React.useState({
        val1: "",
        modelType: ""

    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // Now you can use the 'inputValue' state in your logic or send it to a server.
        console.log('Submitted Value:', state.val1);
    };

    const itemContainerStyle = {
        // display: 'flex',
        // flex: 1,

        // border: 1,
        borderColor: 'grey',
        Padding: 20,

        justifyContent: 'center',
        alignItems: 'center'
    }
    const itemStyle = {
        display: 'flex',
        flex: 1
    }

    return (

        <form onSubmit={handleSubmit}>
            <Paper elevation={3} sx={{ padding: 10 }} >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Box sx={itemContainerStyle}>

                            <InputLabel id="demo-simple-select-label">Model Name</InputLabel>

                            <TextField
                                id="outlined-basic"
                                // label="Model Name"
                                sx={[itemStyle, { flexDirection: 'column' }]}
                                // variant="outlined"
                                value={state.val1}
                                onChange={
                                    (event) => {
                                        setState({ val1: event.target.value });
                                    }} />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={itemContainerStyle}>
                            <InputLabel id="demo-simple-select-label">Precision</InputLabel>

                            <Select
                                fullWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                sx={itemStyle}
                                value={state.modelType}
                                label="Precision"
                                onChange={(event) => { setState({ modelType: event.target.value }) }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={itemContainerStyle}>
                            <InputLabel id="demo-simple-select-label">Revision</InputLabel>

                            <TextField
                                sx={itemStyle}
                                id="outlined-basic"
                                // label="Revision"
                                // variant="outlined"
                                value={state.val1}
                                onChange={
                                    (event) => {
                                        setState({ val1: event.target.value });
                                    }} />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={itemContainerStyle}>
                            <InputLabel id="demo-simple-select-label">Weights type</InputLabel>
                            <Select
                                sx={itemStyle}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={state.modelType}
                                label="Weights type"
                                onChange={(event) => { setState({ modelType: event.target.value }) }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={itemContainerStyle}>
                            <InputLabel id="demo-simple-select-label">Model Type</InputLabel>
                            <Select
                                sx={itemStyle}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={state.modelType}
                                label="Model Type"
                                onChange={(event) => { setState({ modelType: event.target.value }) }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={itemContainerStyle}>
                            <InputLabel id="demo-simple-select-label">Base Model</InputLabel>

                            <TextField
                                sx={itemStyle}
                                id="outlined-basic"
                                // label="Base Model"
                                // variant="outlined"
                                value={state.val1}
                                onChange={
                                    (event) => {
                                        setState({ val1: event.target.value });
                                    }} />
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            <Button type="submit" variant="outlined" fullWidth sx={{ marginTop: 5 }}>Submit</Button>

        </form >
    );
}