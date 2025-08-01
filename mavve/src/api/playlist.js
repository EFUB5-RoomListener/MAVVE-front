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

export const postPlaylist = async ({ name, playImageUrl }, accessToken) => {
    const response = await axiosInstance.post('/playlists',
    { name, playImageUrl },
    {
        headers: {
        Authorization: `Bearer ${accessToken}`,
        },
    }
    );
    return response.data;
};

export const patchPlaylistSetting = async (playlistId, { name, coverImageUrl }, accessToken) => {
    const response = await axiosInstance.patch(`/playlists/${playlistId}`,
    { name, coverImageUrl },
    {
        headers: {
        Authorization: `Bearer ${accessToken}`,
        },
    }
    );
    return response.data;
};

export const addSongToPlaylist = async (playlistId, spotifySongId, accessToken) => {
    const response = await axiosInstance.post(`/playlists/${playlistId}/songs`,
        { spotifySongId },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );
    return response.data;
};

export const deleteSongFromPlaylist = async (playlistId, spotifySongId, accessToken) => {
    const response = await axiosInstance.delete(`/playlists/${playlistId}/songs/${spotifySongId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
};

export const deletePlaylist = async (playlistId, accessToken) => {
    const response = await axiosInstance.delete(`/playlists/${playlistId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
};