class User {
    constructor(name, password) {
        this.name = name
        this.password = password
        this.userActivities = []

    }
    validateUser() {
        if ((this.name==="John") && (this.password==="123")){
            this.validation = true
            this.existinguser = true
        }
        else {
            
            this.validation =false
            this.existinguser = false
            }
           
    
    }
//addRentalActvity(rentalActivity) {

}
module.exports = User