import "./estilos/Carrito.css";

export default function Carrito(){
    return (
        <ul>
            <li className="submenu">
                <img id="carrito-logo" src="/public/cart.png"/>
                <div id="carrito">
                <table id="lista-carrito" className="u-full-width">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <a href="#" id="vaciar-carrito" className="button u-full-width">VACIAR CARRITO</a>
                </div>
            </li>
        </ul>
    )
}