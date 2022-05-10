import axios, {AxiosResponse} from "axios";
import {CountriesType} from "../reducers/reducerGetCountry";


const instance = axios.create({
    baseURL: 'https://restcountries.com/v3.1/'

})

export const getCountry = {
    getCountryByRegion(region: string) {
        return instance.get<RequestDataRegionType, AxiosResponse<GetCountryResponse>>(`region/${region}`)
    },

    getCountryByName(name: string) {
        return instance.get<RequestDataNameType, AxiosResponse<GetCountryResponse>>(`name/${name}`)
    },
    getCountryByFullName(name: string | undefined) {
        return instance.get(`name/${name}?fullText=true`)
    },
    getBordersName(borders: string) {
        return instance.get(`alpha?codes=${borders}`)
    },
}


type RequestDataRegionType = {
    region: string
}

type RequestDataNameType = {
    name: string
}

type GetCountryResponse = CountriesType[]


















