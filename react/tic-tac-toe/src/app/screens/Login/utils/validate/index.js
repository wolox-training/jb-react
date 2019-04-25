

export const isRequired = value => value ? undefined : "Value is required";

export const minLength = value => value.length >= 8 ? undefined : "Value should at least have 8 characters";

export const validEmail = value => {
    // this regular expression was found in internet, it's not tested hardly but it should work in normal cases
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(value)){
        return undefined;
    }
    return "Email should be valid";
};
