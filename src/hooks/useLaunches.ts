import { useEffect, useState } from "react";
import  type { Launch } from "../types/launch";
import { fetchSpaceX } from "../api/spacex";
// Custom hook responsible for loading SpaceX launches
// and managing loading and error states.
export function useLaunches() {
    const [launches, setLaunches] = useState<Launch[]>([]);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState<string|null>(null);
    
    useEffect(()=>{
        async function loadLaunches(){
            try{
                setLoading(false);
                setError(null);
                const data = await fetchSpaceX();
                setLaunches(data);
            }catch{
                // UI-friendly error message
                setError("Failed to load SpaceX  launches");

            }finally{
                setLoading(false);
            }
        }
        loadLaunches();
    },[]);
    // Expose only the necessary state to the UI
    return {launches,loading,error};
}
