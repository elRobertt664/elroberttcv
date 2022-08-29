import me from '../src/img/me.jpeg';
import './index.css';
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { SiAdobexd, SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";
import { DiHtml5, DiCss3, DiJsBadge, DiPhp, DiBootstrap, DiReact, DiLaravel, DiLinux, DiTrello, DiVisualstudio } from "react-icons/di";
import { AiOutlineWhatsApp } from "react-icons/ai";



const iconStyle = { marginRight: '10px', color: '#c8aa8c' }
function App() {

  return (
    <div className="container mx-auto px-4 mt-20">
      <div className="flex flex-wrap justify-center">
        <div className=" ">
          <img src={me} alt="Logo" class="w-48 h-48  object-scale-down  rounded-full m-5 text-center " />
        </div>
        <div class="">
          <div class="flex flex-col ">
            <div class="">
              <p class="font-sans text-5xl bg-transparent font-semibold text-gray-700 mt-3 text-center">ROBERTO FLORES ZAPIAIN
              </p> </div>
            <div class=""><p class="text-[#c8aa8c] font-bold text-2xl text-center mt-2 bg-transparent">WEB DEVELOPER</p></div>
          </div>
          <div className="flex flex-wrap flex-row text-center ">
            <div className="basis-1/2 ">
              <a href='#' className="text-gray-700 ml-4 mt-3 inline-flex items-baseline"><AiOutlineWhatsApp style={iconStyle} />   +52 1 311-257-7795</a>
            </div>
            <div className="basis-1/2 ">
              <a href='#' className="text-gray-700 m-5 inline-flex items-baseline"><HiMail style={iconStyle} />  tic-270073@utnay.edu.mx</a>
            </div>
            <div className="basis-1/2 ">
              <a href='#' className="text-gray-700 m-5 inline-flex items-baseline"><HiMail style={iconStyle} /> roberttozappiain@gmail.com</a>
            </div>
            <div className="basis-1/2 ">
              <a href='https://github.com/RoberttoZappiain' className="text-gray-700 m-5 inline-flex items-baseline"><GoMarkGithub style={iconStyle} /> /RoberttoZappiain</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col justify-center ">
          <div className="w-64 border-b-[#c8aa8c]   border-b-4 ">
            <h3 className="text-gray-700 semibold text-center text-3xl mb-3">
              SOBRE MI </h3>
            <p className="text-gray-500 text-justify">
              Mi nombre es Roberto Flores soy estudiante de la universidad tecnológica de Nayarit y me gusta la programación, los videojuegos y la tecnología, busco especializarme en el desarrollo frontend usando las tecnologías mas populares del mercado. Soy un apasionado en aprender algo nuevo cada día, valoro mucho la puntualidad, la organización y la honestidad.
            </p>
            <ul className="text-gray-500">
              <li>
                Locacion: Tepic, Nayarit. Mexico
              </li>
              <li>
                Ingles: A2
              </li>
              <li>
                Nacionalidad: Mexicano
              </li>
              <li>
                Edad: 20 años
              </li>
            </ul>
          </div>
          <div className=" w-64  border-b-[#c8aa8c]  border-b-4 mt-5 ">
            <h3 className="text-gray-700 semibold text-center mb-3 text-3xl">
              TECNOLOGíAS</h3>
            <div className="grid grid-cols-2 gap-4">
              <div><h5 className="text-gray-700 inline-flex items-baseline"><DiHtml5 style={iconStyle} />HTML5</h5></div>
              <div><h5 className="text-gray-700 inline-flex items-baseline"><DiCss3 style={iconStyle} />CSS3</h5></div>
              <div><h5 className="text-gray-700 inline-flex items-baseline"><DiJsBadge style={iconStyle} />JAVASCRIPT</h5></div>
              <div><h5 className="text-gray-700 inline-flex items-baseline"><DiPhp style={iconStyle} />PHP</h5></div>
              <div><h5 className="text-gray-700 inline-flex items-baseline"><DiBootstrap style={iconStyle} />BOOTSTRAP</h5></div>
              <div><h5 className="text-gray-700 inline-flex items-baseline"><DiJsBadge style={iconStyle} />TAILWIND CSS
              </h5></div>
              <div><h5 className="text-gray-700 inline-flex items-baseline"><DiReact style={iconStyle} />REACT</h5></div>
              <div><h5 className="text-gray-700 inline-flex items-baseline"><DiLaravel style={iconStyle} />LARAVEL</h5></div>
              <div><h5 className="text-gray-700 inline-flex items-baseline"><DiLinux style={iconStyle} />LINUX</h5></div>
            </div>



          </div>
          <div className=" w-64  border-b-[#c8aa8c]  border-b-4 mt-5">
            <h3 className="text-gray-700 semibold text-center text-3xl mb-3">
              HERRAMIENTAS        </h3>
            <div className="grid grid-cols-2 gap-4">
              <div><h5 className="text-gray-700 inline-flex items-baseline"><SiAdobeillustrator style={iconStyle} />ADOBE ILLUSTRATOR</h5></div>
              <div><h5 className="text-gray-700 inline-flex items-baseline"><DiTrello style={iconStyle} />TRELLO</h5></div>
              <div><h5 className="text-gray-700 inline-flex items-baseline"><SiAdobephotoshop style={iconStyle} />ADOBE PHOTOSHOP</h5></div>
              <div><h5 className="text-gray-700 inline-flex items-baseline"><DiVisualstudio style={iconStyle} />vs code</h5></div>
              <div><h5 className="text-gray-700 inline-flex items-baseline"><SiAdobexd style={iconStyle} />ADOBE XD</h5></div>
            </div>
          </div>
        </div>

        <div className="basis-1/2 ">
          <h3 className="text-gray-700 font-bold text-center text-3xl mb-5">EXPERIENCIA PROFESIONAL</h3>
          <div className="flex flex-wrap justify-center">
            <div className=" basis-1/4 text-center  "> <p className="text-[#c8aa8c] font-semibold" > 2019 - ACTUALIDAD <br /> HOME OFFICE </p> </div>
            <div className="basis-3/4"><h3 className="text-gray-500 font-semibold text-center text-2xl">DISEÑADOR FRONTEND</h3>
              <ul className="list-disc">
                <li className="text-gray-500">
                  Analizo ideas, presento propuestas y genero bocetos de sitios web profesionales
                </li>
                <li className="text-gray-500">
                  Comparto y publico resultados
                </li>
              </ul>
            </div>

          </div>
          <div className="flex flex-wrap justify-center mt-5 border-b-[#c8aa8c]  border-b-4">
            <div className=" basis-1/4 text-center "> <p className="text-[#c8aa8c] font-semibold p-5"> 2021 - 2021 <br />
              (6 meses) TRIBUNAL SUPERIOR DE JUSTICIA </p> </div>
            <div className="basis-3/4"><h3 className="text-gray-500 font-semibold text-center text-2xl">FRONTEND DEVELOPER</h3>
              <ul className="list-disc">
                <li className="text-gray-500">
                  Encargado de la maquetación, colores, y recursos gráficos
                </li>
                <li className="text-gray-500">
                  Responsable de la programación frontend y comunicación con SCRUM-MASTER               </li>
              </ul>
            </div>

          </div>


          <div className=" basis-1/2 "><h3 className="text-gray-700 font-bold text-center text-3xl mb-5 mt-5">FORMACION ACADEMICA</h3>
            <div className="flex flex-wrap m-5 justify-center">
              <div className=" basis-3/4">
                <h3 className="text-[#c8aa8c] font-bold text-center text-1xl">INGENIERIA EN DESARROLLO Y GESTION DE SOFTWARE</h3>
                <h5 className="text-gray-500 font-semibold text-center text-1xl">UNIVERSIDAD TECNOLOGICA DE NAYARIT, NAYARIT MEXICO</h5>
                <h5 className="text-gray-500 text-center text-base">2021 - ACTUALIDAD</h5>
              </div>
            </div>
            <div className="flex flex-wrap m-5 justify-center">
              <div className=" basis-3/4">
                <h3 className="text-[#c8aa8c] font-bold text-center text-1xl">TSU TECNOLOGíAS DE LA INFORMACIóN</h3>
                <h5 className="text-gray-500 font-semibold text-center text-1xl">UNIVERSIDAD TECNOLOGICA DE NAYARIT, NAYARIT MEXICO</h5>
                <ul className="list-disc text-gray-500 lowercase ">
                  <li className="">CERTIFICADO DESARROLLO DE APLICACIONES WEB Y MOVILES</li>
                </ul>
                <h5 className="text-gray-500 text-center text-base">2019 - 2021</h5>
              </div>
            </div>
            <div className="flex flex-wrap justify-center m-5 border-b-[#c8aa8c]   border-b-4">
              <div className=" basis-3/4">
                <h3 className="text-[#c8aa8c] font-bold text-center text-1xl">BACHILLERATO INFORMATICA</h3>
                <h5 className="text-gray-500 font-semibold text-center text-1xl">CONALEP 169, NAYARIT MEXICO</h5>
                <ul className="list-disc text-gray-500 lowercase ">
                  <li>CERTIFICADO MANEJADOR DE PROCESADOR TEXTOS DIGITALES</li>
                </ul>
                <h5 className="text-gray-500 text-center text-base">2016 - 2019</h5>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap border-b-[#c8aa8c] justify-center  border-b-4">
            <div className=" basis-1/4 text-center"> <h1 className="text-[#c8aa8c] font-semibold mt-5">OBJETIVO PROFESIONAL</h1> </div>
            <div className=" basis-3/4"><h3 className="text-gray-500 text-base m-5 text-justify ">Ser parte de la nueva generacion de desarrolladores integrando la programacion moderna, agil y enfocada a superar los retos impuestos para superarme cada dia.
            </h3>

            </div>

          </div>

          <div className="flex flex-col justify-center mt-5 mb-10 ">
            <h3 className="text-gray-700 semibold text-center mb-3 text-3xl ">COMPETENCIAS</h3>
            <div className="grid grid-cols-2 gap-4 ml-16 ">
              <div className="text-gray-500">
                <ul className="list-disc">
                  <li>ORGANIZADO</li>
                </ul>
              </div>
              <div className="text-gray-500">
                <ul className="list-disc">
                  <li>COLABORATIVO</li>
                </ul>
              </div>
              <div className="text-gray-500">
                <ul className="list-disc">
                  <li>CREATIVO</li>
                </ul>
              </div>
              <div className="text-gray-500">
                <ul className="list-disc">
                  <li>PROFESIONAL</li>
                </ul>
              </div>
              <div className="text-gray-500">
                <ul className="list-disc">
                  <li>TRABAJO BAJO PRESION</li>
                </ul>
              </div>
            </div>


          </div>
        </div>



      </div>
    </div>

  );
}

export default App;
