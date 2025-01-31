import React, { useEffect } from "react";
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css'; 

function Home(){

    useEffect(() =>{
        const fullpageInstance = new fullpage('#fullpage', {
            
        })

        console.log("full page.js initialized!")

        return () =>{
            fullpageInstance.destroy();
            console.log("full page.js uninitialized!")
        };

    }, []);
    
    return(

    );

}
export default Home