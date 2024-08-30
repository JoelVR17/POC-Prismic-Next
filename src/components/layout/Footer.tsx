import { useGetNavigation, useGetSettings } from "@/hooks/useGetSettings";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

const Footer = async () => {
  // Get data form prismic
  const settings = useGetSettings();
  const navigation = useGetNavigation();

  const logoUrl = (await settings).data.og_image.url || "";
  const links = (await navigation).data.navigation;

  return (
    <>
      <footer className="rounded-lg shadow m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logoUrl} className="h-8" alt="Flowbite Logo" />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              {links.map(({ link, label }) => (
                <li key={label}>
                  <PrismicNextLink
                    className="hover:underline me-4 md:me-6"
                    field={link}
                  >
                    {label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              Joel Vargas - Multimoney™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
