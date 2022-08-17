import { Meal } from '../meal-item/meal.component';
export const Meals = ({ meals }) => {
    return (
        meals.map((meal, id) => (
            <Meal key={id} meal={meal} />
        ))
    )
}