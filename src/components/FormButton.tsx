import { Dispatch, SetStateAction } from "react";

type FormButtonProps = {
    isSubmit: boolean,
    setIsSubmit: Dispatch<SetStateAction<boolean>>
    
}
function FormButton(props: FormButtonProps) {
    console.log(props)
  return (
    <button
      className="inline-block w-full rounded bg-blue-600 text-white p-2.5"
      hidden={true}
      type={props.isSubmit ? "submit" : "button"}
      onClick={()=>(props.setIsSubmit(true))}
    >
      {props.isSubmit ? "Submit" : "continue"}
    </button>
  );
}

export default FormButton;
