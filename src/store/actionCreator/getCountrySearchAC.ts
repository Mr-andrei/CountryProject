import {CountriesType, CountryType} from "../reducers/reducerGetCountry";


export const getCountrySearchAC = (counties: CountriesType[]) => ({type: "GET_COUNTRY_BY_REGION", counties} as const)
export const getCountryByFullNameAC = (country: CountryType[]) => ({
    type: "GET_COUNTRY_BY_FULL_NAME",
    country: country,
} as const)

export const getBordersCountriesNameAC = (name: CountriesType[] ) => ({
    type: "GET_COUNTRY_BORDERS_NAME",
    name: name,
} as const)


