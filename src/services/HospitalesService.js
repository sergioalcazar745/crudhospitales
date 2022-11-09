import Global from "@/Global"
import axios from "axios"

export default class HospitalesService {

    getAllHospitales(){
        return new Promise(function(resolve) {
            var request = Global.urlHospitales + "api/hospitales";

            axios.get(request).then(response => {
                resolve(response.data)
            });
        });
    }

    getByIdHospital(id){
        return new Promise(function(resolve){
            var request = Global.urlHospitales + "api/hospitales/" + id;

            axios.get(request).then(response => {
                resolve(response.data);
            });
        });
    }

    postHospital(hospital){
        return new Promise(function(resolve){
            var request = Global.urlHospitales + "api/hospitales";
            console.log(hospital)
            axios.post(request, hospital).then(() => {
                resolve();
            });
        });
    }

    putHospital(hospital){
        return new Promise(function(resolve){
            var request = Global.urlHospitales + "api/hospitales";

            axios.put(request, hospital).then(() => {
                resolve();
            });
        });
    }

    deleteHospital(id){
        return new Promise(function(resolve){
            var request = Global.urlHospitales + "api/hospitales/" + id;

            axios.delete(request).then(() => {
                resolve();
            });
        });
    }

}