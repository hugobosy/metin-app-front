import styles from './Form.module.scss';
import {Input} from "@/components/form/input/Input";
export const Form = () => {
    return <div className={styles.wrapper}>
        <h1>Login</h1>
        <Input label="Label" errorMessage="Error" />
    </div>
}