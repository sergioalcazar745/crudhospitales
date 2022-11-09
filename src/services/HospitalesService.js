import Global from "@/Global"
import axios from "axios"

export default class HospitalesService {

    getAllHospitales(){
        return new Promise(function(resolve) {
            var request = Global.urlHospitales + "webresources/hospitales"

            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }

    getByIdHospitales(){
        
    }

    postHospitales(){
        
    }

    putHospitales(){
        
    }
}