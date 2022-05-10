import {
    getBordersCountriesNameAC,
    getCountryByFullNameAC,
    getCountrySearchAC
} from "../actionCreator/getCountrySearchAC";
import {setError, setErrorText} from "../actionCreator/setErrorAC";


export type CountriesType = {
    name: {
        common: string
    }
    region: string
    capital: string[]
    population: string
    flags: {
        png: string
    }
}

type CurrenciesValueType = {
    name: string
    symbol: string
}
export type CountryType = {
    name: {
        common: string

    }
    region: string
    subregion: string
    capital: string[]
    population: string
    flags: {
        png: string
    }
    borders: string[]
    topLevelDomain: string[]
    currencies: CurrenciesValueType[]
    languages: string[]
    ccn3: string
}


export type InitialStateGetCountriesType = {
    countries: CountriesType[]
    country: CountryType[]
    countryBordersName: CountriesType[]
    error:boolean
    errorText:string
}

const initialState: InitialStateGetCountriesType = {
    countries: [],
    country: [],
    countryBordersName: [],
    error:false,
    errorText:""

}

export const reducerGetCountry = (state = initialState, action: allActionType): InitialStateGetCountriesType => {
    switch (action.type) {
        case "GET_COUNTRY_BY_REGION": {
            return {...state, countries: action.counties}
        }
        case "GET_COUNTRY_BY_FULL_NAME" : {
            return {...state, country: action.country}
        }
        case "GET_COUNTRY_BORDERS_NAME" : {
            return {...state, countryBordersName: action.name}
        }
        case "SET_ERROR_AC" : {
            return {...state, error:action.error}
        }
        case "SET_ERROR_TEXT_AC" : {
            return {...state, errorText:action.errorText}
        }
        default :
            return state
    }
}


export type allActionType = ReturnType<typeof getCountrySearchAC>
    | ReturnType<typeof getCountryByFullNameAC>
    | ReturnType<typeof getBordersCountriesNameAC>
    | ReturnType<typeof setError>
    | ReturnType<typeof setErrorText>
