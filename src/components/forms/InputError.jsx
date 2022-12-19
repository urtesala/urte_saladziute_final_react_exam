import { ErrorMessage } from "../styled/StyledComponents";

function InputError(props) {

    if (!props.error || !props.touch) return null;
  
    return <ErrorMessage>{props.error}</ErrorMessage>;
  }
  export default InputError;