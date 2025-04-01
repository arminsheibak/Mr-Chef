import Navbar from '../components/Navbar'
import useRecipes from '../hooks/useRecipes'

const Recipes = () => {
  const {data: meals} = useRecipes()
  return (
    <>
    <Navbar />
    <ul>
      {meals?.map(meal => <h1>{meal.strMeal}</h1>)}
    </ul>
    </>
  )
}

export default Recipes