export const fetchAllReservations = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
        if(!response.ok) {
            throw Error(response.status + ":" + response.text)
        } else {
            return response.json()
        }
    })
}
