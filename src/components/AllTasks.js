import "./AllTasks.css"
import data from "../data"

const AllTasks = () => {
    return <div>
        {
            data.map((oneTasks) => {
                const {id,name} = oneTask
                
                return <div className="one-task">
                    <h4>{name}</h4>
                </div>
            })
        }
    </div>
}

export default AllTasks