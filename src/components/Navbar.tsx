'use client';
import { client } from "@/app/client";
import Link from "next/link";
import { ConnectButton, lightTheme, useActiveAccount } from "thirdweb/react";
import Image from 'next/image';
import thirdwebIcon from "@public/image.png";

const Navbar = () => {
  const account = useActiveAccount();

  return (
    <nav className="bg-white border-b-2 border-b-slate-300 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Left: Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center">
              <Image
                src={thirdwebIcon}
                alt="FundMyStartup Logo"
                width={320}
                height={40}
                className="object-contain"
                style={{
                  filter: "drop-shadow(0px 0px 12px #a726a9a8)",
                }}
              />
            </Link>
            
          </div>

          {/* Middle: Links */}
          <div className="hidden sm:flex space-x-4">
            <Link href="/">
              <p className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">
                Campaigns
              </p>
            </Link>
            {account && (
              <Link href={`/dashboard/${account.address}`}>
                <p className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">
                  Dashboard
                </p>
              </Link>
            )}
          </div>

          {/* Right: Wallet Connect */}
          <div className="flex items-center">
            <ConnectButton
              client={client}
              theme={lightTheme()}
              detailsButton={{
                style: {
                  maxHeight: "40px",
                },
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
