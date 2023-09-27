import Link from "next/link";

export default function About() {
  return (
    <div className="px-2 max-w-6xl mx-auto space-y-3">
      <h1 className="font-bold text-amber-500 text-2xl mt-6">About Project</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Resources
              </th>
              <th scope="col" class="px-6 py-3">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                API
              </th>
              <td class="px-6 py-4">
                <p>The Movie Database (TMDB)</p>
                <p>
                  <Link href={"https://developer.themoviedb.org/docs"}>
                    https://developer.themoviedb.org/docs
                  </Link>
                </p>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Fonts
              </th>
              <td class="px-6 py-4">
                Google Fonts
                <p>
                  <Link href="https://fonts.google.com/">
                    https://fonts.google.com/
                  </Link>
                </p>
              </td>
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Icons
              </th>
              <td class="px-6 py-4">
                React Icons
                <p>
                  <Link href={"https://react-icons.github.io/react-icons/"}>
                    https://react-icons.github.io/react-icons/
                  </Link>
                </p>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Modes
              </th>
              <td class="px-6 py-4">
                <p>1. Dark</p>
                <p>2. Light</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
