
export const UserDataHook = () => {
    const customerId = sessionStorage.getItem('customerId');
    const executorId = sessionStorage.getItem('executorId');
    const email = sessionStorage.getItem('email');
    const name = sessionStorage.getItem('name');
    const secondName = sessionStorage.getItem('secondName');
    const technologies = sessionStorage.getItem('technologies');
    const experience = sessionStorage.getItem('experience');
    const employment = sessionStorage.getItem('employment');
    const cv = sessionStorage.getItem('cv');
    return {
        executorId,
        customerId,
        email,
        name,
        secondName,
        technologies,
        experience,
        employment,
        cv,
    };
}