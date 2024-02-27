import axios from "axios"
import { Base_URL } from "./commonapi"
const GetData = async () => {
    try {
        const response = await axios.get(`${Base_URL}/message.json`)
        const jsonData = response.data;
        console.log("This is the data getting from firebase", jsonData);
        if (jsonData == null) {
            return [];
        } else {
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    }
    catch (error) {
        console.log("error occured", error.message);
        return []
    }
}
export const GetCardData = async () => {
    try {
        const response = await axios.get(`${Base_URL}/cardData.json`)
        const jsonData = response.data;
        console.log("This is the data card Dataaaaa", jsonData);
        if (jsonData == null) {
            return [];
        } else {
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }

    }
    catch (error) {
        console.log("error occured", error.message);
        return []
    }
}
export default GetData;