import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="text-white font-semibold text-xl hover:text-primary transition-colors"
    >
      Kashmir Fruit Preservers
    </Link>
  );
};

export default Logo;
