import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "../src/components/Toast/Toast";
import { useState } from "react";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["success", "error", "warning", "info"],
    },
    duration: {
      control: { type: "number", min: 0, max: 10000, step: 500 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    id: "1",
    type: "success",
    message: "Your changes have been saved successfully!",
    duration: 4000,
    showCloseButton: true,
  },
};

export const Error: Story = {
  args: {
    id: "2",
    type: "error",
    message: "Something went wrong. Please try again.",
    duration: 4000,
    showCloseButton: true,
  },
};

export const Warning: Story = {
  args: {
    id: "3",
    type: "warning",
    message: "Your session will expire in 5 minutes.",
    duration: 4000,
    showCloseButton: true,
  },
};

export const Info: Story = {
  args: {
    id: "4",
    type: "info",
    message: "New updates are available. Click here to refresh.",
    duration: 4000,
    showCloseButton: true,
  },
};

export const WithoutCloseButton: Story = {
  args: {
    id: "5",
    type: "success",
    message: "This toast will auto-dismiss",
    duration: 3000,
    showCloseButton: false,
  },
};

export const LongDuration: Story = {
  args: {
    id: "6",
    type: "info",
    message: "This toast stays visible for 10 seconds",
    duration: 10000,
    showCloseButton: true,
  },
};

export const ShortDuration: Story = {
  args: {
    id: "7",
    type: "success",
    message: "Quick message!",
    duration: 1500,
    showCloseButton: true,
  },
};

export const LongMessage: Story = {
  args: {
    id: "8",
    type: "warning",
    message:
      "This is a much longer message that demonstrates how the toast component handles multiple lines of text. It should wrap nicely and remain readable.",
    duration: 5000,
    showCloseButton: true,
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toasts, setToasts] = useState<any[]>([]);

    const addToast = (type: "success" | "error" | "warning" | "info") => {
      const messages = {
        success: "Operation completed successfully!",
        error: "An error occurred!",
        warning: "Warning: Please check your input.",
        info: "Here is some information for you.",
      };

      const id = Date.now().toString();
      const newToast = {
        id,
        type,
        message: messages[type],
        duration: 4000,
        showCloseButton: true,
      };

      setToasts((prev) => [...prev, newToast]);
    };

    const removeToast = (id: string) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3 style={{ marginBottom: "20px" }}>Click buttons to show toasts</h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button
            onClick={() => addToast("success")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#10b981",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Show Success
          </button>
          <button
            onClick={() => addToast("error")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Show Error
          </button>
          <button
            onClick={() => addToast("warning")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#f59e0b",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Show Warning
          </button>
          <button
            onClick={() => addToast("info")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Show Info
          </button>
        </div>

        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            zIndex: 9999,
          }}
        >
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              {...toast}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </div>
      </div>
    );
  },
};

export const MultipleToasts: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toasts, setToasts] = useState<any[]>([]);

    const showMultipleToasts = () => {
      const types: Array<"success" | "error" | "warning" | "info"> = [
        "success",
        "info",
        "warning",
        "error",
      ];
      const messages = [
        "First notification",
        "Second notification",
        "Third notification",
        "Fourth notification",
      ];

      types.forEach((type, index) => {
        setTimeout(() => {
          const id = `${Date.now()}-${index}`;
          setToasts((prev) => [
            ...prev,
            {
              id,
              type,
              message: messages[index],
              duration: 5000,
              showCloseButton: true,
            },
          ]);
        }, index * 500);
      });
    };

    const removeToast = (id: string) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return (
      <div style={{ padding: "20px" }}>
        <button
          onClick={showMultipleToasts}
          style={{
            padding: "12px 24px",
            backgroundColor: "#6366f1",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Show Multiple Toasts
        </button>

        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            zIndex: 9999,
          }}
        >
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              {...toast}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </div>
      </div>
    );
  },
};
