//inform the type of props to ts
type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}
export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props
    return (
        <div>
            <h2>
                {props.isLoggedIn
                    ? `Hello ! Hi ${props.name} Welcome ! You have ${messageCount} unread messages`
                    : 'Welocom Guest'}
            </h2>
        </div>
    )
}
