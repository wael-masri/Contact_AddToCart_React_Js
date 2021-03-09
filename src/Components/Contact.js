import React from 'react'
import * as Yup from 'yup';
import { Formik , Form , Field, ErrorMessage} from 'formik';
const Contact = () => {
    
 
//validation for form 
const validate = Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    phone: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    country: Yup.string()
      
      .required('Password is required'),
   
  })
  
  
  
  
  //form input
    const formik = () => {
      return(
        <div className='app' >
        <h2 className='mt-3'>Contact Us</h2>
        <Form >
         
        <label className='mt-3'>Name</label>
        <Field type='text' className='form-control ' name='name'  autoComplete="off" />
       <ErrorMessage component='div' name='name' className='erorr' />
        <label className='mt-3'>Phone</label>
        <Field type='number' className='form-control ' name='phone'  autoComplete="off"/>
        <ErrorMessage component='div' name='phone' className='erorr' />
        <label className='mt-3'>Email</label>
        <Field type='email' className='form-control ' name='email'  />
        <ErrorMessage component='div' name='email' className='erorr' />
        <label className='mt-3'>Country</label>
        <Field component='select' className='form-control ' name='country'  autoComplete="off">
          <option  value='lebanon'>Lebanon</option>
          <option  value='france'>France</option>
          <option  value='london'>London</option>
       </Field>
       <ErrorMessage component='div' name='country' className='erorr' />
       <label className='mt-3'>Active</label>
        <Field type='checkbox' className='form-control ' name='active'  autoComplete="off"/>
        <button className='mb-3 mt-3 btn btn-primary' type="submit">Send</button>
        <button className='mb-3 mt-3 btn btn-danger ml-3' type="reset">Reset</button>
        </Form>
        </div>
      )
    }
  
    //submit form 
     const formsub = (values) => {
      console.log(values);
    }
   
    
    //running
    return (
  
        <Formik
        initialValues={ {name : '' , phone : '' , email : '',country : '', active : false } }
        onSubmit={formsub}
        render={formik}
        validationSchema={validate}
        />
        //  {formik}
        //  </Formik>   
      
    );
  }

export default Contact
