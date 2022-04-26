import { ReactNode } from "react"
import { TUser } from "./user"

export type TMessage = {
    text: ReactNode
    id: string
    sendedAt: string
    sender: TUser
}