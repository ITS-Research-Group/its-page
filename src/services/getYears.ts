import { Years } from '../types/attributesTypes';
import { ResponseList } from '../types/responseTypes';

export const getYears = async () => {
  try {
    const backEndpoint = import.meta.env.VITE_BACK_ENDPOINT;
    const token = import.meta.env.VITE_API_TOKEN;

    const response = await fetch(
      `${backEndpoint}/years?pagination[limit]=1000`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) throw new Error();

    const responseData: ResponseList<Years> = await response.json();

    return responseData.data;
  } catch (error) {
    return null;
  }
};
