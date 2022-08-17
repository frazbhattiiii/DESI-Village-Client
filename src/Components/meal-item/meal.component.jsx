import { useContext } from "react"
import { FoodContext } from "../../contexts/food-context"
import { MealContainer, ItemContainer, AvailabilityContainer } from "./meal.style"

export const Meal = ({ meal }) => {
    const { name, price, info, availability, rating } = meal
    const { setSelectedMeal } = useContext(FoodContext)
    return (
        <MealContainer onClick={() => setSelectedMeal(meal)}>
            <ItemContainer>
                {name}
            </ItemContainer>
            <ItemContainer>{info}</ItemContainer>
            <ItemContainer>{`${price} $`}</ItemContainer>
            <ItemContainer>{rating}</ItemContainer>
            <AvailabilityContainer availability={availability}>
                {availability ? 'Available' : 'Not Available'}
            </AvailabilityContainer>

        </MealContainer>
    )
}