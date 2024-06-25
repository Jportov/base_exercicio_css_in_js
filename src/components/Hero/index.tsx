import HeroEstilizado from './styles' // Caminho correto para o componente estilizado

const Hero = () => (
  <HeroEstilizado>
    <div className="form">
      <div className="container">
        <h2 className="heroTitle">
          As melhores vagas para tecnologia, design e artes visuais.
        </h2>
      </div>
    </div>
  </HeroEstilizado>
)

export default Hero
