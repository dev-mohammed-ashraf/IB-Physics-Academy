import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-deep py-10 dark:border-t dark:border-line-footer">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 flex flex-col items-center gap-2.5">
        <Logo textDark={false} />
        <p className="mt-3 text-sm text-muted-static">
          &copy; {year} Get 7 With Maha. All rights reserved.
        </p>
        <p className="mx-auto mt-1.5 max-w-2xl text-sm leading-relaxed text-faint-static">
          This service has been developed independently from and is not endorsed
          by the International Baccalaureate Organization.
        </p>
      </div>
    </footer>
  );
}
