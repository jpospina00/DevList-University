export default () => {
    console.log('Token: ' + localStorage.getItem('token'));

    return {
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            'Content-Type': 'multipart/form-data'
        }
    }
};