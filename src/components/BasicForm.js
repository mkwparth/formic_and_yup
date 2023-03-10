import { useFormik } from 'formik'
import { BasicSchema } from '../schema';
const onSubmit=async (vales,action)=>{
    console.log(vales);
    console.log(action);
    await new Promise((resolve)=> setTimeout(resolve, 2000));
    action.resetForm();
    console.log("form Submitted");
}

const BasicForm = () => {
    const { values,errors, touched ,handleBlur, isSubmitting, handleChange ,handleSubmit} = useFormik({
        initialValues: {
            email: "",
            age: '',
            password: "",
            cpassword: ""
        },
        validationSchema: BasicSchema,
        onSubmit,
    })
    console.log(errors);
    // console.log(formik);
    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                value={values.email}
                onChange={handleChange}
                type="email" placeholder="Enter your email" onBlur={handleBlur} 
                className={errors.email && touched.email ? "input-error":""}
                />
            {errors.email && touched.email && <p className='error'>{errors.email}</p> }
            <label htmlFor="age">Age</label>
            <input
                value={values.age}
                onChange={handleChange}
                id="age" type="text" placeholder="Enter your Age" onBlur={handleBlur}  className={errors.age && touched.age ? "input-error":""}/>
            {errors.age && touched.age && <p className='error'>{errors.age}</p> }


            <label htmlFor="password">password</label>
            <input
                value={values.password}
                onChange={handleChange}
                id="password" type="password" placeholder="Enter your password" onBlur={handleBlur}  className={errors.password && touched.password ? "input-error":""}/>
            {errors.password && touched.password && <p className='error'>{errors.password}</p> }

            <label htmlFor="cpassword">Confirm password</label>
            <input
                value={values.cpassword}
                onChange={handleChange}
                id="cpassword" type="password" placeholder="Re-enter password again" onBlur={handleBlur}  className={errors.cpassword && touched.cpassword ? "input-error":""}/>
            {errors.cpassword && touched.cpassword && <p className='error'>{errors.cpassword.message}</p> }
            <div style={{display:"flex",justifyContent:"center"}}>


            <button type="submit" disabled={isSubmitting} style={{color:"white",marginTop:"40px",borderRadius:"6px" ,width:"150px"}}>Submit</button>
            </div>

        </form>
    );
};
export default BasicForm;