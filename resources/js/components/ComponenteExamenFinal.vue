<template>
    <div class="container-sm mt-4">
      <div class="row">
        <div v-for="image in images" :key="image.id" class="col-md-4 col-sm-6 col-12 mb-4">
          <div class="card h-100">
            <img :src="image.download_url" class="card-img-top" :alt="image.author">
            <div class="card-body">
              <h5 class="card-title">{{ image.author }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        images: [] 
      };
    },
    mounted() {
      console.log('Componente montado: llamando a fetchImages...');
      this.fetchImages(); 
    },
    methods: {
      async fetchImages() {
        try {
          console.log('Obteniendo datos...');
          const response = await axios.get('https://picsum.photos/v2/list');
          console.log('Respuesta API:', response.data);
          this.images = response.data;
        } catch (error) {
          console.error('Error de obtencion de datos', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container-sm {
    max-width: 1200px;
    margin: auto;
  }
  
  .card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }
  
  .card:hover {
    transform: translateY(-10px);
  }
  
  .card-img-top {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  
  .col-md-4, .col-sm-6, .col-12 {
    padding: 15px;
  }
  </style>
  