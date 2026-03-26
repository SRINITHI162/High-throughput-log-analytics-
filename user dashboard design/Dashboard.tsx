import { DashboardOverview } from './views/DashboardOverview';
import { LogExplorer } from './views/LogExplorer';
import { Analytics } from './views/Analytics';
import { Alerts } from './views/Alerts';
import { SystemHealth } from './views/SystemHealth';
import { AdvancedSearch } from './views/AdvancedSearch';
import { Security } from './views/Security';
import { DataSources } from './views/DataSources';
import { Settings } from './views/Settings';

interface DashboardProps {
  activeView: string;
}

export function Dashboard({ activeView }: DashboardProps) {
  return (
    <div className="p-6">
      {activeView === 'dashboard' && <DashboardOverview />}
      {activeView === 'logs' && <LogExplorer />}
      {activeView === 'analytics' && <Analytics />}
      {activeView === 'alerts' && <Alerts />}
      {activeView === 'monitoring' && <SystemHealth />}
      {activeView === 'search' && <AdvancedSearch />}
      {activeView === 'security' && <Security />}
      {activeView === 'sources' && <DataSources />}
      {activeView === 'settings' && <Settings />}
    </div>
  );
}
