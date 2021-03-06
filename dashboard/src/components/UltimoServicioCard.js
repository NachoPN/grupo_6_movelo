import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';






function UltimoServicioCard(){
    const [servicios,setServiciosList] = useState([]);

    
    useEffect(() =>{
        fetch('http://localhost:3001/api/servicios')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(servicios =>{
                setServiciosList(servicios.data[servicios.data.length-1])
            })
            .catch(error => console.log(error))
    }, [])
    return (       
        
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último Servicio Regsitrado</h5>
                </div>
                <div className="card-body">
                        <h5>Desde - {servicios.origen} Hacia - {servicios.destination} </h5>
                    <div className="text-center" style={{display: "flex", justifyContent: 'space-between'}}>
                        {servicios && servicios.usuarios && <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 15 +'rem'}} src={servicios.usuarios.image} alt={servicios.usuarios.email}/>}
                        {!servicios && !servicios.usuarios && <i class="fas fas fa-spinner fa-2x text-gray-300`"></i>}
                        <p style={{marginTop: "40px"}}>{servicios.description}</p>
                    </div>
                    <Link className="btn btn-danger" to={"/"} style={{justifySelf: "center", backgroundColor: "#7e4f4b",border: "none", display: "block"}} >Detalle</Link>
                </div>
            </div>
        </div>        
    )
}
export default UltimoServicioCard;