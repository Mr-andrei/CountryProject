import style from "./header.module.css"


export const   Header = () =>  {
    return(
        <div className={style.header_wrapper}>
            <div className={style.header_container}>
                <h1 className={style.header_text}>
                    Where in the world?
                </h1>
            </div>

        </div>
    )
}