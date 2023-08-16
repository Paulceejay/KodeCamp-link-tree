import slackImg from "../assets/slack.svg"
import gitImg from "../assets/github.svg";
import "./SlackGit.css"

const SlackGit = () => {
   return (
     <div className="slack-git">
       <p>
         <img src={slackImg} alt="Slack logo" />
         <img src={gitImg} alt="github logo" />
       </p>
     </div>
   );
}

export default SlackGit