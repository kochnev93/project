import React from "react"
import * as style from "./App.module.scss"
import "./index.scss"

export const App = (): React.ReactElement => {
    return (
        <div className="app">
            <span className={style.red}>789</span>
        </div>

    )
}