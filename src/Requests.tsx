import axios, { AxiosResponse } from "axios";
import { API_KEY, LOCALENV } from "./Globals";
import { ServerResponseObj } from "./models/GeneralModels";

export const getReq = async (url: string, data: object): Promise<any> => {


    let json: any = { params: data }
    if (LOCALENV) {
        json['params']['apiKey'] = API_KEY;
    }
    // url += (url.indexOf("?") > -1) ? "&" : "?"
    // url += "apiKey=" + API_KEY;

    return await axios.get<any>(url, json);
}

export const postReq = async (url: string, data: any, contentType?: String) => {
    data['apiKey'] = API_KEY;
    // delete data['id'];

    return await axios.post(`${url}?apiKey=${API_KEY}`, data, (contentType) ? {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    } : undefined);
}


export default fetch