import React from 'react';
import './../styles/perfil.css';
import Foto from './../images/logoUV.jpg';



function Perfil() {
  return (
    <div className="profile">
      <img src={Foto} alt="Foto" className="img-uv" />
      <h1 className='datos'>Datos del alumno:</h1>
      <h2>Nombre: Angel Moises Cruz Cruz</h2>
      <h2>Matricula: S19004873</h2>
      <h3 className='contacto'>Contacto:</h3>
      <h3>+52 271 228 75 04</h3>
      <h3><a href="https://www.facebook.com/angelcruz0810">Facebook</a></h3>
      <h3><a href="https://www.instagram.com/a.c__00/">Instagram</a></h3>
    </div>
  );
}

export default Perfil;