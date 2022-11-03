import InternalForm from './Form'
import Input from './Input'
import Button from './Button'

type InternalFormType = typeof InternalForm;

interface FormInterface extends InternalFormType {
    Input: typeof Input
    Button: typeof Button
}

const Form = InternalForm as FormInterface

Form.Input = Input

Form.Button = Button

export default Form
