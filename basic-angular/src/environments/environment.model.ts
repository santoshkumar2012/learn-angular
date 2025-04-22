export interface Environment {
  production: boolean;
  apiurl: string;
  baseurl: string;
  authToken?: string | null;
}