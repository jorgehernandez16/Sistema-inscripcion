<template>
    <div>
      <h2>Registrar Atleta</h2>
      <form @submit.prevent="registrarAtleta">
        <div>
          <label>Nombre:</label>
          <input v-model="nombre" type="text" />
        </div>
        <div>
          <label>Documento:</label>
          <input v-model="documento" type="text" />
        </div>
        <div>
          <label>Fecha de Nacimiento:</label>
          <input v-model="fechaNacimiento" type="date" />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AtletaForm',
    data() {
      return {
        nombre: '',
        documento: '',
        fechaNacimiento: ''
      };
    },
    methods: {
      async registrarAtleta() {
        try {
          const response = await axios.post('http://localhost:3000/atleta/inscribir', {
            nombre: this.nombre,
            documento: this.documento,
            fechaNacimiento: this.fechaNacimiento,
          });
          console.log('Atleta registrado:', response.data);
        } catch (error) {
          console.error('Error al registrar atleta:', error);
        }
      }
    }
  };
  </script>
  