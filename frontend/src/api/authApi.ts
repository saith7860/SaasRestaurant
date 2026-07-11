import api from "./api";

export const refreshAccessToken = async () => {

    const res =
        await api.post("/api/user/refresh-token");

    return res.data.token;

};