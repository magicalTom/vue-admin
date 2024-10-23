export const login = (data: BodyInit) => fetch('', { body: data }).then((res) => res.json());
