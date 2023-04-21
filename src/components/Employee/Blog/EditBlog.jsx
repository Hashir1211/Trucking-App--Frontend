import { FormGroup, FormControl, InputLabel, Input, Button, styled ,FormHelperText  } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { usePostFormik } from '../../../hooks/usePostFormik';
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];
const FILE_SIZE_LIMIT = 5 * 1024 * 1024; // 5 MB





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
        file: yup.mixed()
        .required("Please choose an image")
        .test("fileSize", "The file is too large", (value) => {
            return value && value.size <= FILE_SIZE_LIMIT;
        })
        .test("fileType", "Only JPEG, PNG, and GIF files are allowed", (value) => {
            return value && SUPPORTED_FORMATS.includes(value.type);
        })

});

export function  EditBlog () {
    const { id } = useParams();
    const navigate = useHistory();
    const [initialValues, setInitialValues]= useState({ title: '', description: '' , image: '' }); 

    useEffect(() => {
    const fetchPost= async()=>{
    const {data}= await axios.get(`/posts/${id}`)
    setInitialValues(data)
    }

    fetchPost()
    }, [id])

    const formik =usePostFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
          console.warn(values);
        },
      });

    return (
        <Container component="main" sx={{
            mb: 100
        }}>
            <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                <FormControl fullWidth margin="normal" size="small">
                    <InputLabel htmlFor="image">Image</InputLabel>
                    <Input
                        fullWidth
                        id="file"
                        name="file"
                        type="file"
                        onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            const fileName = file.name.replace(/\s/g, ''); 
                            formik.setFieldValue("file", new File([file], fileName, { type: file.type }));
                          }}
                        
                    />
                </FormControl>

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
                   Update Post
                </Button>

            </Box>
        </Container>
    )
}

