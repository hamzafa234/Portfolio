import Box from './Box.jsx'
import Bigbox from './Bigbox.jsx';
import './App.css' 
import Smallbox from './tech.jsx';
import Contact from './contact.jsx'
function App() {
  return(
    <>
      <div className="grid-container">
        <Bigbox title="Hamza Fahad" paragraph="I am a college sophomore and have been coding since highschool. I have strong soft skills such as communication and knowing how to work in a team."/>
        <Bigbox 
          title="Technologies" 
          paragraph={<><Smallbox word="Java" />  <Smallbox word="Python" /> <Smallbox word="ZSH" /> <Smallbox word="Linux" /> <Smallbox word="React" /> <Smallbox word="Git" /> <Smallbox word="Vim" /></>} 
        />
        <Box 
          title="Education" 
          paragraph={<ul><li>DePaul University</li><li>BS in Computer Science</li><li>Minor in Statistics</li><li>3.82 GPA</li></ul>}
          titletwo="Completed CS Classes"
          paragraphtwo={<ul><li>Technical Writing</li><li>Discrete Math</li><li>Data Strutures</li><li>Intro to Computer Science</li><li>Calculus 1 & 2</li></ul>}
        />
        <Box title="Based in Chicago" image="./city.jpeg" titletwo="Willing to relocate to:" paragraphtwo={<><ul><li>San Francisco</li><li>New York</li><li>Seattle</li></ul></>}></Box>
        <Bigbox title="Projects" paragraph="text"></Bigbox>
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