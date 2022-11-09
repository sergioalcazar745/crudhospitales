<template>
    <div class="container">
        <h1 class="my-5 text-center">Hospitales</h1>
        <div v-if="!statusAll" class="spinner-border m-5" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <table v-else class="table table-striped table-hover">
            <thead>
                <th>Nombre</th>
                <th>Direccion</th>
                <th>Telefono</th>
                <th>Camas</th>
                <th></th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="hospital in this.hospitales" :key="hospital">
                    <td>{{hospital.nombre}}</td>
                    <td>{{hospital.direccion}}</td>
                    <td>{{hospital.telefono}}</td>
                    <td>{{hospital.camas}}</td>
                    <td><router-link :to="'/detail/' + hospital.idHospital" class="btn btn-primary">Detalle</router-link></td>
                    <td><button class="btn btn-danger" @click="eliminarHospital(hospital.idHospital)">Eliminar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import HospitalesService from './../services/HospitalesService';


const service = new HospitalesService();

// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

export default {
    name: 'HospitalesComponent',

    data() {

        return {
            hospitales: [],
            statusAll: false
        };

    },

    mounted() {

        this.getAllHospitales();        

    },

    methods: {

        getAllHospitales(){
            service.getAllHospitales().then(result => {
                this.hospitales = result;
                this.statusAll = true
            });
        },

        eliminarHospital(id){

            Swal.fire({
                title: '¿Estas seguro de eliminar el hospital ' + id + '?',
                text: "Esta operacion no prodrá ser revertida",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Aceptar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.delete(id)
                    }
                })


            // const swalWithBootstrapButtons = Swal.mixin({
            //     customClass: {
            //         confirmButton: 'btn btn-success ms-3',
            //         cancelButton: 'btn btn-danger'
            //     },
            //     buttonsStyling: false
            // })

            // swalWithBootstrapButtons.fire({
            //     title: '¿Estas seguro de eliminar el hospital ' + id + '?',
            //     // text: "You won't be able to revert this!",
            //     // icon: 'warning',
            //     showCancelButton: true,
            //     confirmButtonText: 'Aceptar',
            //     cancelButtonText: 'Cancelar',
            //     reverseButtons: true
            // }).then((result) => {
            //     if (result.isConfirmed) {
            //         swalWithBootstrapButtons.fire(
            //             //this.delete(id)
            //         )
            //         console.log("Hola1")
            //     } else if (
            //         result.dismiss === Swal.DismissReason.cancel
            //     ) 
            //     {
            //         console.log("Hola2");
            //         // swalWithBootstrapButtons.fire(
            //         //     'Cancelled',
            //         //     'Your imaginary file is safe :)',
            //         //     'error'
            //         // )
            //     }
            //     console.log("Hola3");
            // })
        },

        delete(id){
            this.statusAll = false;
            service.deleteHospital(id).then(() => {
                this.getAllHospitales();
            });
        }

    }

};
</script>

<style scoped>

</style>