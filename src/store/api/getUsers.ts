import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.github.com/users/',

})


export const getUserDataAPI = {
    getUserData(name: string) {
        return instance.get<UserDataType>(`${name}`)
    },
    getRepositories(name: string) {
        return instance.get<RepositoriesType[]>(`${name}/repos`)
    }
}


export type UserDataType = {
    id: number
    login: string
    avatar_url: string
    html_url: string
    name: string
    public_repos: number
    followers: number
    following: number
}

export type RepositoriesType = {
    name: string
    html_url: string
    description: string
}