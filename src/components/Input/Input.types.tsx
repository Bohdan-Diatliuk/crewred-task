export interface InputProps {
    label: string;
    error: string;
    clearable: boolean;
    onClear: () => void;
    fullWidth: boolean;
    variant: 'outlined' | 'filled'
};