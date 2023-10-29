import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'


const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '/about', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Navbar = () => {
  return (
    <div>


    <Disclosure as="nav" className="bg-blue-400 py-6">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to={"/"}>
                <img
                    className="h-8 w-auto mr-20"
                    src="https://imgs.search.brave.com/Q-zbYkkUUgtp1OrRAtEywAJqIIAqjPCAzL_ZfHgwUJM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvYm94L3NtYWxs/L2JveF9QTkcxMzUu/cG5n"
                    alt="Your Company"
                  />
                  </Link>
                </div>
                <div className="mt-5">

                </div>
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? ' text-blue-800' : 'text-blue-800 hover:bg-purple-200 hover:text-blue-900',
                          'rounded-md px-3 py-2 text-3xl font-bold'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

    </div>
  )
}

export default Navbar