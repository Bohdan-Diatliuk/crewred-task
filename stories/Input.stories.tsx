/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src/components/Input/Input';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled'],
    },
    inputSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const TextClearable: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'example@email.com',
    clearable: true,
    defaultValue: 'user@example.com',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    defaultValue: 'secretpassword123',
  },
};

export const PasswordClearable: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    clearable: true,
    defaultValue: 'mypassword',
  },
};

export const NumberInput: Story = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: '0',
    min: 0,
    max: 120,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'example@email.com',
    error: 'Please enter a valid email address',
    defaultValue: 'invalid-email',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    inputSize: 'small',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Input',
    placeholder: 'Medium size',
    inputSize: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    inputSize: 'large',
  },
};

export const FilledVariant: Story = {
  args: {
    label: 'Filled Input',
    placeholder: 'Filled variant',
    variant: 'filled',
    clearable: true,
    defaultValue: 'Some text',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true,
    clearable: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit this',
    defaultValue: 'Disabled text',
  },
};

export const Controlled: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Input
                label="Controlled Input"
                placeholder="Type something..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                clearable
                onClear={() => setValue('')} className={''} min={0} max={0}        />
        <div style={{ fontSize: '14px', color: '#666' }}>
          Current value: <strong>{value || '(empty)'}</strong>
        </div>
      </div>
    );
  },
};

export const AllFeatures: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [text, setText] = useState('john.doe@example.com');
    const [password, setPassword] = useState('mySecretPass123');
    const [number, setNumber] = useState('25');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '350px' }}>
        <Input
                label="Email"
                type="email"
                value={text}
                onChange={(e) => setText(e.target.value)}
                clearable
                onClear={() => setText('')}
                placeholder="Enter email" className={''}      />
        
        <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                clearable
                onClear={() => setPassword('')}
                placeholder="Enter password" className={''}        />
        
        <Input
                label="Age"
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter age"
                min={0}
                max={120}       />

        <Input
                label="Phone (Filled Variant)"
                type="tel"
                variant="filled"
                placeholder="+1 (555) 000-0000"
                clearable        />
      </div>
    );
  },
};