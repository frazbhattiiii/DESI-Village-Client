import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { isAuth } from "../utils/auth";

export const FoodContext = createContext({
    meals:null,
    setMeals:()=>{},
    selectedMeal:null,
    setSelectedMeal:()=>{}
})
export const FoodProvider = ({children})=>{
    let user = null
    {isAuth() ?  user = localStorage.getItem("user") :user =  null}
    useEffect(()=>{
        const fetchFoodItems = async()=>{
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/food/get-all-items/`)
            setMeals(res.data.items)
        }
        fetchFoodItems()
    },[])
    
    const [meals,setMeals] = useState([])
    const [selectedMeal,setSelectedMeal] = useState({})
    const value = {meals,setMeals,selectedMeal,setSelectedMeal}
    return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>
}