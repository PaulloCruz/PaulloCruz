import Input from "../input/input";
import Button from "../Button/Button";
import MessageTerm from "../MessageTerm/MessageTerm";
import MessageFree from "../MessageFree/MessageFree";
import "./Form.css";

const Form = () => {
  return (
    <div>
        <MessageFree/>
    <form>
      <Input type="text" placeholder="First Name" />
      <Input type="text" placeholder="Last Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Senha" />

      <Button buttonName="CLAIM YOUR FREE TRIAL" />
      <MessageTerm link="#"/>
    </form>
    </div>
  );
};

export default Form;
