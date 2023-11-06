import React from 'react'; 

type btnSignUpProps = {
    label:string;
    type? : "button"| "submit" | "reset"; 
}; 

const BtnSignUp: React.FC<btnSignUpProps> = ({label,type = "button"}) =>{
    return (
        <button 
            type={type} 
                className="">
                {label}

        </button>
    );
};

BtnSignUp.defaultProps = {
    type: "button",
}

export default BtnSignUp;