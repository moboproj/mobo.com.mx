import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import styles from './styles.css'

const CSS_HANDLES = [
    'createInputContainer','inputName',
    'createLabel','createInput',
    'input',
    'inputError','createError',
    'inputSuccess',
    'label',
    'inputError'
]

const InputContainer = props => {
    const {name,text,data,inputChange,error} = props

    const modifyText=text.substr(0,text.length-1); //&& text.replaceAll('*','');

    const baseClass='mobomx-minimumtheme-0-x-';
    let finalClass='';

    const extraClass=props.extraClass ? props.extraClass :''

    if(error)
        finalClass=baseClass+'inputError';
    else{
        if(data[name].length==0)
            finalClass=baseClass+'inputNeutral'
        else
            finalClass=baseClass+'inputSuccess'   
    }

    return (
        <>
            <div className={`${styles.inputContainer} ${styles[props.name]} ${finalClass}`}>
                <label className={`${styles.label}`} for={props.name}>{props.text}</label>
                {
                    props.inputType=='textArea'? <textarea className={`${styles.input} ${styles.textarea}`} id={props.name} name={props.name} value={data[props.name]} placeholder={props.placeholder} onChange={inputChange}/>
                    : <input className={`${styles.input}`} id={props.name} type={props.inputType ? props.inputType:'text'} name={name} value={data[name]} placeholder={props.placeholder} max={props.max ? props.max : ''} onChange={inputChange}/>
                }
                {
                    error ? <span className={`${styles.inputError}`}>{`${modifyText} inválido`}</span> : null
                }
            </div>
        </>
    )
}

export default InputContainer;

