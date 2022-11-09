<template>
    <div class="container">
        <h1 class="my-5 text-center">Crear hospital</h1>
        <form method="post" v-on:submit.prevent="crearHospital">
            <div class="mt-3">
                <label class="form-label">Id: </label>
                <input type="text" class="form-control" v-model="hospital.idhospital"/>
            </div>
            <div class="mt-3">
                <label class="form-label">Nombre: </label>
                <input type="text" class="form-control" v-model="hospital.nombre"/>
            </div>
            <div class="mt-3">
                <label class="form-label">Direccion:</label>
                <input type="text" class="form-control" v-model="hospital.direccion"/>
            </div>
            <div class="mt-3">
                <label class="form-label">Teléfono: </label>
                <input type="text" class="form-control" v-model="hospital.telefono"/>
            </div>
            <div class="mt-3">
                <label class="form-label">Camas: </label>
                <input type="text" class="form-control" v-model="hospital.camas"/>
            </div>
            <button class="btn btn-success mt-3" to="/hospitales">                    
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="crear"></span>
                Crear hospital
            </button>
        </form>
    </div>
</template>

<script>
import HospitalesService from './../services/HospitalesService';

//Servicios
const service = new HospitalesService();

export default {
    name: 'CreateHospital',

    data() {

        return {
            hospital: {
                idhospital:null,
                nombre: null,
                direccion: null,
                telefono: null,
                camas: null
            },
            crear: false
        };

    },

    methods: {

        crearHospital(){
            this.crear = true;
            this.hospital.camas = parseInt(this.hospital.camas)
            service.postHospital(this.hospital).then(() => {
                this.$router.push("/hospitales");
            });
        }

    }

};
</script>

<style scoped>

</style>