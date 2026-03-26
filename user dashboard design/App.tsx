import { useState, useEffect } from 'react';
import { Dashboard } from './components/Dashboard';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="size-full flex flex-col bg-gray-50">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeView={activeView} setActiveView={setActiveView} isOpen={sidebarOpen} />
        <main className="flex-1 overflow-y-auto">
          <Dashboard activeView={activeView} />
        </main>
      </div>
    </div>
  );
}