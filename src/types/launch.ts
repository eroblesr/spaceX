// Represents the internal Launch model used throughout the app UI.
// This is NOT the raw API response, but a cleaned and simplified version.
export interface Launch{
    id: string,
    name: string,
    date: string,
    success: boolean | null,
    details: string | null,
    videoLink:  string |null,
    upcoming: boolean
}
// Represents the partial SpaceX API response shape.
// Only includes the fields that are required to map into the Launch model.
export interface SpaceXLaunchApi {
  id: string;
  name: string;
  date_utc: string;
  success: boolean | null;
  details: string | null;
  upcoming: boolean;
  links: {
    webcast: string | null;
  };
}