import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  // RAWG api includes a optional params object which allows us fetch games by a specific critea
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
