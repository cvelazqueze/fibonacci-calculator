export const getNumber = (number: any ) =>{
    console.log("FiboacciController.getNumber")
    var sqRootOf5 = Math.sqrt(5);

    var Phi = (1+sqRootOf5)/2;
    var phi = (1-sqRootOf5)/2

    return JSON.stringify(Math.round((Math.pow(Phi, number) - Math.pow(phi, number)) / sqRootOf5));
}