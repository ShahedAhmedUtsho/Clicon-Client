import * as Tabs from "@radix-ui/react-tabs";
import { BodyXL600 } from "../../Typography/Typography";
import './Auth.css'
import Login from "./Login";
import Register from "./Register";


const Auth = () => {





    return (
        <div className='  h-full py-24 flex  justify-center items-center'>
         <Tabs.Root  asChild defaultValue="login"  >
            <div className="  w-[424px] min-h-[500px] auth_box pb-3   ">
            <Tabs.List asChild> 
			<div className="border-b border-[#E4E7E9] w-full  flex  justify-center items-center  ">
                         <Tabs.Trigger  value="login"  asChild >
               
                            <BodyXL600 className=" py-4 border-b-[3px] w-full flex justify-center items-center border-transparent data-[state=active]:border-[#FA8232] text-[#77878F] data-[state=active]:text-[#191c1f]" >
                                    Sign In
                            </BodyXL600>
               
              
                
                         </Tabs.Trigger>
                        <Tabs.Trigger  value="register" asChild >
                        <BodyXL600 className=" py-4 border-b-[3px] w-full flex justify-center items-center border-transparent data-[state=active]:border-[#FA8232] text-[#77878F] data-[state=active]:text-[#191c1f]" >
                                    Sign Up
                            </BodyXL600>
                            
                        </Tabs.Trigger>
            </div>
		</Tabs.List>
		<Tabs.Content value="login"  >
            <Login />

        </Tabs.Content>
        <Tabs.Content value="register" >
            <Register />

        </Tabs.Content>
            </div>
		
	</Tabs.Root> 
        </div>
    );
};

export default Auth;