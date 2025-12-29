export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
    id: string;
    type: ToastType;
    message: string;
    duration: number;
    onClose: () => void;
    showCloseButton: boolean;
};

export interface ToastContainerProps {
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    maxToasts: number;
}

export interface ToastOptions {
    type: ToastType;
    message: string;
    duration: number;
    showCloseButton: boolean;
}