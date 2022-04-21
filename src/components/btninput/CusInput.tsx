import { FC, HTMLInputTypeAttribute, SetStateAction } from 'react';
import './cusInput.scss'

interface ICusInput {
    children: React.ReactNode;
    font: boolean;
    type: HTMLInputTypeAttribute;
    id: string;
    value: string;
    setValue: React.Dispatch<SetStateAction<string>>
}

const CusInput: FC<ICusInput> = (props) => {
    const { type, id, value, setValue, children, font } = props
    return (
        <div className='cusInput'>
            <label className={(font && "error") + ''} htmlFor={id}>{children}</label>
            <input type={type} id={id} value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    );
};

export default CusInput;