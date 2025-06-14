"use client";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  // const { data: session } = authClient.useSession();
  // const user = session?.user;
  const user = {}

  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image
            src="/assets/icons/logo1.png"
            alt="Logo"
            width={32}
            height={32}
          />
          <h1>Reclyst</h1>
        </Link>

        {user && (
          <figure>
            <button onClick={() => router.push('/profile/12345')}>
              <Image
                src='/assets/images/dummy.jpg'
                alt="User"
                width={36}
                height={36}
                className="rounded-full aspect-square"
              />
            </button>
            {/* <button 
            onClick={() => router.push(`/profile/${session?.user.id}`)}>
              <ImageWithFallback
                src={session?.user.image ?? ""}
                alt="User"
                width={36}
                height={36}
                className="rounded-full aspect-square"
              />
            </button> */}
            <button
              className="cursor-pointer"
            >
              <Image
                src="/assets/icons/logout.svg"
                alt="logout"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
            {/* <button
              onClick={async () => {
                return await authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      redirect("/sign-in");
                    },
                  },
                });
              }}
              className="cursor-pointer"
            >
              <Image
                src="/assets/icons/logout.svg"
                alt="logout"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button> */}
          </figure>
        )}
      </nav>
    </header>
  );
};

export default Navbar;