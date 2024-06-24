import avatar from '../assets/YT.gif'
import avatarYQ from '../assets/YQ.png'
import TypedThankyou from '../styles/TypedThankyou.jsx'
import { BioText, DescWrapper, SubHeading } from '../styles/Home.style.js'
const MoreDescContainer = () => {
  return (
    <>
      <DescWrapper>
        <BioText>
          <SubHeading>Oh! Knowing More about me 😍</SubHeading>
          <h1>
            <TypedThankyou />
          </h1>
          <br />
          I have been associated with several theater groups in Karnataka and have performed in
          multiple national shows. Additionally, I am a stand-up comedian, writer, sculptor,
          multilingual(I am proficient in Kannada, English, Hindi, Urdu, Telugu, Tamil, and
          Sanskrit. Additionally, I can understand almost every dialect of Hindi, including
          Bhojpuri, Maithili, Marwari, Punjabi, Haryanvi, and more.), cook, Rashtrapati Awarded
          scout, National Robowar runner, and an FPS gamer who has both won and organized various
          gaming events.
          <br />
          <table align="center">
            <td>
              <a href="https://www.youtube.com/watch?v=Aons4ZUud4w&list=PLnzasz2oK8E25AKLWGcfj3z5xu1wPBdfX">
                <img border="0" alt="youtube" src={avatar} width="50" height="50" />
              </a>
            </td>
            <td />
            <td>
              <a href="https://www.yourquote.in/eshan-eshan-sklj/quotes">
                <img border="0" alt="youtube" src={avatarYQ} width="50" height="50" />
              </a>
            </td>
            <tr>
              <td>
                <a href="https://www.youtube.com/watch?v=Aons4ZUud4w&list=PLnzasz2oK8E25AKLWGcfj3z5xu1wPBdfX">
                  Watch
                </a>
                &emsp;
              </td>
              <td />
              <td>
                <a href="https://www.yourquote.in/eshan-eshan-sklj/quotes">Read</a>
              </td>
            </tr>
          </table>
        </BioText>
      </DescWrapper>
    </>
  )
}

export default MoreDescContainer
