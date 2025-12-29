import React, { useEffect, useState } from 'react';
import styles from './Toast.module.css';
import clsx from 'clsx';
import type { ToastProps } from './Toast.types';

export const Toast: React.FC<ToastProps> = ({
  type,
  message,
  duration = 4000,
  onClose,
  showCloseButton = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);

    if (duration > 0) {
      const timer = setTimeout(() => {
        // eslint-disable-next-line react-hooks/immutability
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M16.6667 5L7.50004 14.1667L3.33337 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 'error':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M15 5L5 15M5 5L15 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      case 'warning':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 6V11M10 14H10.01M4.93 16H15.07C16.14 16 16.86 14.88 16.36 13.95L11.29 4.95C10.79 4.02 9.21 4.02 8.71 4.95L3.64 13.95C3.14 14.88 3.86 16 4.93 16Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 'info':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" />
            <path
              d="M10 10V14M10 6H10.01"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
    }
  };

  return (
    <div
      className={clsx(
        styles.toast,
        styles[type],
        isVisible && styles.visible,
        isExiting && styles.exiting
      )}
      role="alert"
    >
      <div className={styles.iconContainer}>{getIcon()}</div>
      
      <div className={styles.message}>{message}</div>

      {showCloseButton && (
        <button
          onClick={handleClose}
          className={styles.closeButton}
          aria-label="Close notification"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M12 4L4 12M4 4L12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};