import { getLocalStorageData } from "./useLocalData";

let jwtTokan = getLocalStorageData("JWTTOKEN");

let userHeader = {
  authorization: `Berear ${jwtTokan}`,
};

export default userHeader;
