import React, { useEffect, useState } from "react";
import TodoList from "../Todo/TodoList.tsx";
import UserProfile from "../UserProfile/UserProfile.tsx";
import { TodoForm } from "../Todo/TodoList.tsx";
import TodoProvider from "../../context/TodosContext.tsx";
import "./DashboardPage.css";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const DashboardPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user,setUser]=useState('');
    const [showTodo, setShowTodo] = useState('');
    
  const history = useHistory();
    useEffect(() => {
        setIsAuthenticated(localStorage.getItem('isAuthenticated'));
        setUser(localStorage.getItem('user'));
    }, [isAuthenticated]);
    const handleClick = () => {
        history.push("/login");
    };
    return (<>
        {!isAuthenticated ? <div className="dashboardUnAuthorised">
            <h1>
                UnAuthorised Access
            </h1>
            <button className="primary" onClick={handleClick}>
                Back To Login
            </button>
        </div>
            : 
            <div className="dashboardMain">
                <UserProfile user={user} showTodo={showTodo} setShowTodo={setShowTodo}/>
                { showTodo && <div className="dashboardBody">
                    <TodoProvider>
                        <div className="dashboard">
                            <TodoForm />
                        </div>
                        <div className="dashboardPageDiv todoList">
                            <TodoList />
                        </div>
                    </TodoProvider>
                </div>}
            </div>}
    </>
    );

}

export default DashboardPage;




// <div className="dashboardMain">
//             <h1>
//                 Unauthorised Access
//             </h1>
//         </div>
//         :
//         <div className="dashboardMain">
//             <UserProfile />
//             <div className="dashboardBody">
//                 <TodoProvider>
//                     <div className="dashboard">
//                         <TodoForm />
//                     </div>
//                     <div className="dashboardPageDiv todoList">
//                         <TodoList />
//                     </div>
//                 </TodoProvider>
//             </div>
//         </div>