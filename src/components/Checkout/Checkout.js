import React from 'react';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';
import TableCart from '../TableCart/TableCart';
import { useForm } from '../useForm/useForm';
import './Checkout.css'



const initialForm = {
    nombre: "",
    apellido: "",
    phonenumber: "",
    email: "",
    veremail: ""
};
const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexNumbers = /^[0-9]*(\.?)[ 0-9]+$/;
    if(!form.nombre.trim()){
        errors.nombre = "El campo nombre es requerido.";
    } else if(!regexName.test(form.nombre.trim())){
        errors.nombre = "El nombre es incorrecto.";
    }

    if(!form.apellido.trim()){
        errors.apellido = "El campo apellido es requerido.";
    } else if(!regexName.test(form.apellido.trim())){
        errors.apellido = "El apellido es incorrecto.";
    }

    if(!form.phonenumber.trim()){
        errors.phonenumber = "El campo numero de telefono es requerido.";
    }else if(!regexNumbers.test(form.phonenumber.trim())){
        errors.phonenumber = "El telefono es incorrecto.";
    }

    if(!form.email.trim()){
        errors.email = "El campo email es requerido.";
    } else if(!regexEmail.test(form.email.trim())){
        errors.email = "El email es incorrecto.";
    }

    if(!form.veremail.trim()){
        errors.veremail = "El campo verificar email es requerido.";
    }else if(!regexEmail.test(form.veremail.trim())){
        errors.veremail = "El email es incorrecto.";
    } else if(form.veremail.trim() != form.email.trim()){
        errors.veremail = "El email es distinto."
    }

    return errors;
};


const Checkout = () =>{
    const { cart, clearCart }  = useCartContext; 
    const { form, errors, loading, response, handleBlur, handleChange, handleSubmit } = useForm(initialForm, validationsForm);


    return (
        <section className='checkout'>
        <div>
            <form onSubmit={handleSubmit} className='card-form'>
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" placeholder="Ingresa tu nombre" className="text" value={form.nombre}  onBlur={handleBlur} onChange={handleChange} required />
                {errors.nombre && <p className='errors'>{errors.nombre}</p>}
                <label for="apellido">Apellido</label>
                <input type="text" name="apellido" placeholder="Ingresa tu apellido" className="text" value={form.apellido} onBlur={handleBlur} onChange={handleChange} required />
                {errors.apellido && <p className='errors'>{errors.apellido}</p>}
                <label for="phonenumber">Telefono</label>
                <input type="text" name="phonenumber" placeholder="Ingresa numero de telefono" className="text" value={form.phonenumber} onBlur={handleBlur} onChange={handleChange} required />
                {errors.phonenumber && <p className='errors'>{errors.phonenumber}</p>}
                <label for="email">Correo</label>
                <input type="email" name="email" placeholder="Ingresa tu email" className="text" value={form.email} onBlur={handleBlur} onChange={handleChange} required />
                {errors.email && <p className='errors'>{errors.email}</p>}
                <label for="veremail">Verifique su correo</label>
                <input type="email" name="veremail" placeholder="Repita su email" className="text" value={form.veremail} onBlur={handleBlur} onChange={handleChange} required />
                {errors.veremail && <p className='errors'>{errors.veremail}</p>}
                <button className='btn'>PAGAR</button>
            </form>
        </div>
            <div className='cart-info'>
                <h2 className='resumen-text'>Resumen</h2>
                <TableCart products={cart} />
            </div>
        </section>
    )
}

export default Checkout;