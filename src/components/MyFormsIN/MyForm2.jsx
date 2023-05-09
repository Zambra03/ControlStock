import React from 'react'


export const MyForm1 = () => {

    
  return (
    <div className='MyForm1'>
        <h1>ACTUALIZAR PRODUCTO</h1>
        <table >
            <tr>
                <td>CODIGO</td>
                <td>
                    <input type="text"></input>
                </td>
            </tr>
            <tr>
                <td>PRODUCTO</td>
                <td>
                    <input type="text"></input>
                </td>
            </tr>
            <tr>
                <td>DESCRIPCIÓN</td>
                <td>
                    <input type="text"></input>
                </td>
            </tr>
            <tr>
                <td>CANTIDAD</td>
                <td>
                    <input type="text"></input>
                </td>
            </tr>
            <tr>
                <td>CATEGORIA</td>
                <td>
                    <input type="text"></input>
                </td>
            </tr>
            <tr>
                <td>MARCA</td>
                <td>
                    <input type="text"></input>
                </td>
            </tr>
            <tr>
                <td>ESTADO</td>
                <td>
                    <input type="text"  ></input>
                </td>
            </tr>
        </table>
        <button name="save">GUARDAR</button>
    </div>

  )
}

export default MyForm1;
