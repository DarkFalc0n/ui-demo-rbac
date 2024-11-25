import { AlignHorizontalJustifyStart } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="my-3 flex justify-start gap-4 rounded-xl bg-zinc-800 px-6 py-4 text-white md:my-4 md:px-8 md:py-6">
      <AlignHorizontalJustifyStart className="size-7 text-sky-400 md:size-8" />
      <div className="text-lg font-medium text-zinc-100 md:text-2xl">
        RBAC Demo
      </div>
    </div>
  );
};

export default Navbar;
