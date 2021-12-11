const HISTORYSERVICES_URL = "http://localhost:8080/api/history_services"

export const findAllHistoryServices = () =>
    fetch(HISTORYSERVICES_URL)
        .then(response => response.json())

export const findHistoryServiceById = (id) =>
    fetch(`${HISTORYSERVICES_URL}/${id}`)
        .then(response => response.json())

export const deleteHistoryService = (id) =>
    fetch(`${HISTORYSERVICES_URL}/${id}`, {
        method: "DELETE"
    })

export const createHistoryService = (historyService) =>
    fetch(HISTORYSERVICES_URL, {
        method: 'POST',
        body: JSON.stringify(historyService),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateHistoryService = (id, historyService) =>
    fetch(`${HISTORYSERVICES_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(historyService),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllHistoryServices,
    findHistoryServiceById,
    deleteHistoryService,
    createHistoryService,
    updateHistoryService
}