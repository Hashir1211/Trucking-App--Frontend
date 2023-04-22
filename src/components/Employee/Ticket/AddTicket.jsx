import { FormGroup, FormControl, InputLabel, Input, Button, styled, FormHelperText } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import axios from 'axios';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const types = ['Poor scheduling', 'Compensation', 'Mile inconsistency', 'Tractor mechanical breakdown issues']
const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const validationSchema = yup.object({
    title: yup
        .string('Enter the title')
        .required('title is required')
        .min(10, 'Title must be at least 10 characters'),
    description: yup
        .string('Enter the  description')
        .required('Description is required')
        .min(30, 'Description must be at least 10 characters'),
        type: yup
        .string('Enter the  type')
        .required('Type is required')

});

export const AddTicket = () => {

    let navigate = useHistory();
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            type: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const {data}  = await axios.post('/tickets/create', values)
            navigate.push('/manage/ticket')
        },
    });

    return (
        <Container component="main" sx={{
            mb: 100
        }}>
            <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                <TextField
                    fullWidth
                    id="title"
                    name="title"
                    label="Title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                    margin='normal'
                    size='small'
                />
                   <FormControl fullWidth >
                    <InputLabel id="demo-multiple-name-label">Service</InputLabel>
                    <Select
                        id="type"
                        name='type'
                        value={formik.values.type}
                        onChange={formik.handleChange}
                        error={formik.touched.type && Boolean(formik.errors.type)}
                        helpertext={formik.touched.type && formik.errors.type}
                        input={<OutlinedInput label="Type" />

                        }
                    >
                        {types.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    fullWidth
                    id="description"
                    name="description"
                    label="Description"
                    type="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                    margin='normal'
                    size='small'
                    multiline
                    rows={5}
                />
             
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Create Ticket
                </Button>

            </Box>
        </Container>
    )
}
