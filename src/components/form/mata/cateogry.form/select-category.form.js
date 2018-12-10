import React from 'react';
import Select from "react-select";

const categoryList = [
  {label: "expenses", value: "expenses"},
  {label: "enterings", value: "enterings"},
  {label: "debts", value: "debts"},
  {label: "loans", value: "loans"},
]
const FormCategory = ({onSetCateory}) => {
  return (
    <div className={"form-category"}>
      <div className={"from-category__menu"}> 
    



    <Select  
    
    options={categoryList}
     className={"actions__select-category"}
     onChange= {
       e => {

         let category = e.value;
         console.log("select value = ", e.value);

         onSetCateory(category);
       }
     }
     />

      </div>
    </div>
  );
};

export default FormCategory;