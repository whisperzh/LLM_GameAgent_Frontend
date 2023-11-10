import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxesGroup() {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
        gilad1: true,
        jason1: false,
        antoine1: false,
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { gilad, jason, antoine, gilad1, jason1, antoine1 } = state;

    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel component="legend">legendA</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        }
                        label="Gilad Gray"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={jason} onChange={handleChange} name="jason" />
                        }
                        label="Jason Killian"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                        }
                        label="Antoine Llorca"
                    />
                </FormGroup>
                {/* <FormHelperText>Be careful</FormHelperText> */}
            </FormControl>
            <FormControl
                component="fieldset"
                sx={{ m: 3 }}
                variant="standard"
            >
                <FormLabel component="legend">legendB</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={gilad1} onChange={handleChange} name="gilad1" />
                        }
                        label="Gilad Gray"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={jason1} onChange={handleChange} name="jason1" />
                        }
                        label="Jason Killian"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={antoine1} onChange={handleChange} name="antoine1" />
                        }
                        label="Antoine Llorca"
                    />
                </FormGroup>
                {/* <FormHelperText>You can display an error</FormHelperText> */}
            </FormControl>
        </Box>
    );
}