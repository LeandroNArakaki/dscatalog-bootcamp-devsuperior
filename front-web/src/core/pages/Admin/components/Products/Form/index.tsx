import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
    name:string;
    price:string;
    category:string;
    description:string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const Form = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        price: '',
        category: '1',
        description:''
    });
    
    const handleOnChange = (event: FormEvent ) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]:value }));
    }
    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData,
            imgUrl:'https://images5.kabum.com.br/produtos/fotos/128245/console-sony-playstation-5-digital-edition_1600364532_g.jpg',
            categories:[ {id: formData.category} ]
        }
        makeRequest({url:'/products', method:'POST', data:payload })
            .then(() => {
                setFormData({ name:'', category:'', price:'', description:''});
            });
    }

    return (
        <form onSubmit={handleSubmit} >
            <BaseForm title="cadastrar um produto" >
                <div className="row" >
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleOnChange} 
                             name="name" value={formData.name} placeholder="Nome do Produto" />
                        <select className="form-control" onChange={handleOnChange}  name="category" value={formData.category} >
                            <option value="1">Livros</option>
                            <option value="2">Computadores</option>
                            <option value="3">Eletrônicos</option>
                        </select>
                        <input type="text" className="form-control" onChange={handleOnChange}  
                            name="price" placeholder="Preço" value={formData.price} />
                        <button className="btn btn-secondary border-radius-10">
                            ADICIONAR IMAGEM
                        </button>
                        <label className="label-form" >
                            As imagens devem ser  JPG ou PNG e não devem ultrapassar 5 mb.
                        </label>

                    </div>
                    <div className="col-6">
                        <textarea name="description" onChange={handleOnChange} className="form-control"  
                           value={formData.description} cols={30} rows={10}  />

                    </div>
                </div>

            </BaseForm>
        </form>
    )
}

export default Form;