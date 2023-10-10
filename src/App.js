import profile from './img/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBookmark, faEnvelope, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.getElementsByTagName('html')[0].classList.add('dark')
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.getElementsByTagName('html')[0].classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [theme])

  const toggleDarkMode = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-screen text-gray-800 transition-colors duration-350 ease-out dark:bg-gray-800 dark:text-white">
        <div className="fixed cursor-pointer top-5 right-8">
          <button
            onClick={toggleDarkMode}
            className="text-4xl"
          >
            {theme === 'dark' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
          </button>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center border-t border-b py-8 sm:px-12 border-gray-300">
          <div>
            <img class="w-36 h-36 rounded-full sm:mr-5 mb-5 sm:mb-0" src={profile} alt="Nuriddin" />
          </div>
          <div className='flex flex-col h-32 text-center'>
            <div>
              <h2 className="uppercase font-extrabold text-2xl">Nuriddin Islamov</h2>
              <p className='text-gray-500 mb-2 dark:text-gray-400'>Software Engineer | Finance enthusiast</p>
              <a className="inline-block text-sm hover:underline mb-5 after:content-['_↗']" rel="noreferrer" target="_blank" href="https://read.nuriddinislamov.com/about">Read about me</a>
            </div>
            <div className='text-2xl'>
              <a className="hover:text-gray-500 mx-3 dark:hover:text-gray-300" href="mailto:hi@nuriddinislamov.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a className="hover:text-gray-500 mx-3 dark:hover:text-gray-300" target="_blank" rel='noreferrer' href="https://github.com/nuriddinislamov">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a className="hover:text-gray-500 mx-3 dark:hover:text-gray-300" target="_blank" rel='noreferrer' href="https://linkedin.com/in/nuriddinislamov">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a className="hover:text-gray-500 mx-3 dark:hover:text-gray-300" target="_blank" rel='noreferrer' href="https://read.nuriddinislamov.com/blog">
                <FontAwesomeIcon icon={faBookmark} />
              </a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
