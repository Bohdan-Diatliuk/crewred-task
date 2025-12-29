export interface MenuItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    href: string;
    onClick: () => void;
    children: MenuItem[];   
};

export interface SidebarMenuProps {
    isOpen: boolean;
    onClose: () => void;
    items: MenuItem[];
    title: string;
    width: number;
};

export interface MenuItemComponentProps {
    item: MenuItem[];
    level: number;
    onItemClick: (item: MenuItem) => void;
};