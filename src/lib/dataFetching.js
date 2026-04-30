export const getProducts= async() => {
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    return data;
}

export const getSummerCareTips = async() => {
    const res = await fetch('http://localhost:3000/summerCareTips.json');
    const data = await res.json();
    return data;
}