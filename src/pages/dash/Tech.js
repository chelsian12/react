import { DiBootstrap, DiCss3, DiHtml5, DiJavascript, DiReact } from "react-icons/di";

const Tech = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold p-5"> Technologies I use</h1>
      <div id="icons" className="text-9xl grid grid-cols-4 gap-5 justify-items-center lg:grid-cols-3 md:grid-cols-2">
        <DiHtml5 className="hover:scale-150" color="orange" />
        <DiCss3 color="blue" className="animate-ping" />
        <DiJavascript color="yellow" className="animate-bounce" />
        <DiReact className="animate-spin" color="skyblue" />
        <DiBootstrap className="animate-pulse" color="purple" />

      </div>
    </div>
  )
}
export default Tech