const fechaHoy = new Date();
const fechaNacimiento = new Date(1988,04,25);
const hoyEsMas = fechaHoy.getTime()> fechaNacimiento.getTime();
const diaNacimiento = fechaNacimiento.getDate()
const miMes = fechaNacimiento.getMonth() +1;
const miAnio = fechaNacimiento.getFullYear();
