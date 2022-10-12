const BIRTH_DATE = new Date("6 Feb 2006")

const getAge = () => {
    const currentDate = new Date(Date.now());

    let age = currentDate.getFullYear() - BIRTH_DATE.getFullYear()

    const monthDiff = currentDate.getMonth() - BIRTH_DATE.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < BIRTH_DATE.getDate())) {
        age--;
    }

    return age
}

const ME = {
    age: getAge(),
    phone: "+32486165184",
    email: "louisgiet.w@gmail.com"
}

export default ME