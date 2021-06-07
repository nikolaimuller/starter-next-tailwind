import * as React from 'react'

export const HeadingSection = (): React.ReactElement => {
  return (
    <section className="flex items-center justify-center h-screen bg-paper text-white">
      <div className="px-4">
        <div>
          <div>
            <span
              style={{ marginLeft: '-0.8rem', backgroundColor: '#111d27' }}
              className="px-4 py-2.5 rounded-full bg-black text-sm text-primary select-none"
            >
              Template
            </span>
          </div>
          <h1 className="text-4xl font-bold my-7">Next + TailwindCSS template</h1>
          <div>
            <h2 className="text-xl font-bold my-5">Technologies</h2>
            <ul className="list-disc pl-9 my-5">
              <li>NextJS (React)</li>
              <li>TailwindCSS</li>
            </ul>
            <h2 className="text-xl font-bold my-5">Tooling</h2>
            <ul className="list-disc pl-9 my-5">
              <li>ESlint</li>
              <li>Prettier</li>
              <li>Stylelint</li>
              <li>Typescript</li>
              <li>Commitlint</li>
            </ul>
            <a
              className="text-primary"
              href="https://github.com/nikolaymuller/starter-next-tailwind"
              rel="noreferrer"
              target="_blank"
            >
              GitHub repo →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
