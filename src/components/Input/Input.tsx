import React, { useState, forwardRef } from 'react';
import styles from './Input.module.css';
import clsx from 'clsx';
import type { InputProps } from './Input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      type = 'text',
      clearable = false,
      onClear,
      className,
      fullWidth = false,
      variant = 'outlined',
      inputSize = 'medium',
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [internalValue, setInternalValue] = useState(value || '');

    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;
    const currentValue = value !== undefined ? value : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (value === undefined) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const handleClear = () => {
      if (value === undefined) {
        setInternalValue('');
      }
      onClear?.();
      
      const input = ref && 'current' in ref ? ref.current : null;
      if (input && onChange) {
        const event = new Event('input', { bubbles: true });
        Object.defineProperty(event, 'target', { 
          value: input, 
          writable: false 
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange(event as any);
      }
    };

    const showClearButton = clearable && currentValue && String(currentValue).length > 0;

    return (
      <div className={clsx(styles.inputWrapper, fullWidth && styles.fullWidth, className)}>
        {label && <label className={styles.label}>{label}</label>}
        
        <div className={clsx(
          styles.inputContainer,
          styles[variant],
          styles[inputSize],
          error && styles.error
        )}>
          <input
            ref={ref}
            type={inputType}
            value={currentValue}
            onChange={handleChange}
            className={styles.input}
            {...props}
          />

          <div className={styles.icons}>
            {showClearButton && (
              <button
                type="button"
                onClick={handleClear}
                className={styles.iconButton}
                aria-label="Clear input"
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

            {isPassword && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.iconButton}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M2.5 10C2.5 10 5 4.5 10 4.5C15 4.5 17.5 10 17.5 10C17.5 10 15 15.5 10 15.5C5 15.5 2.5 10 2.5 10Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M3 3L17 17M10.5 13.5C9.5 14 8 14 7 13C6 12 5.5 10.5 6 9.5M14 10.5C14 10.5 13.5 12 12.5 13M10 6C11 6 12 6.5 13 7C14 7.5 14.5 9 14 10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>

        {error && <span className={styles.errorText}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';