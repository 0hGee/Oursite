/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Badge } from './components/badge'; // Ensure this is correctly imported

function ExpandingSidePanel({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-1"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-60 transition-opacity"/>
        </Transition.Child>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-xl">
                  <div className="flex h-full flex-col overflow-y-scroll bg-indigo-950 bg-opacity-25 py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="mt-10 flex items-start justify-between">
                        <Dialog.Title className="text-lg font-semibold text-indigo-500">Let's talk</Dialog.Title>
                        <div className="mt-10bg-opacity-75 ml-8 flex h-7 items-center">
                          <button
                            onClick={() => setOpen(false)}
                            className="bg-transparent rounded-md text-indigo-500 hover:text-sky-500 focus:ring-2 focus:ring-offset-2"
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      {/* Here starts the form */}
                      <form action="#" method="POST" className="space-y-6 pt-6 pb-5">
                        <div>
                          <label htmlFor="first-name" className="block text-sm font-semibold leading-8 text-indigo-300 mt-10 ml-">
                            First name
                          </label>
                          <div className="mt-3">
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-indigo-300">
                            Last name
                          </label>
                          <div className="mt-3">
                            <input
                              type="text"
                              name="last-name"
                              id="last-name"
                              autoComplete="family-name"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-indigo-300">
                            Email
                          </label>
                          <div className="mt-3">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              autoComplete="email"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-semibold leading-6 text-indigo-300">
                            Message
                          </label>
                          <div className="mt-3">
                            <textarea
                              name="message"
                              id="message"
                              rows={8}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                            />
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Send
                          </button>
                        </div>
                      </form>
                      {/* Here ends the form */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}


export default function Example() {
  // Function to trigger the opening of the side panel
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      {/* SVG and background setup omitted for brevity */}

          {/* Include the side panel and pass the showPanel state to control its visibility */}
      <ExpandingSidePanel open={showPanel} setOpen={setShowPanel} />

      {/* Your existing content */}
  <div>
  <div className="mx-auto max-w-7xl pb-10 pt-10 sm:pb-1 lg:flex lg:px-0">
  <div className="mx-auto max-w-7xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-40">
    <div className="flex">
      <div className="animate-pulse-fast">
        <img className="max-h-28" src="flashindi.png" alt="Flash Blu"/>
      </div>
      <img className="max-h-28" src="indiauder.png" alt="Kauder"/>
    </div>
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="https://gretel.space" className="inline-flex space-x-6"> {/* Ensure you add href attribute or use a button for semantics */}
              <span className="inline-flex items-center space-x-1 text-sm font-medium leading-6 text-gray-300">
                <ChevronRightIcon className="h-5 w-5 text-indigo-500"/>
                <div className="flex gap-4">
      <Badge color="indigo">design</Badge>
      <Badge color="blue">scope</Badge>
      <Badge color="sky">build</Badge>
      <Badge color="blue">test</Badge>
      <Badge color="indigo">deploy</Badge>
    </div>
              </span>
            </a>
          </div>
          <h3 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          End to end solutions happen here
          </h3>
          <p className="mt-6 text-lg leading-8  text-slate-200">
           A big team with the right skills. From design to deploy - we can build a solution that delivers and delights. Cut out the noise and collaborate directly with creators at Kauder.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
          <button 
        className="rounded-full bg-0 px-3.5 py-1 text-s font-semibold text-indigo-400 shadow-sm ring-1 ring-inset ring-indigo-500 hover:bg-sky-950"
        onClick={() => setShowPanel(true)}
      >
       Let's talk
      </button>
            
          </div>
        </div>
        <div className="mx-auto mt-50 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt10 lg:max-w-50% lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-50%">
            <img
              src="https://www.gretel.space/assets/cloudai.png"
              opacity="20%"
              width={100}
              height={100}
              className="opacity-10 w-[65rem] rounded-md bg-gray-950/0 ring-1 ring-white/0"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
