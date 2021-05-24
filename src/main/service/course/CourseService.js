import apiUrl from '../config/config';

export const courseService = {
    getAllCourses,
}

function getAllCourses() {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };
    return fetch(`${apiUrl}/courses/all`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        return data;
    }
    )
}