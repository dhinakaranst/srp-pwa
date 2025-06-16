'use client'

import Navbar from '../components/Navbar';
import Notification from '../components/Notification';
import SettingsSaved from '../components/SettingsSaved';
import InstallPrompt from '../components/InstallPrompt';
import NotificationManager from '../components/NotificationManager';
import AchievementTracker from '../components/AchievementTracker';
import { SettingsProvider } from '../contexts/SettingsContext';
import { useEffect } from 'react';

export default function ClientLayout({ children }) {
  return (
    <SettingsProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Notification />
        <SettingsSaved />
        <InstallPrompt />
        <NotificationManager />
        <AchievementTracker />
      </div>
    </SettingsProvider>
  );
} 