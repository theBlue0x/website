import Image from 'next/image';
import React from 'react';
import {
  WalletIcon,
  BuildingStorefrontIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline';

import { ReactCompareSlider } from 'react-compare-slider';
import screenshot from '../../public/images/screenshot.webp';
import before from '../../public/images/before.webp';
import after from '../../public/images/after.webp';

import Link from 'next/link';
import { toast, Toaster } from 'react-hot-toast';

export default function Home() {
  const onClick = (command: string) => {
    navigator.clipboard.writeText(command);
    toast.success('Copied to clipboard');
  };

  return (
    <>
      <div className="mx-auto flex w-auto flex-col justify-between px-4 pb-8 pt-12 sm:pt-24 md:flex-row lg:max-w-7xl lg:px-4">
        <div className="flex w-full flex-col justify-between md:ml-6 md:w-10/12 lg:w-9/12 xl:w-7/12">
          <div>
            <h1 className="mx-auto max-w-5xl text-6xl font-extrabold leading-[1.1] tracking-tighter sm:text-7xl">
              <span className="inline-block bg-gradient-to-r from-blue-700 from-10% via-sky-500 via-30% to-[#00ff5e] to-85%  bg-clip-text pr-1 text-transparent ">
                Together.
                <br />
                We Are the Bank.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-medium text-white">
              Open-sourced. Decentralized. Secure.
              <br />
              </p>
              <p className="my-4 max-w-2xl text-lg/7 tracking-tight text-gray-400 md:max-w-xl">
              Blue0x is a monetary system built on computational trust that eliminates the need for
              intermediaries and returns control of national & personal finance back to the people.
              <br />
            </p>
          </div>
          <div className="mb-6 mt-4 flex h-32 flex-col gap-3 md:my-0 md:flex-row md:items-center xl:flex-row">
            <div className="rounded-md xl:w-auto">
              <Link
                href="/docs/getting-started/installation"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-black no-underline md:px-8 md:py-3 md:leading-6"
              >
                Get Started →
              </Link>
            </div>
            <div className="relative rounded-md xl:w-auto">
              <button
                onClick={() => onClick('curl -sL https://get.blue0x.com | sudo bash')}
                className="flex w-full items-center justify-center rounded-md border border-gray-700 bg-white/10 px-2 py-3 font-mono text-sm font-medium text-gray-300 hover:bg-gray-900 md:px-4 md:py-3 md:text-base md:leading-6"
              >
                curl -sL https://get.blue0x.com | sudo bash
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden border-t border-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-800 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-900">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-blue-600">All-in-one</p>
                <h1 className="light:text-gray-900 mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Everything you need is already here
                </h1>
                <p className="mt-6 text-lg/7 tracking-tight text-gray-400">
                  Blue0x is not just a blockchain. There is an entire decentralized
                  ecosystem, built-in and ready to go! All transactions are executed on-chain and
                  are fully transparent.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              className="w-[48rem] max-w-none rounded-xl sm:w-[57rem]"
              src={screenshot}
              alt="Screenshot of the Blue0x wallet"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-6 lg:max-w-lg">
                <ul role="list" className="space-y-8">
                  <li className="flex gap-x-3">
                    <WalletIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-blue-600">
                        Browser-based Wallet.
                      </strong>{' '}
                      Run on a VPS, a local machine, or your mobile phone! Any device with a browser
                      can run a Blue0x wallet.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <BuildingStorefrontIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-blue-600">
                        Blue0x Marketplace.
                      </strong>{' '}
                      Buy and sell anything, anytime, anywhere on the first decentralized crypto marketplace.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ArrowTrendingUpIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-blue-600">
                        Blue0x Exchange.
                      </strong>{' '}
                      Trade a growing list of international currencies on the first decentralized
                      foreign exchange.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </>
  );
}
