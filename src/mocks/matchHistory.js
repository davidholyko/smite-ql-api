import { match_history_0 } from './_matchHistory/match_history_0';
import { match_history_1_10 } from './_matchHistory/match_history_1_10';

export const mockSingleMatchHistory = match_history_0;

/**
 * Information from:
 * /getmatchhistory[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{playerId}
 *
 * Includes last 50 matches for a single player
 * Matches are in order by most recent first (match.Match)
 */
export const mockMatchHistory = [
  // first item in match details refers to information for a player
  // to look at one match because the rest are similiar
  ...match_history_0,
  ...match_history_1_10,
];
