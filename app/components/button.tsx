import { MotionProps, motion } from "framer-motion";

type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps;

const bgColors = {
  primary: "bg-moniepoint-orange",
  secondary: "bg-moniepoint-grey",
} as const;

const textColors = {
  primary: "text-white",
  secondary: "text-moniepoint-black",
} as const;

export const Button = ({ variant = "primary", children, ...rest }: ButtonProps) => {
  return (
    <motion.button
      initial={{ scale: 1.15 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      viewport={{ once: false }}
      className={`${bgColors[variant]} ${textColors[variant]} text-xs rounded-md py-3 px-8`}
      {...rest}
    >
      {children}
    </motion.button>
  );
};
