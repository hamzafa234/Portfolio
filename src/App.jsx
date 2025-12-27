import Box from './Box.jsx'
import Bigbox from './Bigbox.jsx';
import './App.css' 
import Smallbox from './tech.jsx';
import Contact from './contact.jsx'
import Tall from './tall.jsx'

function App() {
  return(
    <>
      <div className="grid-container">
        <Bigbox title="Hamza Fahad" paragraph="I am a college sophomore and have been coding since high school. I have soft skills such as communication and knowing how to work in a team."/>
        <Bigbox 
          title="Technologies" 
          paragraph={<><Smallbox word="Java" />  <Smallbox word="Python" /> <Smallbox word="PostgreSQL" /> <Smallbox word="Linux" /> <Smallbox word="React" /> <Smallbox word="Git" /></>} 
        />
        <Box 
          title="Education" 
          paragraph={<ul><li>DePaul University</li><li>BS in Computer Science</li><li>Minor in Statistics</li><li>3.82 GPA</li></ul>}
          titletwo="Completed CS Classes"
          paragraphtwo={<ul><li>Technical Writing</li><li>Discrete Math</li><li>Data Strutures</li><li>Intro to Computer Science</li><li>Calculus 1 & 2</li></ul>}
        />
        <Box title="Based in Chicago" image="./city.jpeg" titletwo="Willing to relocate to:" paragraphtwo={<><ul><li>San Francisco</li><li>New York</li><li>Seattle</li></ul></>}></Box>
        <Tall 
          title="Retail Terminal" linkUrl="https://github.com/hamzafa234/Retail-Terminal" 
          paragraph={
            <>
            The purpose of this project was to help retail investors access risk. The Black Scholes Merton model is used to calculate distance to default. When the program is run it will display distance to default and specific details about a companies debt. One of the problems it solves it turning unstrutured data into strutured data. Not only does it tell you about the health of a company today, but also how likely it was to go under up to 10 years ago.
            </>
          }
          secondParagraph={
            <>
              <Smallbox word="Python" /> <Smallbox word="PostgreSQL" /> <Smallbox word="Pandas" /> <Smallbox word="Ollama "/>
            </>
          } 
        >
        </Tall>
      </div>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <Contact link="https://github.com/hamzafa234" image="./logo.png"></Contact>
      </div>
      <div style={{ position: 'fixed', bottom: '20px', right: '70px'}}>
        <Contact link="https://www.linkedin.com/in/hamza-fahad-131501283/" image="./linkedin.png"></Contact> 
      </div>
      <div style={{ position: 'fixed', bottom: '20px', right: '120px'}}>
        <Smallbox word="hamzafa234@gmail.com"/> 
      </div>
    </>
  );  
}
export default App
