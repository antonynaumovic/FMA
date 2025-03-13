export default function Segment({ title = "H2", label = "Section", uppercase = false, useHeader = true, useTitle = true, fullWidth = false, children }) {
  return (
    <section
      className="relative flex flex-col items-center mb-8"
      aria-label={label}
    >
    {useHeader && 
      <div id={`HeaderContainer-${title}`} className="flex w-full h-24 justify-center bg-content1">
      {useTitle &&
        <div className={`${fullWidth ? "max-w-full" : "max-w-7xl"} flex h-full grow mx-4`}>
          <h2 className={`text-4xl h-full text-left text-pretty content-center font-bold sm:text-5xl ${uppercase ? "uppercase" : ""}`}>{title}</h2>
        </div>
      }
      </div>
    }
      <div className={`container ${fullWidth ? "max-w-full" : "max-w-7xl"} h-fit mt-4 sm:mt-8`}>
        {children}
      </div>
    </section>
  );
}
