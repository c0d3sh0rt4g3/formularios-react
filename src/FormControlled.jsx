import {useRef, useState} from "react";

const FormControlled = () =>{
    const [taskResult, setFormState] = useState(null)
    const form = useRef(null)

    const [todo, setTodo] = useState({
        title:"todo 01",
        description:"description 01",
        state:"pending",
        priority: ""
    })

    const handleSubmit = e => {
        e.preventDefault()
        const data = new FormData(form.current)
        console.log(...data.entries())

        const objectData = Object.fromEntries([...data.entries()])
        console.log(objectData)

        const {name, description, state} = objectData

        if (!name.trim() || !description.trim() || !state.trim()){
            console.log("ERROR!!!")
            setFormState("error")
            return
        }
        console.log(`Sending ${todo.title} ${todo.description}, ${todo.state} and ${todo.priority}...`)
        setFormState("success")
    }
    const handleChange = e =>{
        const todoElementVal = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setTodo({...todo, [e.target.name]:todoElementVal})
    }
    return (
        <>
            {taskResult === "error" ? (
            <p style={{ color: "red" }}>Form has errors. Please fill in all fields.</p>
             ) : taskResult === "success" ? (
            <p style={{ color: "green" }}>Form submitted successfully!</p>
            ) : null}
            <form onSubmit={handleSubmit} ref={form}>
                <input
                    name={"name"}
                    placeholder={"Task name"}
                    type={"text"}
                    className={"form-control mb-2"}
                    value={todo.title}
                    onChange={e => handleChange(e)}
                />
                <textarea
                    name={"description"}
                    placeholder={"Introduce a task name"}
                    className={"form-control mb-2"}
                    value={todo.description}
                    onChange={e => handleChange(e)}
                />
                <select
                    name={"state"}
                    className={"form-control mb-2"}
                    value={todo.state}
                    onChange={e => handleChange(e)}
                >
                    <option value={"pending"}>Pending</option>
                    <option value={"completed"}>Completed</option>
                </select>
                <label htmlFor={"priority"}>Priority </label>
                <input
                    name={"priority"}
                    type={"checkbox"}
                    checked={todo.priority}
                    onChange={e => handleChange(e)}
                />
                <input
                    type={"submit"}
                    className={"btn btn-primary btn-black"}
                    value={"Save"}
                />
            </form>
        </>
    )
}

export default FormControlled