import { createContext, useContext } from "react";
import servicesList from "../assets/data/servicesList";
import newsList from "../assets/data/news";
import { trainerData } from "../assets/data/trainerData";
import { faqData } from "../assets/data/faqData";
import pricingData from "../assets/data/pricingData"
const AppContext = createContext();

export const AppContextProvider=({children})=>{
    const value ={
        servicesList,
        newsList,
        trainerData,
        faqData,
        pricingData
    }
    return(
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}

export const useAppContext=()=>{
    return useContext(AppContext)
}