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
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error ${response.status}: ${errorData.message || 'Unknown error'}`);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

export default newsApiCall;
