import type {Launch, SpaceXLaunchApi} from "../types/launch";
// Fetches SpaceX launches from the public API
// and maps the raw API response into the internal Launch model.

export async function fetchSpaceX(): Promise<Launch[]>{
    try{
        const response = await fetch("https://api.spacexdata.com/v5/launches");
        // Handle non-200 HTTP responses
        if(!response.ok){
            throw new Error(` Api error: ${response.status}`);
        }
        const data = await response.json();
        // Map API data into the app's Launch model
        return data.map((launch: SpaceXLaunchApi)=>({
            id: launch.id,
            name: launch.name,
            date: launch.date_utc,
            success: launch.success,
            details: launch.details,
            videoLink: launch.links.webcast,
            upcoming: launch.upcoming   
        }));
    }catch{
       throw new Error("Failed to fetch SpaceX launches");
    }
}