import React, { useEffect, useState } from 'react';
import styles from './SidebarMenu.module.css';
import clsx from 'clsx';
import type { SidebarMenuProps, MenuItem as MenuItemType, MenuItemComponentProps } from './SidebarMenu.types';

const MenuItem: React.FC<MenuItemComponentProps> = ({ item, level, onItemClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    } else {
      onItemClick(item);
    }
  };

  return (
    <li className={styles.menuItem}>
      <a
        href={item.href || '#'}
        className={clsx(
          styles.menuLink,
          hasChildren && styles.hasChildren,
          isExpanded && styles.expanded
        )}
        style={{ paddingLeft: `${level * 16 + 16}px` }}
        onClick={handleClick}
      >
        {item.icon && <span className={styles.icon}>{item.icon}</span>}
        <span className={styles.label}>{item.label}</span>
        {hasChildren && (
          <span className={styles.arrow}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </a>

      {hasChildren && isExpanded && (
        <ul className={styles.submenu}>
          {item.children!.map((child) => (
            <MenuItem
              key={child.id}
              item={child}
              level={level + 1}
              onItemClick={onItemClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  onClose,
  items,
  title = 'Menu',
  width = 320,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && onClose) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleItemClick = (item: MenuItemType) => {
    if (item.onClick) {
      item.onClick();
    }
    if (item.href && !item.children) {
      onClose?.();
    }
  };

  return (
    <>
      <div
        className={clsx(styles.backdrop, isOpen && styles.visible)}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={clsx(styles.sidebar, isOpen && styles.open)}
        style={{ width: `${width}px` }}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.menuList}>
            {items.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                level={0}
                onItemClick={handleItemClick}
              />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};