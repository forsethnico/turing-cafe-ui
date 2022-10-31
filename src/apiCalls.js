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

export const postReservation = (newReservation) => {
    return fetch('http://localhost:3001/api/v1/reservations', {
        method: 'POST',
        header: {'Content-Type': 'application/JSON'},
        body: JSON.stringify(newReservation)
    }) 
    .then(response => {
        if(!response.ok) {
            throw Error(response.status + ":" + response.text)
        } else {
            return response.json()
        }
    })
}