


export const setError = (error:boolean) => ({
    type:"SET_ERROR_AC",
    error
}as const)

export const setErrorText = (errorText:string) => ({
    type:"SET_ERROR_TEXT_AC",
    errorText
}as const)
