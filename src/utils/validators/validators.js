export const requiredField = value => {
    if(value) return undefined;
    return "Field is required";
}


const maxLength = max => value => 
    value && value.length > max ? `Value must be no longer then ${max} symbols`: undefined;

export const maxLength30 = maxLength(30);
export const maxLength50 = maxLength(50);