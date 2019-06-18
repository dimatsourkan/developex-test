import {BaseCrudService} from "../base/base.crud.service";

export class PostService extends BaseCrudService {
    crudPath = 'posts';

    getComments(postId) {
        return fetch(this.getApiUrl(`${postId}/comments`), {method: 'GET'})
            .then(this.handleErrors)
            .then(res => res.json());
    }

    addComment(postId, body) {
        return fetch(this.getApiUrl(`${postId}/comments`), {method: 'POST', body: JSON.stringify(body)})
            .then(this.handleErrors)
            .then(res => res.json());
    }

    updateComment(postId, id) {
        return fetch(this.getApiUrl(`${postId}/comments/${id}`), {method: 'PUT'})
            .then(this.handleErrors)
            .then(res => res.json());
    }

    deleteComment(postId, id) {
        return fetch(this.getApiUrl(`${postId}/comments/${id}`), {method: 'DELETE'})
            .then(this.handleErrors)
            .then(res => res.json());
    }
}