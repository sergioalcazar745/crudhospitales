<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand me-5" href="#"><img src="./../assets/images/hospital.svg" width="50"/></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/hospitales" class="nav-link">Hospitales</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/crear" class="nav-link">Crear hospital</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'MenuComponent',

    data() {
        return {
            
        };
    },

    mounted() {
        return {
            
        };
    },

};
</script>

<style scoped>

</style>