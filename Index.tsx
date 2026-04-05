import { useState } from 'react';
import Header from '@/components/Header';
import EmployeeView from '@/components/EmployeeView';
import AdminView from '@/components/AdminView';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'dipendente' | 'admin'>('dipendente');

  return (
    <div className="min-h-screen">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === 'dipendente' ? <EmployeeView /> : <AdminView />}
    </div>
  );
};

export default Index;
