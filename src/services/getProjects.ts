import { Project } from '../types/attributesTypes';
import { ResponseList } from '../types/responseTypes';

export const getProjectsByYear = async (yearId: number) => {
  try {
    const backEndpoint = import.meta.env.VITE_BACK_ENDPOINT;
    const token = import.meta.env.VITE_API_TOKEN;

    const response = await fetch(
      `${backEndpoint}/api/projects?filters[year][year][$eq]=${yearId}&populate[team][populate][person][populate]=image&populate[year][populate][year]=*&populate[cover]=*&populate[pictures]=*`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) throw new Error();

    const responseData: ResponseList<Project> = await response.json();

    return responseData.data;
  } catch (error) {
    return null;
  }
};
