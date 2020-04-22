import { useContext } from 'react';
import { navigate } from '../navigationRef';

import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
// import { Context as AuthContext } from '../context/AuthContext';

export default () => {
    const { createTrack } = useContext(TrackContext);
    const { state: { locations, name }, reset } = useContext(LocationContext);

    const saveTrack = () => {
        createTrack(name, locations);
        reset();
        navigate('TrackList');
    }

    return [saveTrack];
}