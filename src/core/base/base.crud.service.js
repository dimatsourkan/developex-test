import {API_URL} from "../constants";
import {toast} from "react-toastify";

export class BaseCrudService {

    crudPath = '';

    getApiUrl(path) {
        if (path) {
            return `${API_URL}/${this.crudPath}/${path}`
        } else {
            return `${API_URL}/${this.crudPath}`
        }
    }

    handleErrors(response) {
        if (!response.ok) {
            toast.error(response.statusText);
            throw response.statusText;
        }
        return response;
    }

    getAll() {
        return fetch(this.getApiUrl(), {method: 'GET'})
            .then(this.handleErrors)
            .then(res => res.json());
    }

    getOne(id) {
        return fetch(this.getApiUrl(id), {method: 'GET'})
            .then(this.handleErrors)
            .then(res => res.json());
    }

    create(body) {
        return fetch(this.getApiUrl(), {method: 'POST', body: JSON.stringify(body)})
            .then(this.handleErrors)
            .then(res => res.json());
    }

    update(id, body) {
        return fetch(this.getApiUrl(id), {method: 'PUT', body: JSON.stringify(body)})
            .then(this.handleErrors)
            .then(res => res.json());
    }

    delete(id) {
        return fetch(this.getApiUrl(id), {method: 'DELETE'})
            .then(this.handleErrors)
            .then(res => res.json());
    }

}