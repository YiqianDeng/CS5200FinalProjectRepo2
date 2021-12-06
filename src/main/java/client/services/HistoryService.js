const HISTORY_URL = "http://localhost:8080/api/histories"

export const findAllHistories = () =>
    fetch(HISTORY_URL)
        .then(response => response.json())

export const findHistoryById = (id) =>
    fetch(`${HISTORY_URL}/${id}`)
        .then(response => response.json())

export const deleteHistory = (id) =>
    fetch(`${HISTORY_URL}/${id}`, {
        method: "DELETE"
    })

export const createHistory = (history) =>
    fetch(HISTORY_URL, {
        method: 'POST',
        body: JSON.stringify(history),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateHistory = (id, history) =>
    fetch(`${HISTORY_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(history),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllHistories,
    findHistoryById,
    deleteHistory,
    createHistory,
    updateHistory
}