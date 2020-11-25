import React from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

const Form = () => {
    return(
        <BaseForm title="cadastrar um produto" >
            <div className="row" >
                <div className="col-6">
                    <input type="text" className="form-control"/>
                    <input type="text" className="form-control"/>
                    <input type="text" className="form-control"/>
                    <button className="btn btn-secondary border-radius-10">
                        ADICIONAR IMAGEM
                    </button>
                    <label className="label-form" >
                        As imagens devem ser  JPG ou PNG e não devem ultrapassar 5 mb.
                    </label>

                </div>
            </div>
            
        </BaseForm>
    )
}

export default Form;