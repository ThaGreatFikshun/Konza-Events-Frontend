import { createChatBotMessage } from "react-chatbot-kit";
import ChatbotAvatar from "../Chatbot/ChatbotAvatar";
import OptionsWidget from "../Widget/OptionsWidget";
import EventsWidget from "../Widget/EventsWidget";
import UpcomingEventsWidget from "../Widget/UpcomingEventsWidget";


const botAvatarImage =
  "https://i.postimg.cc/zDLLW8xP/cartoon-style-robot-vectorart-78370-4103.jpg";
const userAvatarImage =
  "https://i.postimg.cc/tJRxQx3q/isolated-young-handsome-man-different-poses-white-background-illustration-632498-859.jpg";

const config = {
  initialMessages: [
    createChatBotMessage("Greetings and welcome! My name is KEB How may I be of service to you today?", {
      delay: 500,
      widget: "optionsWidget",
    }),
  ],
  botName: "KEB",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#007A37",
    },
    chatButton: {
      backgroundColor: "#007A37",
    },
  },
  customComponents: {
    botAvatar: (props) => (
      <ChatbotAvatar {...props} src={botAvatarImage} alt="Bot" />
    ),
    userAvatar: (props) => (
      <ChatbotAvatar {...props} src={userAvatarImage} alt="User" />
    ),
  },
  widgets: [
    {
      widgetName: "optionsWidget",
      widgetFunc: (props) => <OptionsWidget {...props} />,
    },
    {
      widgetName: "eventsWidget",
      widgetFunc: (props) => <EventsWidget {...props} data={{ events: [{ title: "Tech Expo 2024" }, { title: "Art and Culture Festival" }, { title: "Music Fest Extravaganza" }, { title: "Entrepreneurship Summit" }, { title: "Science and Discovery Expo" }] }} />,
    },
    {
      widgetName: 'upcomingEventsWidget',
      widgetFunc: (props) => <UpcomingEventsWidget {...props} data={{
        events: [
          { title: "Konza Marathon", date: "May 5, 2024" },

        ]
      }} />,
    },

  ],
};

export default config;
