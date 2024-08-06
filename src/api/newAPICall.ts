const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const newsApiCall = async (endpoints: string, body: object) => {
    try {
        const response = await fetch(endpoints,{
            method: 'POST',
            body: JSON.stringify(body),
            headers: myHeaders
         }
        );
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

export default newsApiCall;
