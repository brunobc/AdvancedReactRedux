import { SAVE_COMMENT } from 'actions/types';

export function saveComment(comment) {
    return {
        return: SAVE_COMMENT,
        payload: comment
    };
}