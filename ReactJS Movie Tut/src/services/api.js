
const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/3/';

export const getPremiereLeagueTeams = async () =>{
    const response = await fetch(`${BASE_URL}search_all_teams.php?l=Spanish%20La%20Liga`);
    const result = await response.json()
    return result;
};

/* store end points:
search_all_teams.php?l=Spanish%20La%20Liga
search_all_teams.php?l=English%20Premier%20League
*/
