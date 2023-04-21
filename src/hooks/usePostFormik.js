import { useFormik } from 'formik';
import { useEffect } from 'react';

export function usePostFormik({ initialValues, validationSchema, onSubmit }) {
 
    const formik = useFormik({
      initialValues: { ...initialValues },
      validationSchema: validationSchema,
      onSubmit: onSubmit,
    });
  
    useEffect(() => {
      formik.setValues(initialValues);
    }, [initialValues, formik]);
  
    return formik;
  }