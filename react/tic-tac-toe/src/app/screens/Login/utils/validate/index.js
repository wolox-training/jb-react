

export const isRequired = value => value ? undefined : "Value is required";

export const minLength = value => value.length >= 8 ? undefined : "Value should at least have 8 characters";

export const validEmail = value => {
    const re = new RegExp("/\S+@\S+\.\S+/");
    if(re.test(value)){
        return undefined;
    }
    return "Email should be valid";
};
