// import React from 'react'
// import { Link, createBrowserRouter ,RouterProvider} from 'react-router-dom';

// export default function TH1() {

//     const router = createBrowserRouter([
//         {
//             path: "/",
//             element: (
//                 <div>
//                     <h1>Hello World</h1>
//                     <Link to="about">About Us</Link>
//                 </div>
//             ),
//         },
//         {
//             path: "about",
//             element: <div>About</div>,
//             children: [
//                 {
//                     path: '/about',
//                     element: <div>About Us</div>,
//                 },
//                 {
//                     path: '/about/us',
//                     element: <div>US</div>
//                 }, {
//                     path: '/about/me',
//                     element: <div>me</div>
//                 }]
//         },
//         {
//             path: '/404',
//             element: <div>404-Not Found</div>
//         }
//     ]);
//     return (
//         <div>
//             <RouterProvider
//                 router={router}
//             >
//             </RouterProvider>

//         </div>
//     )
// }

// import React, { useState } from 'react';

// export default function App() {
//     const [value, setValue] = useState('');
//     const [email, setEmail] = useState('');

//     const [form, setForm] = useState({
//         name: '',
//         email: ''
//     })
//     const onChangeValue = (e) => setValue(e.target.value);
//     const onChangeEmail = (e) => setEmail(e.target.value);


//     const handleSubmit = (event) => {
//         console.log(setForm);
//         event.preventDefault();
//     };

//     return (
//         <div className='container'>
//             <form onSubmit={handleSubmit}>
//                 Name:
//                 <input id="name" name="name" value={form.name} onChange={e => {
//                     setForm({
//                         ...form, // lấy dữ liệu trc đó
//                         name: e.target.name
//                     })
//                 }} />

//                 Email:
//                 <input value={form.email} id="email" name="email" onChange={e => {
//                     setForm({
//                         ...form, // lấy dữ liệu trc đó
//                         email: e.target.email
//                     })
//                 }} />
//                 <button type="submit" value="Submit">Reset</button>
//             </form>
//         </div>
//     );
// }

// import { useForm } from "react-hook-form";

// export default function App() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const sendData = data => console.log(data);

// //   console.log(watch("example")); 

//   return (
    
//     <form onSubmit={handleSubmit(sendData)}>
//       {/* đăng ký register vào các ô input */}
//       <input defaultValue="test" {...register("name")} /> 
      
//       <input {...register("email", { required: true })} />
      
//       {errors.exampleRequired && <span>This field is required</span>}
      
//       <input type="submit" />
//     </form>
//   );
// }

// import { useForm, Controller } from "react-hook-form";

// export default function App(){
//   const { control, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       name: '',
//       email: ''
//     }
//   });
//   const onSubmit = data => console.log(data);
//   const showError = type => {
//     switch (type) {
//         case 'required':
//              <small>The name is required</small>   
    
//         default:
//             <small>The name is required</small>  
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Controller
//         name="name"
//         control={control}
//         render={({ field }) => <input {...field} />}
//         rules={{required: true}}
//       />    
//       {errors['name'] && showError(errors['name'].type)}
//       <Controller
//         name="email"
//         control={control}
//         render={({ field }) => <input {...field} />}
//       />
//       <input type="submit" />
//     </form>
//   );
// };

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useForm, Controller } from "react-hook-form";


// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   lastName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   email: Yup.string().email('Invalid email').required('Required'),
// });

export default function App(){
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: ''
    }
  });
  const onSubmit = data => console.log(data);
  const showError = type => {
    switch (type) {
        case 'required':
             <small>The name is required</small>   
    
        default:
            <small>The name is required</small>  
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
      />    
      {errors['name'] && showError(errors['name'].type)}
      <Controller
        name="email"
      />
      <input type="submit" />
    </form>
  );
};