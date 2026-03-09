const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-[#fafafa]">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400 font-light">
            &copy; {currentYear} Reuben Nzembei. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 font-light">
            Available for freelance &amp; full-time roles
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
