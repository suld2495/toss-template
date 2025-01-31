const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/account`;

export const fetchContact = () => {
  return fetch(`${BASE_URL}/contact`).then((res) => res.json());
};