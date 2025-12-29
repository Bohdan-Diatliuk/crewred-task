import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  clearable?: boolean;
  onClear?: () => void;
  fullWidth?: boolean;
  variant?: 'outlined' | 'filled';
  inputSize?: 'small' | 'medium' | 'large';
}