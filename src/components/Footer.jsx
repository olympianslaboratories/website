const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
          <p className="text-center text-sm md:text-lg mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Olympians Labortaries. All rights reserved.
          </p>
    </footer>
  );
};

export default Footer;