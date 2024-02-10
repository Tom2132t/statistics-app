import { environment } from '../../environments/environment';

const baseUrl = environment.apiBaseUrl + 'clients';

export const ApiUrlsConfig = {
  leads: {
    leads: () => `${baseUrl}`,
    leadById: (id: number) => `${baseUrl}/${id}`,
  },
};
