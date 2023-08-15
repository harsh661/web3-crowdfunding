export const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now()
    const remainingDays = difference / (1000 * 3600 * 24)

    return remainingDays.toFixed(0)
}

export const inPercent = (goal, raisedAmount) => {
    const percentage = Math.round((raisedAmount / goal) * 100)

    return percentage
}

export const checkIfImage = (url, callback) => {
    const image = new Image()
    image.src = url

    if(image.complete) callback(true)

    image.onload = () => callback(true)
    image.onerror = () => callback(false)
}