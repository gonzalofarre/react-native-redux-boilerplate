import * as type from './types/userActionTypes';

export const addData = (data) => ({
    type: type.DATA_AVAILABLE,
    data
});