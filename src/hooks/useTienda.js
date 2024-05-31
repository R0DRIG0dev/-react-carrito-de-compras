// import { useContext } from "react";
// import ContextoTienda from "../contexto/ProveedorTienda";

// const useTienda = () => {
//     return useContext(ContextoTienda);
// }
// // function useTienda(){
// //     return useContext(ContextoTienda);
// // }

// export default useTienda;

// ___________________________________________________

import { createContext } from "react";

export const contextoTienda = createContext(null);
