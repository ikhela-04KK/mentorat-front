

export function extractHourAndMinutes(createAt?:string):string | undefined{
    function padZero(number:number){
        return number < 10 ? "0" + number : number; 
    }
    if (createAt){
        const dataObject = new Date(createAt); 
    
        const hour = dataObject.getUTCHours()
        const minutes = dataObject.getMinutes()
    
        const formattedTime = padZero(hour) + ":" + padZero(minutes)
        return formattedTime;
    }
    else{
        return undefined
    }
      // fonction pour ajouter un zéro devant les chiffres de 1 à 8 
}