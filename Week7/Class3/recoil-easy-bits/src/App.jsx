import { useRecoilState, useRecoilValue } from "recoil";
import { jobsAtom, messagesAtom, netwrokAtom, notificationsAtom, totalNotificationCount } from "./atoms";


function App() {
const networkNotificationsCount=useRecoilValue(netwrokAtom)
const jobsAtomCount=useRecoilValue(jobsAtom);
const notiCount=useRecoilValue(notificationsAtom);
const [messageCount,setMessageCount]=useRecoilState(messagesAtom)
const totalNotiCount=useRecoilState(totalNotificationCount)

  return (
    <>
      <button>Home</button>

      <button>
        My network{" "}
        {networkNotificationsCount >= 100 ? "99+" : networkNotificationsCount}
      </button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Messages {messageCount}</button>
      <button>Notifications {notiCount}</button>

      <button>Me {totalNotiCount}</button>
      <br />
      <br />
      <button
        onClick={() => {
          setMessageCount((c) => c + 1);
        }}
      >
        Update message count
      </button>
    </>
  );
}

export default App;
