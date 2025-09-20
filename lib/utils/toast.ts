import { toast as sonnerToast } from "sonner";
import { type ExternalToast } from "sonner";

type ToastFunction = (
  message: string,
  options?: ExternalToast
) => string | number;

interface ExtendedToastFunction extends ToastFunction {
  success: ToastFunction;
  error: ToastFunction;
  warning: ToastFunction;
  info: ToastFunction;
  promise: typeof sonnerToast.promise;
  dismiss: (id?: string | number) => void;
  loading: ToastFunction;
}

export const toast: ExtendedToastFunction = Object.assign(
  (message: string, options?: ExternalToast) => sonnerToast(message, options),
  {
    success: (message: string, options?: ExternalToast) =>
      sonnerToast.success(message, options),
    error: (message: string, options?: ExternalToast) =>
      sonnerToast.error(message, options),
    warning: (message: string, options?: ExternalToast) =>
      sonnerToast.warning(message, options),
    info: (message: string, options?: ExternalToast) =>
      sonnerToast.info(message, options),
    promise: sonnerToast.promise,
    dismiss: sonnerToast.dismiss,
    loading: (message: string, options?: ExternalToast) =>
      sonnerToast.loading(message, options),
  }
);

// Alternative usage methods (optional)
export const toastError = toast.error;
export const toastSuccess = toast.success;
export const toastWarning = toast.warning;
export const toastInfo = toast.info;
export const toastPromise = toast.promise;
export const dismissToast = toast.dismiss;
export const toastLoading = toast.loading;
