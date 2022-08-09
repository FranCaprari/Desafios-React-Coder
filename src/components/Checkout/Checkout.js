import React, { useState, useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import TableCart from "../TableCart/TableCart"
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  getFirestore,
} from "firebase/firestore";

import Swal from "sweetalert2";
import "./Checkout.css";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  const [idVenta, setIdVenta] = useState("");
  const navigate = useNavigate();
  const initialStateValues = {
    nombre: " ",
    apellido: " ",
    phone: " ",
    email: " ",
    secondemail: " ",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const buyer = values;

  const finalizarVenta = () => {
    const db = getFirestore ();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, {
      buyer,
      items: cart.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      })),
      fecha: serverTimestamp(),
      total: totalPrice(),
    }).then((result) => {
      setIdVenta(result.id);
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    finalizarVenta();
  };

  const buySend = () => {
    Swal.fire({
      icon: "success",
      title: "Confirmación",
      confirmButtonColor: "#BB1111",
      html: `<p>Muchas gracias por su compra, guarde su numero de identificacion para futuros reclamos: <p>${idVenta}`,
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        return navigate("/");
      }
    });
  };

  useEffect(() => {
    if (idVenta) {
      buySend();
    }
  }, [idVenta]);

  return (
    <section>
      <div>
        <form className="card-form" onSubmit={handleSubmit}>
          <h2>Ingresa tus Datos</h2>
            <input
              type="text"
              className="text"
              placeholder="Ingrese Nombre"
              name="nombre"
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              className="text"
              placeholder="Ingrese Apellido"
              name="apellido"
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              className="number"
              placeholder="Ingrese su numero de telefono"
              name="phone"
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              className="text"
              placeholder="Ingrese Email"
              name="email"
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              className="text"
              placeholder="Ingrese Email nuevamente"
              name="secondemail"
              onChange={handleInputChange}
              required
            />
          <button className="btnPagar">Pagar</button>
        </form>
      </div>
                <div className='cart-info'>
                <h2 className='resumen-text'>Resumen</h2>
                <TableCart products={cart} />
            </div>
            </section>
  );
};

export default Checkout;