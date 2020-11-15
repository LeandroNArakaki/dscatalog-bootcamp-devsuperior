import React from 'react';

type Props = {
    //Esse sinal de interrogação serve para deixar o campo não obrigatório
    text?:String;
}

const Alert = ({text}:Props) => (
    <div className="alert alert-primary">
        Hello {text}!
    </div>
);

export default Alert;