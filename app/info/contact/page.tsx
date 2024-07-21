import Link from "next/link";

function ContactPage() {
  return (
    <div>
      <h1 className="text-7xl">Home page</h1>
      <Link href="/" className="text-xl text-blue-500 inline-block mt-8">
        Back home
      </Link>
    </div>
  );
}

export default ContactPage;
