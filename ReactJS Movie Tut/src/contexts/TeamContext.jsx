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

    return <TeamContext.Provider>
        {children}
    </TeamContext.Provider>
}