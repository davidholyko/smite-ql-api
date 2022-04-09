import * as mockDataUsed from './dataUsed';
import * as mockMatchDetails from './matchDetails';
import * as mockMatchHistory from './matchHistory';
import * as mockPlayer from './player';

export default {
  ...mockMatchDetails,
  ...mockMatchHistory,
  ...mockPlayer,
  ...mockDataUsed,
};
