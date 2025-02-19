"use client"
import { useState } from 'react';
import Modal from './Modal';


export const Headers = ({
allProducts,
setAllProducts,
total,
countProducts,
setCountProducts,
setTotal,
}) => {

const [active, setActive] = useState(false);
const [modalVisible, setModalVisible] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);

const onDeleteProduct = product => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este artículo del carrito?")) {
      const results = allProducts.filter(item => item.id !== product.id);
      setTotal(total - product.price * product.quantity);
      setCountProducts(countProducts - product.quantity);
      setAllProducts(results);
    }
  };

  const onCleanCart = () => {
    if (window.confirm("¿Estás seguro de que quieres vaciar el carrito de compras?")) {
      setAllProducts([]);
      setTotal(0);
      setCountProducts(0);
    }
  };

  const onProductClick = product => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

return (
<header>
<h1>Tienda de Libros</h1>
<div className='container-icon'>
<div className='container-cart-icon'
onClick={() => setActive(!active)}
>
<img src="https://cdn-icons-png.flaticon.com/128/4202/4202388.png"
alt="carrito"
className="icon-cart" />

<div className='count-products'>
<span id='contador-productos'>{countProducts}</span>
</div>
</div>
<div
className={`container-cart-products ${
active ? '' : 'hidden-cart'
}`}
>
{allProducts.length ? (
<>
<div className='row-product'>
{allProducts.map(product => (
<div className='cart-product' key={product.id}>
<div className='info-cart-product'>
 <span className='cantidad-producto-carrito'>
 {product.quantity}
 </span>
 <p className='titulo-producto-carrito'>
 {product.title}
 </p>

<li key={product.id}>
  <img src={product.urlImage} alt={product.title} style={{ float: "left", marginRight: "100px" }} onClick={() => onProductClick(product)} />
  
</li>

 <span className='precio-producto-carrito'>
 ${product.price}
 </span>
</div>
<img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Zltc2FtgeZOrZ86n9nYKaAAAAA%26pid%3DApi&sp=1739993272Te1eea6fc92a5544230895606632f65ea06f9ad022185f8a919f49bd43cd25d44"
alt="cerrar"
className="icon-close"
onClick={() => onDeleteProduct(product)}
// Función para eliminar un artículo con confirmación
/>
</div>

))}
</div>
<div className='cart-total'>
<h3>Total:</h3>
<span className='total-pagar'>${total}</span>
</div>
<button className='btn-clear-all' onClick={onCleanCart}>
Vaciar Carrito
</button>
</>
) : (
<p className='cart-empty'>El carrito está vacío</p>
)}
</div>
</div>
{modalVisible && selectedProduct && (
  <Modal product={selectedProduct} onClose={() => setModalVisible(false)} />
)}
</header>
);
};
