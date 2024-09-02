import URL from "../utils/constant.js";

async function makeNetworkCall() {
    try {
        const response = await fetch(URL);
        const object = await response.json();
        return object;
    } catch (err) {
        console.log('Problem in API Call', err);
        throw err;
    }
}
export default makeNetworkCall;