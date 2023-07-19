import Link from "next/link";
interface buttonType {
  to: string;
  classes?: string;
  children: any;
}

const Button = ({ to, classes, children }: buttonType) => {
  return (
    <Link
      href={to}
      className={`${classes} font-medium px-4 py-3 sm:mt-10 mt-4 rounded border-[1px] border-secondary whitespace-nowrap `}
    >
      {children}
    </Link>
  );
};

export default Button;
