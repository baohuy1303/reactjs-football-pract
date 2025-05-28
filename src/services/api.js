
const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/3/';

export const getTeamFromLeage = async (LeagueString) =>{
    const response = await fetch(`${BASE_URL}${LeagueString}`);
    const result = await response.json()
    return result;
};

/* store end points:

search_all_teams.php?l=English%20Premier%20League
search_all_teams.php?l=Spanish%20La%20Liga
search_all_teams.php?l=Italian%20Serie%20A
search_all_teams.php?l=German%20Bundesliga
search_all_teams.php?l=French%20Ligue%201

*/
