import * as Form  from "@radix-ui/react-form";
import { BodySmall400, BodySmall500, BodySmall600,  BodyXS500 } from "../../Typography/Typography";
import Button from "../../Components/Buttons/Buttons";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import apple from "../../assets/Svg/apple.svg";
import google from "../../assets/Svg/google.svg";


const Login = () => {
    const [fromData, setFormData] = useState({
        email:"",
        password:"",
    });
    const handleFileChange = (e) =>{
      
      const   {name,value} = e.target ; 
        setFormData(prev =>({
            ...prev,
            [name]:value ,
        }))

    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(fromData, "submitted");

    }
    return (
        <div className="px-8 py-6 gap-6 flex justify-center items-center flex-col">
            <Form.Root  onSubmit={handleSubmit} asChild>
                <form className="gap-6 flex flex-col w-full">
                    <div className="gap-4 flex flex-col" >
                    <Form.Field name="email">
                     <div className="flex flex-col gap-2 ">
                     <Form.Label asChild>
                            <BodySmall400>
                                Email Address
                            </BodySmall400>
                        </Form.Label>
                    
                        <Form.Control onChange={handleFileChange} asChild >
                            <input    className="rounded-[2px] data-[invalid]:ring-[1px] data-[invalid]:ring-red-500/50 py-2 px-4 focus:outline-none ring-[1px] focus:ring-[1px] focus:ring-[#0000004b] ring-[#E4E7E9] focus:ring-opacity-50" 
                                type="email" 
                                required
                           />
                             </Form.Control>
                     </div>
                       
                        <Form.Message className="FormMessage" match="valueMissing" asChild>
                        <BodyXS500 className="px-1  text-red-500">
                        Please enter your email
                            </BodyXS500>
                         
                        </Form.Message>
                        <Form.Message className="FormMessage " match="typeMismatch">
                            <BodyXS500 className="px-1  text-red-500">
                            Please provide a valid email

                            </BodyXS500>
                           
                        </Form.Message>
                    </Form.Field>
                    <Form.Field name="password" >
                     <div className="flex flex-col gap-2 ">
                   <div className="flex justify-between items-baseline">
                   <Form.Label asChild>
                            <BodySmall400>
                                Password
                            </BodySmall400>
                          
                        </Form.Label>
                        <BodySmall500 className="text-[#2DA5F3]">
                                Forgot password
                            </BodySmall500>
                   </div>
                    
                        <Form.Control onChange={handleFileChange} asChild  >
                      <input  className="rounded-[2px] data-[invalid]:ring-[1px] data-[invalid]:ring-red-500/50 bg-gray-00 py-2 px-4 focus:outline-none ring-[1px] focus:ring-[1px] focus:ring-[#0000004b] ring-[#E4E7E9] focus:ring-opacity-50" 
                                type="password" 
                                required
                         />

                             </Form.Control>
                     </div>
                       
                        <Form.Message className="FormMessage" match="valueMissing" asChild>
                        <BodyXS500 className="px-1  text-red-500">
                        enter your password
                            </BodyXS500>
                         
                        </Form.Message>
                        
                    </Form.Field>
                    </div>
                    <Form.Submit asChild>
                       <Button  size="long"  className="w-full" >
                         <BodySmall600 >
                                Sign In
                               
                         </BodySmall600>
                         <ArrowRight className="w-4 h-4" />
                       </Button>
                    </Form.Submit>
                </form>
            </Form.Root>

          

     
<div className="w-full flex flex-col gap-3">

<div className="w-full flex flex-col gap-3">
         <div className="flex items-center justify-center w-full">
                <hr className="flex-grow border-[#E4E7E9]" />
               <BodySmall400 className="px-4 text-[#77878F]" >
                or
               </BodySmall400>
                <hr className="flex-grow border-[#E4E7E9]" />
            </div>
         </div>

    <Button  size="long" variant="outline" className="w-full text-[#475156] normal-case relative hover:shadow-sm  !border-[#E4E7E9]  " >
        
    <img src={google} alt="apple" className="w-4 h-4 absolute left-[5%]"   />
        <BodySmall400 className="w-full"  >
      
            Continue with Google
        </BodySmall400>

    </Button>
    <Button  size="long" variant="outline" className="w-full text-[#475156] normal-case relative hover:shadow-sm  !border-[#E4E7E9]  " >
        
        <img src={apple} alt="apple" className="w-4 h-4 absolute left-[5%]"   />
            <BodySmall400 className="w-full"  >
          
                Continue with Apple
            </BodySmall400>
    
        </Button>

</div>



         
           
                
        </div>
    );
};

export default Login;