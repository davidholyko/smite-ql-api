import { multipleMatchHistory } from './_matchHistory/multipleMatchHistory';
import { singleMatchHistory } from './_matchHistory/singleMatchHistory';

export const mockSingleMatchHistory = singleMatchHistory;

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
  ...singleMatchHistory,
  ...multipleMatchHistory,
];
