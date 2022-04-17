import { multipleMatchDetails as matchDetails } from './_matchDetails/multipleMatchDetails';
import { singleMatchDetails as matchDetail } from './_matchDetails/singleMatchDetails';

export const singleMatchDetails = matchDetail;

/**
 * Information from:
 * /getmatchdetails[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{match_id}
 *
 * Includes Information about each player in the match (upto 10)
 */
export const mockMatchDetails = [
  // first item in match details refers to information for a player
  // to look at one match because the rest are similiar
  ...matchDetail,
  ...matchDetails,
];