import * as yup from 'yup'

const passwordrules= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 char
// 1 Uppercase
// 1 Lowrcase
// 1 Numerical digit

export const BasicSchema = yup.object().shape({
    email:yup.string().email("Please enter valid email ").required("Required"),
    age:yup.number().positive("Please Enter positive number").integer().required("Required").typeError("Age must be in interger format"),  
    password:yup.string().min(5).matches(passwordrules,{message:"Please create a stronger password"}).required("Required"),
    cpassword:yup.string().oneOf([yup.ref('password'),null],{message:"Fuck you it's not matching are u drunk"}).required("required"), 
})