import type { Launch } from '../types/launch'
// Props definition for LaunchList component
interface LaunchListProps{
    launches: Launch[];
    onSelectedLaunch: (launch: Launch) =>void;
}
// Displays a list of SpaceX launches.
// This component is responsible ONLY for rendering the list UI.
export default function LauchList({launches, onSelectedLaunch}:LaunchListProps) {
  return (
    <div>
        {launches.map((launch) => (
            <div 
                key={launch.id}
                onClick={()=>onSelectedLaunch(launch)}
                style={{cursor:"pointer"}}
                >
                <h2>{launch.name}</h2>
            </div>
        
      ))}
    </div>
  )
}
