/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarMenu } from '../src/components/SidebarMenu/SidebarMenu';
import { useState } from 'react';
import type { MenuItem } from '../src/components/SidebarMenu/SidebarMenu.types'

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

const simpleMenuItems: MenuItem[] = [
  {
    id: '1',
    label: 'Dashboard',
    icon: '📊',
    href: '/dashboard',
  },
  {
    id: '2',
    label: 'Profile',
    icon: '👤',
    href: '/profile',
  },
  {
    id: '3',
    label: 'Settings',
    icon: '⚙️',
    href: '/settings',
  },
  {
    id: '4',
    label: 'Logout',
    icon: '🚪',
    onClick: () => alert('Logging out...'),
  },
];

const oneLevelNestedItems: MenuItem[] = [
  {
    id: '1',
    label: 'Dashboard',
    icon: '📊',
    href: '/dashboard',
  },
  {
    id: '2',
    label: 'Products',
    icon: '📦',
    children: [
      { id: '2-1', label: 'All Products', href: '/products' },
      { id: '2-2', label: 'Add New', href: '/products/new' },
      { id: '2-3', label: 'Categories', href: '/products/categories' },
    ],
  },
  {
    id: '3',
    label: 'Orders',
    icon: '🛒',
    children: [
      { id: '3-1', label: 'All Orders', href: '/orders' },
      { id: '3-2', label: 'Pending', href: '/orders/pending' },
      { id: '3-3', label: 'Completed', href: '/orders/completed' },
    ],
  },
  {
    id: '4',
    label: 'Settings',
    icon: '⚙️',
    href: '/settings',
  },
];

const twoLevelNestedItems: MenuItem[] = [
  {
    id: '1',
    label: 'Home',
    icon: '🏠',
    href: '/',
  },
  {
    id: '2',
    label: 'E-Commerce',
    icon: '🛍️',
    children: [
      {
        id: '2-1',
        label: 'Products',
        children: [
          { id: '2-1-1', label: 'Electronics', href: '/products/electronics' },
          { id: '2-1-2', label: 'Clothing', href: '/products/clothing' },
          { id: '2-1-3', label: 'Books', href: '/products/books' },
          { id: '2-1-4', label: 'Home & Garden', href: '/products/home' },
        ],
      },
      {
        id: '2-2',
        label: 'Orders',
        children: [
          { id: '2-2-1', label: 'Active Orders', href: '/orders/active' },
          { id: '2-2-2', label: 'Order History', href: '/orders/history' },
          { id: '2-2-3', label: 'Returns', href: '/orders/returns' },
        ],
      },
      { id: '2-3', label: 'Shopping Cart', href: '/cart' },
    ],
  },
  {
    id: '3',
    label: 'Administration',
    icon: '🔐',
    children: [
      {
        id: '3-1',
        label: 'User Management',
        children: [
          { id: '3-1-1', label: 'All Users', href: '/admin/users' },
          { id: '3-1-2', label: 'Roles', href: '/admin/roles' },
          { id: '3-1-3', label: 'Permissions', href: '/admin/permissions' },
        ],
      },
      {
        id: '3-2',
        label: 'System',
        children: [
          { id: '3-2-1', label: 'Settings', href: '/admin/settings' },
          { id: '3-2-2', label: 'Logs', href: '/admin/logs' },
          { id: '3-2-3', label: 'Backups', href: '/admin/backups' },
        ],
      },
    ],
  },
  {
    id: '4',
    label: 'Help',
    icon: '❓',
    href: '/help',
  },
];

export const SimpleMenu: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(true);

    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <div style={{ padding: '20px' }}>
          <h2>Simple Menu Example</h2>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Open Menu
          </button>
        </div>

        <SidebarMenu
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                items={simpleMenuItems}
                title="Simple Menu" width={0}        />
      </div>
    );
  },
};

export const OneLevelNested: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(true);

    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <div style={{ padding: '20px' }}>
          <h2>One Level Nested Menu</h2>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Open Menu
          </button>
        </div>

        <SidebarMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={oneLevelNestedItems}
          title="Navigation"
        />
      </div>
    );
  },
};

export const TwoLevelNested: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(true);

    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <div style={{ padding: '20px' }}>
          <h2>Two Level Nested Menu</h2>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Open Menu
          </button>
        </div>

        <SidebarMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={twoLevelNestedItems}
          title="Main Menu"
        />
      </div>
    );
  },
};

export const CustomWidth: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(true);

    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <div style={{ padding: '20px' }}>
          <h2>Wide Sidebar (400px)</h2>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Open Menu
          </button>
        </div>

        <SidebarMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={oneLevelNestedItems}
          title="Wide Menu"
          width={400}
        />
      </div>
    );
  },
};

export const ClosedState: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <div style={{ padding: '20px' }}>
          <h2>Click button to open sidebar</h2>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Open Sidebar Menu
          </button>
        </div>

        <SidebarMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={twoLevelNestedItems}
          title="Menu"
        />
      </div>
    );
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string>('');

    const menuItems: MenuItem[] = [
      {
        id: '1',
        label: 'Dashboard',
        icon: '📊',
        onClick: () => setSelectedItem('Dashboard'),
      },
      {
        id: '2',
        label: 'Analytics',
        icon: '📈',
        children: [
          {
            id: '2-1',
            label: 'Overview',
            onClick: () => setSelectedItem('Analytics > Overview'),
          },
          {
            id: '2-2',
            label: 'Reports',
            onClick: () => setSelectedItem('Analytics > Reports'),
          },
          {
            id: '2-3',
            label: 'Insights',
            onClick: () => setSelectedItem('Analytics > Insights'),
          },
        ],
      },
      {
        id: '3',
        label: 'Settings',
        icon: '⚙️',
        onClick: () => setSelectedItem('Settings'),
      },
    ];

    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <div style={{ padding: '20px' }}>
          <h2>Interactive Sidebar Demo</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              marginBottom: '20px',
            }}
          >
            {isOpen ? 'Close' : 'Open'} Sidebar
          </button>

          {selectedItem && (
            <div
              style={{
                padding: '15px',
                backgroundColor: '#f3f4f6',
                borderRadius: '6px',
                marginTop: '10px',
              }}
            >
              <strong>Selected:</strong> {selectedItem}
            </div>
          )}
        </div>

        <SidebarMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={menuItems}
          title="Menu"
        />
      </div>
    );
  },
};