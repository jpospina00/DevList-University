export default (type) => {
    return {
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            'Content-Type': type
        }
    }
};