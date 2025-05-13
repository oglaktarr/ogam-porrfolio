export const GRADIENTS = {
  primary: "bg-gradient-to-r from-blue-600 to-emerald-500",
  secondary: "bg-gradient-to-r from-purple-600 to-pink-500",
  dark: "bg-gradient-to-r from-gray-800 to-gray-900",
  light: "bg-gradient-to-r from-gray-100 to-gray-50",
};

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
};
