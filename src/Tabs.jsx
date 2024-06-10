import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <div>Home Content</div>;
      case 'profile':
        return <div>Profile Content</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setActiveTab('home')}>Home</button>
        <button onClick={() => setActiveTab('profile')}>Profile</button>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default Tabs;
