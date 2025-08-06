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
      <div className="flex flex-col justify-between px-4 pt-12 pb-8 mx-auto w-auto sm:pt-24 md:flex-row lg:px-4 lg:max-w-7xl">
        <div className="flex flex-col justify-between w-full md:ml-6 md:w-10/12 lg:w-9/12 xl:w-7/12">
          <div>
            <h1 className="mx-auto max-w-5xl text-6xl font-extrabold tracking-tighter sm:text-7xl leading-[1.1]">
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
              <p className="my-4 max-w-2xl tracking-tight text-gray-400 md:max-w-xl text-lg/7">
              Blue0x is a monetary system built on computational trust that eliminates the need for
              intermediaries and returns control of national & personal finance back to the people.
              <br />
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-4 mb-6 h-32 md:flex-row md:items-center md:my-0 xl:flex-row">
            <div className="rounded-md xl:w-auto">
              <Link
                href="/docs/getting-started/installation"
                className="flex justify-center items-center py-3 px-8 w-full text-base font-medium text-black no-underline bg-white rounded-md border border-transparent sm:mb-0.5 md:py-3 md:px-8 md:leading-6"
              >
                Get Started →
              </Link>
            </div>
            <div className="relative rounded-md xl:w-auto">
              <button
                onClick={() => onClick('curl -sL https://get.blue0x.com | sudo bash')}
                className="flex justify-center items-center py-3 px-2 w-full font-mono text-sm font-medium text-gray-300 rounded-md border border-gray-700 md:py-3 md:px-4 md:text-base md:leading-6 hover:bg-gray-900 bg-white/10"
              >
                curl -sL https://get.blue0x.com | sudo bash
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden relative py-4 px-6 border-t border-gray-900 sm:py-12 md:py-16 lg:overflow-visible lg:py-24 lg:px-0 isolate">
        <div className="overflow-hidden absolute inset-0 -z-10">
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
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 mx-auto max-w-2xl lg:grid-cols-2 lg:gap-y-10 lg:items-start lg:mx-0 lg:max-w-none">
          <div className="lg:grid lg:grid-cols-2 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:gap-x-8 lg:px-8 lg:mx-auto lg:w-full lg:max-w-7xl">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-blue-600">All-in-one</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl light:text-gray-900">
                  Everything you need is already here
                </h1>
                <p className="mt-6 tracking-tight text-gray-400 text-lg/7">
                  Blue0x is not just a blockchain. There is an entire decentralized
                  ecosystem, built-in and ready to go! All transactions are executed on-chain and
                  fully transparent.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:overflow-hidden lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-20">
            <Image
              className="max-w-none rounded-xl border w-[48rem] border-gray-700/60 sm:w-[57rem]"
              src={screenshot}
              alt="Screenshot of the Blue0x wallet"
            />
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:gap-x-8 lg:px-8 lg:mx-auto lg:w-full lg:max-w-7xl">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-6 lg:max-w-lg">
                <ul role="list" className="space-y-8">
                  <li className="flex gap-x-3 p-4 rounded-lg border border-gray-700 bg-gray-700/50">
                    <WalletIcon
                      className="flex-none mt-1 w-5 h-5 text-blue-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-blue-600">
                        Browser-based Wallet -
                      </strong>{' '}
                      No apps. No extensions.  The Blue0x wallet runs right in your favorite browser.
                    </span>
                  </li>
                  <li className="flex gap-x-3 p-4 rounded-lg border border-gray-700 bg-gray-700/50">
                    <BuildingStorefrontIcon
                      className="flex-none mt-1 w-5 h-5 text-blue-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-blue-600">
                        Blue0x Marketplace -
                      </strong>{' '}
                      Buy and sell anything, anytime, anywhere on the first decentralized marketplace.
                    </span>
                  </li>
                  <li className="flex gap-x-3 p-4 rounded-lg border border-gray-700 bg-gray-700/50">
                    <ArrowTrendingUpIcon
                      className="flex-none mt-1 w-5 h-5 text-blue-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-blue-600">
                        Blue0x Exchange -
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

      <div className="relative from-gray-50 to-gray-200">
        <div className="px-6 pb-12 mx-auto mt-12 lg:max-w-7xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-center text-white">
            Easy to setup and use
          </h2>
          <p className="mx-auto mt-3 text-center text-gray-400 lg:max-w-3xl">
            Whatever your skill set or hardware, we&#39;ve got you covered.
          </p>
          <div className="flex justify-center mt-10 mb-4">
            <div className="overflow-hidden rounded-lg border lg:w-7/12 border-gray-700/60">
              <ReactCompareSlider
                itemOne={<Image src={before} alt="Exchange image" className="object-cover w-full" />}
                itemTwo={<Image src={after} alt="Market image" className="object-cover w-full" />}
              />
            </div>
          </div>
        </div>
        <div className="px-6 mx-auto lg:max-w-7xl">
          <div className="flex justify-center">
            <div className="w-3/4 lg:w-7/12">
              <Link
                href="/docs/getting-started/installation"
                className="flex justify-center items-center py-4 px-8 w-full text-lg font-medium text-gray-200 no-underline rounded-md border md:px-8 md:leading-6 border-gray-700/60 bg-gray-800/30"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Toaster position="bottom-right" />
    </>
  );
}
