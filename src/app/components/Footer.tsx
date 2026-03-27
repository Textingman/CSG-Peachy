import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 px-5 pt-10 pb-7">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-5">Contact Us</h3>

          {/* Address */}
          <div className="flex items-start gap-3.5 mb-4">
            <span className="text-lg mt-0.5 flex-shrink-0">📍</span>
            <div className="text-sm leading-relaxed">
              <strong className="text-white block mb-0.5">
                Mailing Address
              </strong>
              Peachy Insurance
              <br />
              400 Galleria Pkwy SE, Ste 1500
              <br />
              Atlanta, GA 30339
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3.5 mb-4">
            <span className="text-lg flex-shrink-0">✉</span>
            <a
              href="mailto:support@trypeachyinsurance.com"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              support@trypeachyinsurance.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3.5">
            <span className="text-lg flex-shrink-0">📞</span>
            <a
              href="tel:14046001660"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              (404) 600-1660
            </a>
          </div>
        </div>

        {/* Brand / Copyright */}
        <div className="border-t border-gray-700 pt-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-base mb-1.5">
              Peachy Insurance
            </p>
            <p className="text-gray-500 text-sm">2026 - Peachy Insurance</p>
            <div className="flex gap-4 mt-2">
              <Link
                href="/privacy-policy"
                className="text-xs text-gray-400 hover:text-white transition-colors underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-use"
                className="text-xs text-gray-400 hover:text-white transition-colors underline"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
