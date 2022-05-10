import style from "./countrySearch.module.css";
import {ChangeEvent, useEffect, useState} from "react";
import {getCountryByNameTC, getCountrySearchTC} from "../../store/thuncCreator/getCountrySearchTC";
import {useDebounce} from 'use-debounce';
import {useAppDispatch} from "../../utils/hooks/hooks";


export const CountrySearchBlock = () => {
    //hooks
    let [selectedOpen, setSelectedOpen] = useState<boolean>(false)
    let [regionValue, setRegionValue] = useState("")
    let [valueInput, setValueInput] = useState("")

    const valueInputDebounce = useDebounce(valueInput, 800);

    const dispatch = useAppDispatch()
    useEffect(() => {
        if (regionValue !== '') {
            dispatch(getCountrySearchTC(regionValue))
        }
    }, [regionValue])

    useEffect(() => {
        if (valueInputDebounce[0] !== "") {
            dispatch(getCountryByNameTC(valueInputDebounce[0]))
        }
    }, [valueInputDebounce[0]])


    // function
    const setCountryValue = (value: string) => {
        setRegionValue(value)
        setSelectedOpen(false)
    }
    const changeEventHandlerInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.currentTarget.value)
    }
    //
    // let valuesCountry = regionValue === "" ? 'Europe' : regionValue

    return (
        <div className={style.search_block}>
            <div className={style.input_block}>
                <input className={style.input_line}
                       onChange={changeEventHandlerInputSearch}
                       placeholder={"Search for a country..."}
                       type="text"
                />
            </div>
            <div className={style.select_wraper}>
                <div className={style.value_countries}
                     onClick={() => setSelectedOpen(!selectedOpen)}>{regionValue === "" ? 'Countries by Region' : regionValue}</div>
                {selectedOpen ?
                    <div className={style.countries_select_block} onMouseLeave={() => setSelectedOpen(false)}>
                        <span onClick={() => setCountryValue('Africa')} className={style.country_capital}>Africa</span>
                        <span onClick={() => setCountryValue('America')}
                              className={style.country_capital}>America</span>
                        <span onClick={() => setCountryValue('Asia')} className={style.country_capital}>Asia</span>
                        <span onClick={() => setCountryValue('Europe')} className={style.country_capital}>Europe</span>
                        <span onClick={() => setCountryValue('Oceania')}
                              className={style.country_capital}>Oceania</span>
                    </div> : ""}
            </div>
        </div>
    )
}