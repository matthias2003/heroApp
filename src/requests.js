import axios from 'axios';

export const getBasicHeroInfoById = async (id) => {
    const { data } = await axios.get(`https://hero-app-server-proxy.vercel.app`);
    return data;
}

export const searchHeroesByName = async (name) => {
    return axios.get(`https://hero-app-server-proxy.vercel.app/search/${name}`);
}

export const getTotalHeroInfoById = async (id) => {
    const { data } = await axios.get(`https://hero-app-server-proxy.vercel.app/details/${name}`)
    return data;
}