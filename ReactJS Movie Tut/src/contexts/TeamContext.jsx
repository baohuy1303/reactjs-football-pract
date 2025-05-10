import { createContext, useState, useEffect, useContext } from "react";

//create a context
const TeamContext = createContext()

//use the created context
export const useTeamContext = () => useContext(TeamContext);

//provide children (app) with the context, allows them to use state and funcs outside of their component
export const TeamProvider = ({children}) => {
    //store favorites
    const [favorites, setFavorites] = useState([]);

    //when rendered, get all the previously stored favorites JSON (with the name storedFavs), and parse it out as an object to the const favorites
    useEffect(() => {
        const storedItems = localStorage.getItem('storedFavs');
        if (storedItems){
            setFavorites(JSON.parse(storedItems))
        }
    }, [])

    // save favorites to storage everytime the array is updated, stringify it into JSON
    useEffect(() => {
        localStorage.setItem('storedFavs', JSON.stringify(favorites))
    }, [favorites])

    const addToFavTeam = (team) => {
        //creates a new array from the previous with the added team
        /* setFavorites((prev) => {
            const array = [...prev , team]; 
            return array
        }) 
        This is the same shit    */
        
        setFavorites(prev => [...prev , team])
    }

    const removeFromFav = (teamID) =>{
        /*get the previous array. filter returns elements that meet the condition
        in this case, the condition is if thisTeam is not the team that we want to
        remove, then keep it. */
        setFavorites((prev) => prev.filter(thisTeam => thisTeam.id !== teamID))
        
    }

    const isFavorite = (teamID) =>{
        return favorites.some(thisTeam => thisTeam.id === teamID)
        //check if current favorites list has this team
    }

    //all the shit we gonna give the children access to
    const value = {
        favorites, addToFavTeam, removeFromFav, isFavorite
    }

    return <TeamContext.Provider value={value}>
        {children}
    </TeamContext.Provider>
}