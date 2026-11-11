import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { MobileNav } from './MobileNav';
import { AudioPlayer } from '../player/AudioPlayer';
import { QueueDrawer } from '../player/QueueDrawer';
import { NowPlayingModal } from '../player/NowPlayingModal';
import { AddToPlaylistModal } from '../music/AddToPlaylistModal';

export function MainLayout() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-wrapper">
        <Header />
        <main className="main-content" id="main-content" tabIndex={-1}>
          <Outlet />
        </main>
        <AudioPlayer />
      </div>

      {/* Mobile Navigation Bar */}
      <MobileNav />

      {/* Fullscreen Listening Space & Queue Drawer */}
      <QueueDrawer />
      <NowPlayingModal />
      <AddToPlaylistModal />
    </div>
  );
}
