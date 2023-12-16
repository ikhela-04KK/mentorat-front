

export function extractHourAndMinutes(createAt?:string):string | undefined{
    function padZero(number:number){
        return number < 10 ? "0" + number : number; 
    }
    if (createAt){
        const dataObject = new Date(createAt); 
        const hour = dataObject.getUTCHours()
        const minutes = dataObject.getMinutes()
    
        const formattedTime = padZero(hour) + ":" + padZero(minutes)

        console.log(`heure formatée avec succès ${formattedTime}`)
        return formattedTime;
    }
    else{
        return undefined
    }
}