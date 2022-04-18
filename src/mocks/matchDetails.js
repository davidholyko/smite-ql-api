import { match_details_0 } from './_matchDetails/match_details_0';
import { match_details_1_10 } from './_matchDetails/match_details_1_10';

export const singleMatchDetails = match_details_0;

/**
 * Information from:
 * /getmatchdetails[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{match_id}
 *
 * Includes Information about each player in the match (upto 10)
 */
export const mockMatchDetails = [
  // first item in match details refers to information for a player
  // to look at one match because the rest are similiar
  ...match_details_0,
  ...match_details_1_10,
];
