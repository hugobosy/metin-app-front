import styles from './Form.module.scss';
import {Input} from "@/components/form/input/Input";
export const Form = () => {
    return <Input type="text" required label="LAbel" errorMessage="Error" />
}