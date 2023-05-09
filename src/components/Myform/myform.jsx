import React, { useRef } from "react";
import MyInput from "../MyProps/MyInput";
const url_login ="http://localhost/api/login.php";

const enviardata = async (url,data)=>{
    const resp =await fetch(url,{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    console.log(resp);
    const json = await resp.json();

    console.log(json);
}
const MyForm = () => {
  const refUsuario = useRef(null);
  const refContraseña = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const usuario = refUsuario.current.value;
    const contraseña = refContraseña.current.value;
    const data ={
        "usuario" : usuario,
        "clave" : contraseña
    };
    console.log(data);
    enviardata(url_login,data);
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='inputbox'>
        <MyInput type="username" name="usuario" label="Username" ref={refUsuario} />
      </div>
      <div className='inputbox'>
        <MyInput type="password" name="contraseña" label="Password" ref={refContraseña} />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
};

export default MyForm;







