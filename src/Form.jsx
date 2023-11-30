import {useRef} from "react";

const Form = () =>{
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
            return
        }
        console.log("Sending object...")
    }
    return (
        <>
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