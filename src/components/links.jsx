import React from "react";
import Styles from "../App.module.css"
let Links=(props)=>
{
    return (<div className={Styles.flexed}>{props.name}</div>)
}
export default Links