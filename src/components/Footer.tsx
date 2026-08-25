import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-10">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 flex flex-col items-center gap-2.5">
        <Logo textDark={false} />
        <p className="mt-3 text-sm text-gray-400">
          &copy; {year} IB Academy. All rights reserved.
        </p>
        <p className="mx-auto mt-1.5 max-w-2xl text-sm leading-relaxed text-gray-500">
          This service has been developed independently from and is not endorsed
          by the International Baccalaureate Organization.
        </p>
      </div>
    </footer>
  );
}
