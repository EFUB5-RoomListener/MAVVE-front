import axiosInstance from './axiosInstance';

export const getMyPlaylists = async (accessToken) => {
    const response = await axiosInstance.get(`/playlists/me`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return response.data.playlists;
};

export const getPlaylistDetail = async (playlistId) => {
    const response = await axiosInstance.get(`/playlists/${playlistId}`);
    return response.data;
};