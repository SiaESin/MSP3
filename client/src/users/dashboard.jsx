import { useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";

export default function Dashboard() {
    const user = useContext(CurrentUser);
    return (
        <div>   
            <h1>Dashboard</h1>
            {!!user && <h2>Thank you for logging in. {user.name} Let's buy some books!</h2> }
        </div>
    )
}