export default function Segment({ title = "H2", label = "Section", uppercase = false, useHeader = true, children }) {
  return (
    <section
      className="relative flex flex-col items-center mb-8"
      aria-label={label}
    >
      <div id={`HeaderContainer-${title}`} className="flex w-full h-24 justify-center bg-content1">
      {useHeader &&
        <div className="max-w-7xl flex h-full grow mx-4">
          <h2 className={`text-4xl h-full text-left text-pretty content-center font-semibold sm:text-6xl ${uppercase ? "uppercase" : ""}`}>{title}</h2>
        </div>
      }
      </div>
      <div className="container max-w-7xl h-fit mt-4 sm:mt-8">
        {children}
      </div>
    </section>
  );
}
