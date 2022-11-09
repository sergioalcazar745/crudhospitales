<template>
    <div class="container">
        <h1 class="my-5 text-center">Hospitales</h1>
        <div v-if="!statusAll" class="spinner-border m-5" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <table class="table table-striped table-hover">
            <thead>
                <th>Nombre</th>
                <th>Direccion</th>
                <th>Telefono</th>
                <th>Camas</th>
                <th></th>
                <th></th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="hospital in this.hospitales" :key="hospital">
                    <td>{{hospital.nombre}}</td>
                    <td>{{hospital.direccion}}</td>
                    <td>{{hospital.telefono}}</td>
                    <td>{{hospital.camas}}</td>
                    <td><router-link to="/" class="btn btn-primary">Detalle</router-link></td>
                    <td><router-link to="/" class="btn btn-warning">Update</router-link></td>
                    <td><router-link to="/" class="btn btn-danger">Eliminar</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import HospitalesService from './../services/HospitalesService';

const service = new HospitalesService();

export default {
    name: 'HospitalesComponent',

    data() {
        return {
            hospitales: [],
            statusAll: false
        };
    },

    mounted() {
        service.getAllHospitales().then(result => {
            this.hospitales = result;
            this.statusAll = true
        })
    },

};
</script>

<style scoped>

</style>