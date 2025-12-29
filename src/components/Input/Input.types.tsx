export interface InputProps {
  label?: string;
  error?: string;
  clearable?: boolean;
  className?: string;
  placeholder: string;
  defaultValue?: string;
  onClear?: () => void;
  fullWidth?: boolean;
  variant?: 'outlined' | 'filled';
  inputSize?: 'small' | 'medium' | 'large';
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
}
