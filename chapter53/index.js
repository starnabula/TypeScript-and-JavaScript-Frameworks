const fetchData = async (item) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`fetched ${item}`), 1000)
    })
}

const getUser = async (item) => {
    try {
        //return fetchData(item);
        return await fetchData(item);
    } catch (error) {
    console.error(error.message);
    } finally {
    console.log("finally");
    }
}
const users = await getUser(['a', 'b', 'c']);

console.log(users);