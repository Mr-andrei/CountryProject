import {
    getBordersCountriesNameAC,
    getCountryByFullNameAC,
    getCountrySearchAC
} from "../actionCreator/getCountrySearchAC";
import {getCountry} from "../api/getCountry";
import {ThunkAPPType} from "../store/store";
import {setError, setErrorText} from "../actionCreator/setErrorAC";


export const getCountrySearchTC = (region: string): ThunkAPPType => async (dispatch) => {
    try {
        const countries = await getCountry.getCountryByRegion(region)
        dispatch(getCountrySearchAC(countries.data))
    } catch (e: any) {
        dispatch(setError(true))
        dispatch(setErrorText(e.response.data.message))
    }
}

export const getCountryByNameTC = (name: string): ThunkAPPType => async (dispatch) => {
    try {

        const countries = await getCountry.getCountryByName(name)
        dispatch(getCountrySearchAC(countries.data))
    } catch (e: any) {
        dispatch(setError(true))

        dispatch(setErrorText(e.response.data.message))
    }
}

export const getCountryByFullNameTC = (name: string | undefined): ThunkAPPType => async (dispatch) => {
    try {
        const data = await getCountry.getCountryByFullName(name)
        let dataValue = {
            name: {
                common: data.data[0].name.common,

            },
            population: data.data[0].population,
            capital: data.data[0].capital,
            region: data.data[0].region,
            subregion: data.data[0].subregion,
            flags: {
                png: data.data[0].flags.png
            },
            ccn3: data.data[0].ccn3,
            topLevelDomain: data.data[0].tld,
            languages: (<any>Object).values(data.data[0].languages),
            currencies: (<any>Object).values(data.data[0].currencies),
            borders: data.data[0].borders
        };


        dispatch(getCountryByFullNameAC([dataValue]))
        dispatch(getBordersNameTC(dataValue.borders))
    } catch (e: any) {
        dispatch(setError(true))
        dispatch(setErrorText(e.response.data.message))
    }
}

export const getBordersNameTC = (borders: string[]): ThunkAPPType => async (dispatch) => {

    try {
        let value = borders.join(",")
        let responseData = await getCountry.getBordersName(value)
        dispatch(getBordersCountriesNameAC(responseData.data))

    } catch (e: any) {
        dispatch(setError(true))
        dispatch(setErrorText(e.response.data.message))
    }
}
