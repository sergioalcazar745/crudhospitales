<template>
    <div class="container">
        <h1 class="my-5 text-center">Detalles del hospital {{this.$route.params.id}}</h1>
        <div v-if="!status" class="spinner-border m-5" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else>
            <form method="post" v-on:submit.prevent="actualizarHospital" v-if="hospital != null">
                <div class="mt-3">
                    <label class="form-label">Nombre: </label>
                    <input type="text" class="form-control" v-model="hospital.nombre" disabled/>
                </div>
                <div class="mt-3">
                    <label class="form-label">Direccion:</label>
                    <input type="text" class="form-control" v-model="hospital.direccion" disabled/>
                </div>
                <div class="mt-3">
                    <label class="form-label">Teléfono: </label>
                    <input type="text" class="form-control" v-model="hospital.telefono" disabled/>
                </div>
                <div class="mt-3">
                    <label class="form-label">Camas: </label>
                    <input type="text" class="form-control" v-model="hospital.camas" disabled/>
                </div>
                <button class="btn btn-success mt-3 me-3" type="button" @click="clickActualizar">Actualizar</button>
                <button class="btn btn-primary mt-3 me-3" to="/" v-if="actualizar">                    
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="enviar"></span>
                    Enviar
                </button>
                <router-link class="btn btn-danger mt-3" to="/hospitales">Volver</router-link>
            </form>
        </div>        
    </div>
</template>

<script>
import HospitalesService from './../services/HospitalesService';

//Servicios
const service = new HospitalesService();

//Jquery
const $ = require('jquery')
window.$ = $

export default {
    name: 'DetailHospital',

    data() {
        return {
            hospital: null,
            status: false,
            actualizar: false,
            enviar: false
        };
    },

    mounted() {

        service.getByIdHospital(this.$route.params.id).then(result => {
            this.hospital = result;
            this.status = true;
        });

    },

    methods: {

        clickActualizar(){
            $("input").removeAttr("disabled")
            this.actualizar = true;
        },

        actualizarHospital(){
            this.enviar = true;
            this.hospital.camas = parseInt(this.hospital.camas)
            service.putHospital(this.hospital).then(() => {
                this.$router.push("/hospitales")
            })
        }

    }

};
</script>

<style scoped>

</style>