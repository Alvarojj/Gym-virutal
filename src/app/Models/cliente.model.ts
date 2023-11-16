export interface cliente {
    idCliente?: number,
    idPersona?: persona,
    membresia?: membresia,
    entrenador?: entrenador
}

interface persona{
    idPersona?: number,
    nombre?: string,
    apellido?: string,
    peso?: number,
    estatura?: number,
    fechaNacimiento?: string,
    descripcion?: string,
    correo?: string,
    clave?: string
}


export interface membresia{
    idMembresia?: number,
    titulo?: string, 
    costo?: number,
    tiempoDias?: number,
    binActivo?: 1
}


export interface entrenador{ 
    idEntrenador?: number,
    idPersona?: persona
}


export interface video{
    idVideo?:number,
    path?:string,
    id?:entrenador
}


export interface entrenamiento{
    titulo?:string,
    fechaEntreno?:string,
    bitVisto?:number,
    cliente?:cliente,
    entrenador?:entrenador,
    video?:video
}