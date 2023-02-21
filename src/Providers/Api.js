import axios from "axios";
import md5 from "md5";

const publicKey = "6ae98e874e9ad0b510d4ab3a729585a0";
const privateKey = "dfc5ea13206324d4896774f20209ffffdb5ec01d";
const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default api;
