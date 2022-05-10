import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCountryByFullNameTC} from "../../store/thuncCreator/getCountrySearchTC";
import {AppRootStateType} from "../../store/store/store";
import {CountriesType, CountryType} from "../../store/reducers/reducerGetCountry";
import style from "./aboutCountry.module.css"


export const AboutCountry = () => {

    const {name} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountryByFullNameTC(name))
    }, [name])

    const country = useSelector<AppRootStateType, CountryType[]>(state => state.countries.country)
    const countryBorder = useSelector<AppRootStateType, CountriesType[]>(state => state.countries.countryBordersName)


    return (
        <div className={style.main_wrapper}>
            <button className={style.btn_back} onClick={()=>navigate(-1)}>Back</button>
            {
                country.map((m, i) => (
                    <div key={i}  className={style.wrapper_map}>
                        <div  className={style.block_image}>
                            <img src={m.flags.png} alt=""/>
                        </div>

                        <div  className={style.wrapper_info_blocks}>
                            <div  className={style.first_block}>
                                <h3>{m.name.common}</h3>
                                <span  className={style.info_aboutCountry}>Population:   <span className={style.info_text}>{m.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span></span>
                                <span className={style.info_aboutCountry}>Region:   <span className={style.info_text}>{m.region}</span></span>
                                <span className={style.info_aboutCountry}>Sub region:   <span className={style.info_text}>{m.subregion}</span></span>
                                <span className={style.info_aboutCountry}>Capital:   <span className={style.info_text}>{m.capital}</span></span>
                            </div>
                            <div  className={style.second_block}>
                                <span className={style.info_aboutCountry}>Top level domain: {m.topLevelDomain.map((m,i)=> <span className={style.info_text} key={i}>{m}</span>)} </span>
                                <span className={style.info_aboutCountry}>Currencies: {m.currencies.map((m,i) => <span className={style.info_text} key={i}>{m.name}</span>)}</span>
                                <span className={style.info_aboutCountry}>Languages: {m.languages.map((m,i)=> <span className={style.info_text} key={i}>{m}</span>)} </span>
                            </div>


                        </div>

                    </div>
                ))
            }
            <div className={style.border_block}>
                <span className={style.info_aboutBorder}>Borders: </span>
                <div className={style.border_block_btn} >
                    {countryBorder.map((m,i) => <div onClick={()=>dispatch(getCountryByFullNameTC(m.name.common))} className={style.border_btn} key={i}>{m.name.common}</div>  )}
                </div>
            </div>
        </div>
    )
}