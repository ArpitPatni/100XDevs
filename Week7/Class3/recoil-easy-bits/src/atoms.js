import { atom, selector } from "recoil"

export const netwrokAtom=atom({
    key:"networkAtom",
    default:104
})
export const jobsAtom=atom({
    key:"jobsAtom",
    default:0
})
export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 12,
});
export const messagesAtom=atom({
    key:"messagesAtom",
    default:0
})

export const totalNotificationCount = selector({
  key: "totalNotificationCount", 
  get:({get})=>{
    const networkAtomCount=get(netwrokAtom)
    const jobsAtomCount=get(jobsAtom)
    const notificationsAtomCount=get(notificationsAtom)
    const messagesAtomCount=get(messagesAtom)
    return networkAtomCount+jobsAtomCount+notificationsAtomCount+messagesAtomCount
  }
});