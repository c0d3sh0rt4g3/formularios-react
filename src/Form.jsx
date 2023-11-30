import {useRef, useState} from "react";

const Form = () =>{
    const [taskResult, setFormState] = useState(null)
    const form = useRef(null)
    const handleSubmit = e => {
        e.preventDefault()
        const data = new FormData(form.current)
        console.log(...data.entries())

        const objectData = Object.fromEntries([...data.entries()])
        console.log(objectData)

        const {Name, Description, State} = objectData

        if (!Name.trim() || !Description.trim() || !State.trim()){
            console.log("ERROR!!!")
            setFormState("error")
            return
        }
        console.log("Sending object...")
        setFormState("success")
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
                name={"Name"}
                placeholder={"Task name"}
                type={"text"}
                className={"form-control mb-2"}
                defaultValue={"Task 1"}
                />
                <textarea
                name={"Description"}
                placeholder={"Introduce a task name"}
                className={"form-control mb-2"}
                defaultValue={"Task description"}
                />
                <select
                name={"State"}
                className={"form-control mb-2"}
                defaultValue={"Pending"}
                >
                    <option value={"pending"}>Pending</option>
                    <option value={"completed"}>Completed</option>
                </select>
                <input
                type={"submit"}
                className={"btn btn-primary btn-black"}
                value={"Save"}
                />
            </form>
        </>
    )
}

export default Form